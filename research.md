---
layout: default
title: Research
permalink: /research/
---

<main class="site-main">
  <div class="page-header">
    <h1 class="page-title">Research</h1>
    <p class="page-desc">
      I design and build practical systems that deliver security and privacy on
      today's networks — without compromising performance.
    </p>
  </div>

  <!-- Overview + Philosophy -->
  <section class="section">
    <div class="prose">
      <p>
        The Internet was not designed with security in mind. Its protocols were built on the premise
        that all participants act in good faith — an assumption that simply does not hold in practice.
        This creates two fundamental challenges my work directly addresses: users and services cannot
        control <em>who can send them traffic</em>, enabling DDoS and protocol-abuse attacks at scale;
        and users cannot control <em>how their own traffic is routed</em>, leaving them subject to
        interception and path manipulation by adversarial intermediate networks. Most defenses patch
        these problems from outside the network, sacrificing performance or burdening end users.
        My approach pushes security <em>into the network itself</em>.
      </p>
    </div>
    <div class="research-pillars">
      <div class="research-pillar">
        <div class="research-pillar-title">In-Network Enforcement</div>
        <div class="research-pillar-body">Shift security from endhost software to high-speed network hardware, operating at line rate before attacks saturate servers.</div>
      </div>
      <div class="research-pillar">
        <div class="research-pillar-title">Hardware–Software Co-Design</div>
        <div class="research-pillar-body">Pair P4 programmable ASICs with lightweight software proxies — neither alone achieves the necessary scale or accuracy.</div>
      </div>
      <div class="research-pillar">
        <div class="research-pillar-title">Incentive-Aligned Cooperation</div>
        <div class="research-pillar-body">Design protocols that let networks cooperate using existing Internet mechanisms — no global redesign, no centralized trust required.</div>
      </div>
    </div>
  </section>

  <!-- ===== Theme 1: Network Edge ===== -->
  <section class="section">
    <div class="rtheme-header rtheme-edge">
      <div class="rtheme-eyebrow">Challenge 1 &middot; Network Edge</div>
      <h2 class="rtheme-title">Securing Against Volumetric Attacks</h2>
      <p class="rtheme-sub">
        Adversaries exploit the Internet's open sender model to flood victims with traffic —
        over 8 million DDoS attacks disrupted critical services in the first half of 2025 alone.
        I build in-network defenses that intercept and filter attacks at hardware line rate,
        before they can saturate servers or upstream links, and identify new attack surfaces
        in emerging mobile infrastructure.
      </p>
    </div>

    <div class="rproject-grid">

      <div class="rproject-card" id="r-smartcookie">
        <div class="rproject-name">SmartCookie</div>
        <div class="rproject-chips">
          <span class="venue-chip">USENIX Security 2024</span>
          <span class="venue-chip-green">NSF GRFP</span>
          <span class="venue-chip-purple">Patent pending</span>
        </div>
        <p class="rproject-desc">
          The first hardware–software split-proxy defense against SYN flood attacks on a P4
          programmable switch. SmartCookie offloads high-speed cryptographic verification to
          switch hardware and exact stateful tracking to a lightweight eBPF server proxy —
          achieving 100% defense accuracy while scaling attack handling by up to 100×
          beyond any server-side defense, without degrading user performance.
        </p>
        <div class="rproject-links">
          <a href="/documents/SmartCookie_Paper_USENIXSec24.pdf" class="pub-link" target="_blank" rel="noopener">Paper</a>
          <a href="/documents/SmartCookie_Artifact_USENIXSec24.pdf" class="pub-link" target="_blank" rel="noopener">Artifact</a>
          <a href="/documents/SmartCookie_Slides_USENIXSec24.pdf" class="pub-link" target="_blank" rel="noopener">Slides</a>
          <a href="https://www.youtube.com/embed/oNi_4wCo9Gg?si=2YLaf0dpxxprv_WW" class="pub-link" target="_blank" rel="noopener">Demo Video</a>
          <a href="https://github.com/Princeton-Cabernet/p4-projects/tree/master/SmartCookie" class="pub-link" target="_blank" rel="noopener">Code</a>
        </div>
      </div>

      <div class="rproject-card" id="r-sieve">
        <div class="rproject-name">Sieve</div>
        <div class="rproject-chips">
          <span class="venue-chip">ONF P4 Workshop 2023</span>
        </div>
        <p class="rproject-desc">
          A principled framework for layering in-network defenses against large-scale attacks.
          A P4 switch provides coarse-grained hardware filtering at 100 Gbps; a software proxy
          applies fine-grained stateful inspection to the residual traffic. Sieve generalizes
          SmartCookie's split-proxy design into a template applicable to a broader class of
          volumetric attacks.
        </p>
        <div class="rproject-links">
          <a href="/documents/Sieve_Paper_P4Workshop23.pdf" class="pub-link" target="_blank" rel="noopener">Paper</a>
          <a href="/documents/Sieve_Slides_P4Workshop23.pptx" class="pub-link" target="_blank" rel="noopener">Slides</a>
        </div>
      </div>

      <div class="rproject-card" id="r-siphash">
        <div class="rproject-name">Secure Keyed Hashing on Programmable Switches</div>
        <div class="rproject-chips">
          <span class="venue-chip">ACM SIGCOMM SPIN 2021</span>
        </div>
        <p class="rproject-desc">
          Network hardware lacks native cryptographic support — a fundamental barrier to secure
          in-network processing. This work implements and open-sources a lightweight keyed hash
          function (SipHash) directly on P4 programmable switches, creating an essential building
          block for SmartCookie and future in-network security systems.
        </p>
        <div class="rproject-links">
          <a href="/documents/SipID_Paper_SPIN21.pdf" class="pub-link" target="_blank" rel="noopener">Paper</a>
          <a href="/documents/SipID_Slides_SPIN21.pptx" class="pub-link" target="_blank" rel="noopener">Slides</a>
          <a href="https://github.com/Princeton-Cabernet/p4-projects/tree/master/SipHash-tofino" class="pub-link" target="_blank" rel="noopener">Code</a>
        </div>
      </div>

      <div class="rproject-card" id="r-frontstorm">
        <div class="rproject-name">5G Fronthaul Security</div>
        <div class="rproject-chips">
          <span class="venue-chip">USENIX Security 2024</span>
          <span class="venue-chip-purple">Patent pending</span>
        </div>
        <p class="rproject-desc">
          The first systematic study of integrity vulnerabilities in 5G fronthaul — the
          high-speed link between a base station's radio head and its baseband processor.
          In collaboration with Microsoft Research, we demonstrate practical packet-based
          attack scenarios that enable large-scale disruption, and advocate for mandatory
          end-to-end integrity protections in 5G standards.
        </p>
        <div class="rproject-links">
          <a href="/documents/FronthaulSecurity_Paper_USENIXSec24.pdf" class="pub-link" target="_blank" rel="noopener">Paper</a>
        </div>
      </div>

    </div>
  </section>

  <!-- ===== Theme 2: Network Core ===== -->
  <section class="section">
    <div class="rtheme-header rtheme-core">
      <div class="rtheme-eyebrow">Challenge 2 &middot; Network Core</div>
      <h2 class="rtheme-title">Securing the Routing Infrastructure</h2>
      <p class="rtheme-sub">
        Traffic traverses a sequence of independently operated Autonomous Systems (ASes) following
        paths determined by BGP — built around economic agreements rather than security or privacy
        needs. Edge networks cannot view, evaluate, or select alternate routes to avoid adversarial
        or unreliable intermediate networks. I design cooperation frameworks that expose and leverage
        path diversity using Internet-native mechanisms, without requiring changes to core routers
        or global coordination.
      </p>
    </div>

    <div class="rproject-grid">

      <div class="rproject-card" id="r-tango">
        <div class="rproject-name">TANGO</div>
        <div class="rproject-chips">
          <span class="venue-chip">NSDI 2024</span>
          <span class="venue-chip-gold">IETF/IRTF Applied Networking Research Prize</span>
        </div>
        <p class="rproject-desc">
          The first framework enabling cooperating edge networks to jointly discover, measure,
          and select real Internet paths. TANGO exploits BGP community attributes to uncover
          hidden AS-level paths, and integrates active in-network measurements on programmable
          hardware to dynamically select among BGP-compliant alternatives in real time.
          Deployed and validated on a global testbed spanning 25 cities.
        </p>
        <div class="rproject-links">
          <a href="/documents/Tango_Paper_NSDI24.pdf" class="pub-link" target="_blank" rel="noopener">Paper</a>
          <a href="/documents/Tango_Slides_NSDI24.pdf" class="pub-link" target="_blank" rel="noopener">Slides</a>
        </div>
      </div>

      <div class="rproject-card" id="r-praxiguard">
        <div class="rproject-name">PraxiGuard</div>
        <div class="rproject-chips">
          <span class="venue-chip-gold">Wallace Memorial Fellowship</span>
        </div>
        <p class="rproject-desc">
          Website fingerprinting (WFP) lets adversaries infer users' browsing activity from
          encrypted traffic patterns alone. PraxiGuard builds on TANGO's route-control framework
          to split traffic across multiple paths, obfuscating the revealing patterns WFP exploits.
          Its key innovation is a principled, network-aware model of privacy risk and performance
          cost, enabling edges to jointly optimize both without sacrificing either.
        </p>
      </div>

    </div>
  </section>

  <!-- ===== At Amherst ===== -->
  <section class="section">
    <h2 class="section-label">At Amherst</h2>
    <div class="prose" style="margin-bottom: 18px;">
      <p>
        I am building a research group at Amherst centered on three directions designed for
        meaningful undergraduate participation:
      </p>
    </div>
    <div class="rproject-grid" style="grid-template-columns: repeat(3, 1fr);">
      <div class="rproject-card">
        <div class="rproject-name" style="font-size: 0.95rem; margin-bottom: 8px;">Edge &amp; IoT Network Measurement</div>
        <p class="rproject-desc" style="margin-bottom: 0;">
          Treating campus, home, and community networks as living laboratories to identify
          real vulnerabilities in IoT sensors, drones, and connected devices — including
          game-based "build-it, break-it, fix-it" competitions.
        </p>
      </div>
      <div class="rproject-card">
        <div class="rproject-name" style="font-size: 0.95rem; margin-bottom: 8px;">Unified Split-Functionality Defenses</div>
        <p class="rproject-desc" style="margin-bottom: 0;">
          Generalizing SmartCookie and Sieve into a principled framework for hardware–software
          co-designed defenses, using eBPF and SmartNICs as accessible platforms for
          student researchers.
        </p>
      </div>
      <div class="rproject-card">
        <div class="rproject-name" style="font-size: 0.95rem; margin-bottom: 8px;">Security of AI Network Workloads</div>
        <p class="rproject-desc" style="margin-bottom: 0;">
          LLM inference creates novel network-layer traffic patterns and attack surfaces.
          Students explore both performance optimizations and new security vulnerabilities
          in next-generation AI-driven networking.
        </p>
      </div>
    </div>
    <p class="prose" style="margin-top: 18px;">
      <a href="mailto:syoo@amherst.edu">Reach out</a> if you are interested in
      collaborating or joining my research group.
    </p>
  </section>

</main>
