---
layout: page
title: Welcome!
icon: fas fa-home
---


<!-- =================== HOME =================== -->
<section id="home">
  {% assign tab = site.tabs | where: "title", "Home" | first %}
  <h2>{{ tab.title }}</h2>
  {% assign section_name = "home" %}
  {% capture file_path %}sections/{{ section_name }}.md{% endcapture %}
  {% capture content %}{% include {{ file_path }} %}{% endcapture %}
  {{ content | markdownify }}
</section>

<!-- =================== RESEARCH =================== -->
<section id="research">
  {% assign tab = site.tabs | where: "title", "Research" | first %}
  <h2>{{ tab.title }}</h2>
  {% assign section_name = "research" %}
  {% capture file_path %}sections/{{ section_name }}.md{% endcapture %}
  {% capture content %}{% include {{ file_path }} %}{% endcapture %}
  {{ content | markdownify }}
</section>

<!-- =================== PUBLICATIONS =================== -->
<section id="publications">
  {% assign tab = site.tabs | where: "title", "Publications" | first %}
  <h2>{{ tab.title }}</h2>
  {% assign section_name = "publications" %}
  {% capture file_path %}sections/{{ section_name }}.md{% endcapture %}
  {% capture content %}{% include {{ file_path }} %}{% endcapture %}
  {{ content | markdownify }}
</section>

<!-- =================== CV =================== -->
<section id="cv">
  {% assign tab = site.tabs | where: "title", "CV" | first %}
  <h2>{{ tab.title }}</h2>
  {% assign section_name = "cv" %}
  {% capture file_path %}sections/{{ section_name }}.md{% endcapture %}
  {% capture content %}{% include {{ file_path }} %}{% endcapture %}
  {{ content | markdownify }}
</section>

<!-- =================== INTERESTS =================== -->
<section id="interests">
  {% assign tab = site.tabs | where: "title", "Out-of-Band Interests" | first %}
  <h2>{{ tab.title }}</h2>
  {% assign section_name = "interests" %}
  {% capture file_path %}sections/{{ section_name }}.md{% endcapture %}
  {% capture content %}{% include {{ file_path }} %}{% endcapture %}
  {{ content | markdownify }}
</section>

{% raw %}
<style>
/* make the highlight visible */
a.active { font-weight: 700; text-decoration: underline; }
</style>

<script>
window.addEventListener("load", function () {
  const ORDER = ["home","research","publications","cv","interests"];
  const ALIAS = {
    "home":"home", "welcome":"home", "", "home",
    "research":"research",
    "publications":"publications",
    "cv":"cv",
    "interests":"interests",
    "out-of-band-interests":"interests"
  };

  function idFromLink(a) {
    const raw = a.getAttribute("href") || "";
    try {
      const u = new URL(raw, location.href);

      // 1) Hash-based links (#research, /#research, /repo/#research)
      if (u.hash) {
        const id = u.hash.slice(1).toLowerCase();
        if (ORDER.includes(id)) return id;
      }

      // 2) Chirpy tab-style links (/Research/, /Publications/, etc.)
      const segs = u.pathname.replace(/\/+/g,'/').split('/').filter(Boolean);
      // last segment or '' for "/"
      const last = (segs[segs.length-1] || "").toLowerCase();
      if (ALIAS[last]) return ALIAS[last];

      // 3) Root "/" -> home
      if (u.pathname === "/") return "home";
    } catch (e) {}
    return null;
  }

  // Build section<->link pairs
  const linkById = new Map();
  Array.from(document.querySelectorAll("a[href]")).forEach(a => {
    const id = idFromLink(a);
    if (id && ORDER.includes(id) && !linkById.has(id)) linkById.set(id, a);
  });

  const items = ORDER.map(id => {
    const section = document.getElementById(id);
    const link = linkById.get(id);
    return (section && link) ? { id, section, link } : null;
  }).filter(Boolean);

  if (!items.length) return;

  const OFFSET = 100;
  const setActive = idxOrId => {
    let targetId = typeof idxOrId === "number" ? items[idxOrId].id : idxOrId;
    items.forEach(({ id, link }) => link.classList.toggle("active", id === targetId));
  };

  function updateActive() {
    const y = window.scrollY || window.pageYOffset;
    const docH = document.documentElement.scrollHeight;
    const winH = window.innerHeight;

    if (y + winH >= docH - 2) { setActive(items[items.length - 1].id); return; }

    let idx = 0;
    for (let i = 0; i < items.length; i++) {
      if (y >= (items[i].section.offsetTop - OFFSET)) idx = i; else break;
    }
    setActive(idx);
  }

  // Intercept clicks on nav links that map to our sections (including /Research/)
  items.forEach(({ link, id, section }) => {
    link.addEventListener("click", e => {
      const idMapped = idFromLink(link);
      if (idMapped) {
        e.preventDefault();
        window.scrollTo({ top: section.offsetTop - (OFFSET - 1), behavior: "smooth" });
        history.replaceState(null, "", "#" + id);
        setActive(id);
      }
    });
  });

  updateActive();
  window.addEventListener("scroll", updateActive, { passive: true });
  window.addEventListener("resize", updateActive);
});
</script>
{% endraw %}



<!-- {% raw %}
<script>
// document.addEventListener("DOMContentLoaded", function () {
window.addEventListener("load", function () {
  // Sections in scroll order (IDs must match your <section id="...">)
  const ORDER = ["home","research","publications","cv","interests"];

  // Find the sidebar links by href, not by class names
  const anchors = Array.from(document.querySelectorAll("a[href]"));
  const linkById = new Map();

  anchors.forEach(a => {
    const href = a.getAttribute("href") || "";
    if (href === "/" || href === "") { linkById.set("home", a); return; }
    const m = href.match(/#([A-Za-z0-9\-_]+)/);
    if (m && ORDER.includes(m[1]) && !linkById.has(m[1])) {
      linkById.set(m[1], a);
    }
  });

  const items = ORDER.map(id => {
    const section = document.getElementById(id);
    const link = linkById.get(id);
    return (section && link) ? { id, section, link } : null;
  }).filter(Boolean);

  if (items.length === 0) return;

  const OFFSET = 100;
  const setActive = idx => items.forEach((it, i) => it.link.classList.toggle("active", i === idx));

  function updateActive() {
    const y = window.scrollY || window.pageYOffset;
    const docH = document.documentElement.scrollHeight;
    const winH = window.innerHeight;

    if (y + winH >= docH - 2) { setActive(items.length - 1); return; }
    if (y <= items[0].section.offsetTop + 200) { setActive(0); return; }

    let idx = 0;
    for (let i = 0; i < items.length; i++) {
      if (y >= (items[i].section.offsetTop - OFFSET)) idx = i; else break;
    }
    setActive(idx);
  }

  // Smooth scroll + keep URL hash consistent
  items.forEach(({ link, id, section }) => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href") || "";
      if (href === "/" || href.startsWith("/#") || href.startsWith("#")) {
        e.preventDefault();
        window.scrollTo({ top: section.offsetTop - (OFFSET - 1), behavior: "smooth" });
        history.replaceState(null, "", "/#" + id);
      }
    });
  });

  updateActive();
  window.addEventListener("scroll", updateActive, { passive: true });
  window.addEventListener("resize", updateActive);
});
</script>
{% endraw %}

 -->

<!-- 

<script>
document.addEventListener("DOMContentLoaded", function () {
  // Grab all sidebar links
  const rawLinks = Array.from(document.querySelectorAll(".nav-item > a.nav-link"));

  // Build (link,id,section) triples. Map "/" to "home".
  const items = rawLinks.map(link => {
    const href = link.getAttribute("href") || "";
    let id = null;

    if (href.includes("#")) {
      id = href.split("#")[1];
    } else if (href === "/") { // Home in Chirpy
      id = "home";
    }

    const section = id ? document.getElementById(id) : null;
    return section ? { link, id, section } : null;
  }).filter(Boolean);

  // If Home wasn't found, bail early to avoid errors
  if (items.length === 0) return;

  const OFFSET = 100; // match your header/spacing
  const setActive = (idx) => {
    items.forEach((it, i) => it.link.classList.toggle("active", i === idx));
  };

  function updateActive() {
    const scrollY = window.scrollY || window.pageYOffset;
    const docH = document.documentElement.scrollHeight;
    const winH = window.innerHeight;

    // Bottom → last section
    if (scrollY + winH >= docH - 2) {
      setActive(items.length - 1);
      return;
    }

    // Top → Home (first item)
    const firstTop = items[0].section.offsetTop;
    if (scrollY <= firstTop + 200) {
      setActive(0);
      return;
    }

    // Otherwise, pick last section whose top is above the viewport top + OFFSET
    let idx = 0;
    for (let i = 0; i < items.length; i++) {
      const top = items[i].section.offsetTop - OFFSET;
      if (scrollY >= top) idx = i; else break;
    }
    setActive(idx);
  }

  // Smooth scroll + hash update
  items.forEach(({ link, id, section }) => {
    link.addEventListener("click", function (e) {
      const href = link.getAttribute("href") || "";
      if (href === "/" || href.startsWith("/#")) {
        e.preventDefault();
        window.scrollTo({ top: section.offsetTop - (OFFSET - 1), behavior: "smooth" });
        history.replaceState(null, "", "/#" + id);
      }
    });
  });

  updateActive();
  window.addEventListener("scroll", updateActive, { passive: true });
  window.addEventListener("resize", updateActive);
});
</script>


 -->
