window.addEventListener("load", function () {
    console.log("Sidebar highlight script loaded ✅");
  
    const ORDER = ["home","research","publications","cv","interests"];
  
    function idFromLink(a) {
      const href = a.getAttribute("href") || "";
      if (href === "/" || href === "/#home") return "home";
      const m = href.match(/^\/#([A-Za-z0-9\-_]+)/);
      return (m && ORDER.includes(m[1])) ? m[1] : null;
    }
  
    const linkById = new Map();
    document.querySelectorAll("#sidebar a.nav-link[href]").forEach(a => {
      const id = idFromLink(a);
      if (id) linkById.set(id, a);
    });
  
    const items = ORDER.map(id => {
      const sec = document.getElementById(id);
      const link = linkById.get(id);
      return (sec && link) ? { id, sec, link } : null;
    }).filter(Boolean);
  
    if (!items.length) return;
  
    const OFFSET = 100;
    const setActive = id =>
      items.forEach(it => it.link.classList.toggle("active", it.id === id));
  
    function updateActive() {
      const y = window.scrollY;
      const docH = document.documentElement.scrollHeight;
      const winH = window.innerHeight;
  
      if (y + winH >= docH - 2) return setActive(items.at(-1).id);
  
      let current = items[0].id;
      for (const it of items) {
        if (y >= it.sec.offsetTop - OFFSET) current = it.id;
        else break;
      }
      setActive(current);
    }
  
    items.forEach(({ link, sec, id }) => {
      link.addEventListener("click", e => {
        e.preventDefault();
        window.scrollTo({ top: sec.offsetTop - (OFFSET - 1), behavior: "smooth" });
        history.replaceState(null, "", "/#" + id);
        setActive(id);
      });
    });
  
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
  });
  