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
        My research builds <em>practical systems</em> that bring
        <strong>security and privacy to real-world networks — without sacrificing performance</strong>.
        Most existing solutions treat the Internet as a black box and add protections on top
        that are either too slow for high-speed traffic or too fragile against determined adversaries.
        My approach is different: push security functions <em>into the network itself</em> using
        <strong>hardware–software co-design</strong>, and design protocols that let
        <strong>mutually-interested actors cooperate</strong> to achieve collective defenses
        no single operator could mount alone.
      </p>
    </div>

    <ul class="principles">
      <li class="principle">
        <strong>In-network enforcement</strong> — Security functions belong at the data plane,
        where they can operate at line rate before attacks saturate servers or upstream links.
      </li>
      <li class="principle">
        <strong>Hardware–software co-design</strong> — Pairing P4 programmable ASICs with
        commodity software proxies unlocks performance that neither can achieve alone.
      </li>
      <li class="principle">
        <strong>Deployable cooperation</strong> — Lasting Internet-scale protections require
        incentive-aligned designs that work within today's routing and policy constraints.
      </li>
    </ul>

    <div class="prose">
      <p>
        All projects produce <strong>open-source prototypes and artifacts</strong> so results
        can be reproduced, extended, and deployed. Below I organize my work into three themes;
        for a complete list of venues, see the <a href="/publications/">Publications</a> page.
      </p>
    </div>
  </section>

  <!-- Theme cards -->
  <section class="section">
    <h2 class="section-label">Research Themes</h2>

    <div class="research-themes">

      <!-- Theme 1 -->
      <div class="research-theme">
        <div class="research-theme-header">
          <div class="research-theme-num">01</div>
          <div>
            <h3 class="research-theme-title">Programmable In-Network Defenses</h3>
            <p class="research-theme-q">Can we stop large-scale network attacks entirely within the data plane?</p>
          </div>
        </div>
        <div class="research-theme-body">
          <p class="research-theme-desc">
            Volumetric DDoS attacks and SYN floods overwhelm servers before any software-only
            defense can react. By splitting the defense between a P4 programmable switch
            (which handles traffic at hardware line rate) and a lightweight software proxy
            (which performs stateful verification), we can absorb multi-gigabit floods while
            maintaining correct TCP semantics for legitimate users — all without touching core
            router infrastructure.
          </p>
          <div class="research-projects">

            <div class="research-project">
              <div class="research-project-top">
                <span class="research-project-name">SmartCookie</span>
                <span class="venue-chip">USENIX Security 2024</span>
                <span class="venue-chip-green">Patent pending</span>
                <span class="venue-chip">NSF GRFP</span>
              </div>
              <p class="research-project-desc">
                The first hardware–software split-proxy implementation of SYN-cookie defenses on
                a P4 programmable switch. SmartCookie intercepts and validates SYN/ACK handshakes at
                switch line rate, forwarding only verified connections to the protected server —
                achieving throughput several orders of magnitude beyond what any server-side defense
                can sustain.
              </p>
              <div class="research-project-links">
                <a href="/documents/SmartCookie_Paper_USENIXSec24.pdf" class="pub-link" target="_blank" rel="noopener">Paper</a>
                <a href="/documents/SmartCookie_Artifact_USENIXSec24.pdf" class="pub-link" target="_blank" rel="noopener">Artifact</a>
                <a href="/documents/SmartCookie_Slides_USENIXSec24.pdf" class="pub-link" target="_blank" rel="noopener">Slides</a>
                <a href="https://www.youtube.com/embed/oNi_4wCo9Gg?si=2YLaf0dpxxprv_WW" class="pub-link" target="_blank" rel="noopener">Demo Video</a>
                <a href="https://github.com/Princeton-Cabernet/p4-projects/tree/master/SmartCookie" class="pub-link" target="_blank" rel="noopener">Code (GitHub)</a>
              </div>
            </div>

            <div class="research-project">
              <div class="research-project-top">
                <span class="research-project-name">Sieve</span>
                <span class="venue-chip">ONF P4 Workshop 2023</span>
              </div>
              <p class="research-project-desc">
                A principled <em>framework</em> for layering in-network defenses: a P4 switch
                acts as a coarse-grained hardware filter at 100 Gbps; a software proxy then
                applies fine-grained stateful inspection to the residual traffic. Sieve
                generalizes SmartCookie's split-proxy design to a broader class of volumetric
                attacks and provides a design template for future in-network defenses.
              </p>
              <div class="research-project-links">
                <a href="/documents/Sieve_Paper_P4Workshop23.pdf" class="pub-link" target="_blank" rel="noopener">Paper</a>
                <a href="/documents/Sieve_Slides_P4Workshop23.pptx" class="pub-link" target="_blank" rel="noopener">Slides</a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Theme 2 -->
      <div class="research-theme">
        <div class="research-theme-header">
          <div class="research-theme-num">02</div>
          <div>
            <h3 class="research-theme-title">Collaborative Internet-Scale Security</h3>
            <p class="research-theme-q">How can mutually-interested networks cooperate to defend paths they cannot control alone?</p>
          </div>
        </div>
        <div class="research-theme-body">
          <p class="research-theme-desc">
            Many of the most damaging Internet attacks — BGP hijacking, traffic interception,
            path manipulation — are fundamentally multi-AS problems. No single operator controls
            the full path. My work designs protocols where edge networks share minimal information
            to jointly discover safer routes and collaboratively enforce them, using
            <em>only mechanisms already deployed in the global routing infrastructure</em>.
          </p>
          <div class="research-projects">

            <div class="research-project">
              <div class="research-project-top">
                <span class="research-project-name">TANGO</span>
                <span class="venue-chip">NSDI 2024</span>
                <span class="venue-chip-gold">IETF/IRTF Applied Networking Research Prize</span>
              </div>
              <p class="research-project-desc">
                Secure collaborative route control across the public Internet. Groups of
                cooperating edge networks use existing BGP mechanisms to probe alternative
                paths, share reachability observations, and collectively select routes that
                avoid known attack infrastructure — without requiring changes to core routers
                or centralized coordination. Recognized by the IETF/IRTF community as
                outstanding applied networking research.
              </p>
              <div class="research-project-links">
                <a href="/documents/Tango_Paper_NSDI24.pdf" class="pub-link" target="_blank" rel="noopener">Paper</a>
                <a href="/documents/Tango_Slides_NSDI24.pdf" class="pub-link" target="_blank" rel="noopener">Slides</a>
              </div>
            </div>

            <div class="research-project">
              <div class="research-project-top">
                <span class="research-project-name">PraxiGuard</span>
                <span class="venue-chip-gold">Wallace Memorial Fellowship</span>
              </div>
              <p class="research-project-desc">
                A network-aware traffic-splitting framework for mitigating website-fingerprinting
                attacks. PraxiGuard distributes traffic across multiple network paths to jointly
                optimize user privacy and performance, blinding an adversary's ability to infer
                visited sites from encrypted traffic patterns. Supported by Princeton's Wallace
                Memorial Fellowship — the university's highest honor for graduate engineering research.
              </p>
            </div>

          </div>
        </div>
      </div>

      <!-- Theme 3 -->
      <div class="research-theme">
        <div class="research-theme-header">
          <div class="research-theme-num">03</div>
          <div>
            <h3 class="research-theme-title">Emerging Network Threat Surfaces</h3>
            <p class="research-theme-q">What new attack surfaces open as networks evolve toward 5G and programmable infrastructure?</p>
          </div>
        </div>
        <div class="research-theme-body">
          <p class="research-theme-desc">
            As networks grow more heterogeneous — incorporating 5G RAN, edge compute, and
            programmable ASICs — new threat surfaces emerge that existing security models
            do not address. My work in this area characterizes those threats concretely
            and proposes defenses calibrated to the specific constraints of modern network hardware.
          </p>
          <div class="research-projects">

            <div class="research-project">
              <div class="research-project-top">
                <span class="research-project-name">5G Fronthaul Security</span>
                <span class="venue-chip">USENIX Security 2024</span>
                <span class="venue-chip-green">Patent pending</span>
              </div>
              <p class="research-project-desc">
                The first systematic study of integrity vulnerabilities in 5G fronthaul —
                the high-speed, time-sensitive link between a base station's remote radio head
                and baseband processing unit. In collaboration with Microsoft Research, we
                demonstrate practical attack scenarios that compromise signal integrity, and
                present the case for stronger mandatory integrity protections in upcoming
                cellular standards. A patent application is pending.
              </p>
              <div class="research-project-links">
                <a href="/documents/FronthaulSecurity_Paper_USENIXSec24.pdf" class="pub-link" target="_blank" rel="noopener">Paper</a>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- At Amherst -->
  <section class="section">
    <h2 class="section-label">At Amherst</h2>
    <div class="prose">
      <p>
        I am building a research group at Amherst centered on the following directions,
        designed to engage undergraduate researchers meaningfully:
      </p>
      <ul>
        <li>
          <strong>Measurement and security of edge and IoT networks</strong> — using campus,
          home, and community networks as living laboratories to identify real vulnerabilities
          in sensors, drones, and connected devices.
        </li>
        <li>
          <strong>A unifying theory for split-functionality defenses</strong> — generalizing
          SmartCookie and Sieve into a principled framework applicable to eBPF, SmartNICs,
          and other accessible programmable substrates.
        </li>
        <li>
          <strong>Security of AI-driven network workloads</strong> — LLM inference creates
          novel network-layer traffic patterns and attack surfaces not yet well understood.
        </li>
      </ul>
      <p>
        Please <a href="mailto:syoo@amherst.edu">reach out</a> if you are interested in
        collaborating or joining my research group.
      </p>
    </div>
  </section>

</main>
