---
layout: default
title: Research
permalink: /research/
---

<main class="site-main">
  <div class="page-header">
    <h1 class="page-title">Research</h1>
  </div>

  <!-- Research statement -->
  <section class="section">
    <div class="prose research-statement">
      <p>
        My research develops <em>practical systems</em> that bring
        <strong>security and privacy to real-world networks — without compromising performance</strong>.
        Most existing solutions treat the Internet as a black box, adding protections on top that slow
        applications or demand tech-savvy users. In contrast, my work pushes security functions
        <em>into the network itself</em> and uses <strong>hardware–software co-design</strong>
        to make defenses scalable, performant, and deployable today.
      </p>
      <p>My research philosophy is guided by three principles:</p>
    </div>

    <ul class="principles">
      <li class="principle">
        Security and privacy functions should run <em>in-network</em> or be natively
        <strong>network-aware</strong>, rather than bolted on at endpoints.
      </li>
      <li class="principle">
        <strong>Hardware–software co-design</strong> is essential for scalable defenses —
        programmable data planes (P4, eBPF) unlock performance that software alone cannot match.
      </li>
      <li class="principle">
        <strong>Cooperation among incentive-aligned actors</strong> enables deployable,
        collective mechanisms that protect users at Internet scale.
      </li>
    </ul>

    <div class="prose">
      <p>
        Across all efforts, I emphasize <strong>building prototypes, open-source artifacts,
        and deployable systems</strong> to ensure real-world impact. Taken together, my work
        lays the foundation for ubiquitous, deployable network security and privacy —
        protecting users at Internet scale.
      </p>
    </div>
  </section>

  <!-- Projects -->
  <section class="section">
    <h2 class="section-label">Projects</h2>

    <!-- SmartCookie -->
    <div class="pub-card" style="margin-bottom:16px;">
      <span class="pub-venue">USENIX Security 2024 &nbsp;·&nbsp; Network Edge</span>
      <div class="pub-title">SmartCookie</div>
      <div class="prose" style="margin:8px 0 12px; font-size:0.95rem;">
        <p>
          A layered hardware–software defense that blocks large-scale SYN-flood attacks
          without degrading legitimate user performance. SmartCookie splits the SYN-cookie
          computation between a P4 programmable switch (hardware) and a software proxy,
          achieving line-rate protection while maintaining correct TCP semantics.
          It is currently <strong>patent-pending</strong> and was supported by three years
          of <strong>NSF GRFP</strong> funding.
        </p>
      </div>
      <div class="pub-links">
        <a href="/documents/SmartCookie_Paper_USENIXSec24.pdf"
           class="pub-link" target="_blank" rel="noopener">Paper</a>
        <a href="/documents/SmartCookie_Artifact_USENIXSec24.pdf"
           class="pub-link" target="_blank" rel="noopener">Artifact</a>
        <a href="/documents/SmartCookie_Slides_USENIXSec24.pdf"
           class="pub-link" target="_blank" rel="noopener">Slides</a>
        <a href="https://www.youtube.com/embed/oNi_4wCo9Gg?si=2YLaf0dpxxprv_WW"
           class="pub-link" target="_blank" rel="noopener">Demo Video</a>
        <a href="https://github.com/Princeton-Cabernet/p4-projects/tree/master/SmartCookie"
           class="pub-link" target="_blank" rel="noopener">Code (GitHub)</a>
      </div>
    </div>

    <!-- 5G Fronthaul Security -->
    <div class="pub-card" style="margin-bottom:16px;">
      <span class="pub-venue">USENIX Security 2024 &nbsp;·&nbsp; 5G / Mobile Security</span>
      <div class="pub-title">5G Fronthaul Security</div>
      <div class="prose" style="margin:8px 0 12px; font-size:0.95rem;">
        <p>
          A study uncovering new integrity vulnerabilities in 5G fronthaul protocols —
          the critical link between base station antennas and the baseband processing unit.
          This work (with Microsoft Research) demonstrates practical attack scenarios and
          prompts calls for stronger integrity protections in emerging cellular standards.
          Currently <strong>patent-pending</strong>.
        </p>
      </div>
      <div class="pub-links">
        <a href="/documents/FronthaulSecurity_Paper_USENIXSec24.pdf"
           class="pub-link" target="_blank" rel="noopener">Paper</a>
      </div>
    </div>

    <!-- Tango -->
    <div class="pub-card" style="margin-bottom:16px;">
      <span class="pub-venue">NSDI 2024 &nbsp;·&nbsp; Network Core &nbsp;·&nbsp; IETF/IRTF ANRP</span>
      <div class="pub-title">TANGO</div>
      <div class="prose" style="margin:8px 0 12px; font-size:0.95rem;">
        <p>
          A system for <em>secure collaborative route control</em> across the public Internet.
          Cooperating edge networks use only existing BGP mechanisms to jointly discover and
          select safer, higher-quality Internet paths — with no changes to core routers.
          TANGO received the <strong>IETF/IRTF Applied Networking Research Prize</strong>
          for outstanding applied networking research.
        </p>
      </div>
      <div class="pub-links">
        <a href="/documents/Tango_Paper_NSDI24.pdf"
           class="pub-link" target="_blank" rel="noopener">Paper</a>
        <a href="/documents/Tango_Slides_NSDI24.pdf"
           class="pub-link" target="_blank" rel="noopener">Slides</a>
      </div>
    </div>

    <!-- Sieve -->
    <div class="pub-card" style="margin-bottom:16px;">
      <span class="pub-venue">ONF P4 Workshop 2023 &nbsp;·&nbsp; Network Edge</span>
      <div class="pub-title">Sieve</div>
      <div class="prose" style="margin:8px 0 12px; font-size:0.95rem;">
        <p>
          A generalization of SmartCookie's layered split-proxy design to a broader class
          of volumetric DDoS attacks. Sieve introduces a principled framework for deploying
          layered, in-network defenses that compose hardware filtering with software
          intelligence.
        </p>
      </div>
      <div class="pub-links">
        <a href="/documents/Sieve_Paper_P4Workshop23.pdf"
           class="pub-link" target="_blank" rel="noopener">Paper</a>
        <a href="/documents/Sieve_Slides_P4Workshop23.pptx"
           class="pub-link" target="_blank" rel="noopener">Slides</a>
      </div>
    </div>

    <!-- PraxiGuard -->
    <div class="pub-card">
      <span class="pub-venue">Ongoing Work &nbsp;·&nbsp; Privacy</span>
      <div class="pub-title">PraxiGuard</div>
      <div class="prose" style="margin:8px 0 12px; font-size:0.95rem;">
        <p>
          A principled, network-aware model for splitting traffic across multiple paths
          to jointly optimize privacy and performance, mitigating website-fingerprinting attacks.
          PraxiGuard secured Princeton's <strong>Wallace Memorial Fellowship</strong> —
          the highest honor for graduate engineering research excellence.
        </p>
      </div>
    </div>
  </section>

  <!-- Future directions -->
  <section class="section">
    <h2 class="section-label">At Amherst</h2>
    <div class="prose">
      <p>
        I am excited to extend this research agenda at Amherst in directions that invite
        hands-on undergraduate participation:
      </p>
      <ul>
        <li>
          <strong>Measurement studies closer to the user</strong> — turning campus and home
          networks into living laboratories for identifying vulnerabilities in emerging devices
          such as IoT sensors and drones.
        </li>
        <li>
          <strong>A unifying framework for split-functionality defenses</strong> — combining
          centralized reasoning with distributed enforcement using accessible platforms like eBPF.
        </li>
        <li>
          <strong>Security and performance challenges of AI workloads</strong> — large-language-model
          inference stresses networks in new ways and opens novel attack surfaces.
        </li>
      </ul>
      <p>
        Please <a href="mailto:syoo@amherst.edu">reach out</a> if you are interested in
        collaborating or joining my research group.
      </p>
    </div>
  </section>

</main>
