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

<style>
/* temporary: visible highlight so we can confirm it works */
a.active { font-weight: 700; text-decoration: underline; }
</style>

<script>
window.addEventListener('load', () => {
  const ORDER = ['home','research','publications','cv','interests'];

  // Map section id -> nav <a>. Works for "/", "/#id", "/anything/#id", and "#id"
  const linkById = new Map();
  document.querySelectorAll('a[href]').forEach(a => {
    const raw = a.getAttribute('href') || '';
    let hash = '';
    try { hash = new URL(raw, location.href).hash.slice(1); } catch { /* ignore */ }

    // Treat "/" (Home) specially
    if ((raw === '/' || raw === '#home') && !linkById.has('home')) linkById.set('home', a);

    if (ORDER.includes(hash) && !linkById.has(hash)) linkById.set(hash, a);
  });

  const items = ORDER.map(id => {
    const el = document.getElementById(id);
    const link = linkById.get(id);
    return (el && link) ? { id, el, link } : null;
  }).filter(Boolean);

  if (!items.length) return;

  const setActive = (targetId) => {
    items.forEach(({ id, link }) => link.classList.toggle('active', id === targetId));
  };

  // Highlight the section mostly in view
  const io = new IntersectionObserver((entries) => {
    const top = entries
      .filter(e => e.isIntersecting)
      .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!top) return;
    const id = top.target.id;
    if (ORDER.includes(id)) {
      setActive(id);
      history.replaceState(null, '', '#' + id);
    }
  }, { rootMargin: '-40% 0px -50% 0px', threshold: [0,0.25,0.5,0.75,1] });

  items.forEach(({ el }) => io.observe(el));

  // Smooth scroll on click (don’t break external links)
  const OFFSET = 100;
  items.forEach(({ link, el, id }) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href') || '';
      let hash = '';
      try { hash = new URL(href, location.href).hash.slice(1); } catch {}
      if (ORDER.includes(hash) || href === '/' || href === '#home') {
        e.preventDefault();
        window.scrollTo({ top: el.offsetTop - (OFFSET - 1), behavior: 'smooth' });
        history.replaceState(null, '', '#' + id);
      }
    });
  });
});
</script>


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
