---
layout: page
title: Research
icon: fas fa-chart-line
order: 1
---


<!-- I am a **network security researcher** who designs and builds **practical systems that deliver security and privacy on today’s networks without sacrificing performance**.  -->
My research develops *practical systems* that bring **security and privacy to real-world networks—without compromising performance**. Most existing solutions treat the Internet as a black box, adding protections on top that slow applications or demand tech-savvy users. In contrast, my work pushes security functions *into the network itself* and uses **hardware–software co-design** to make defenses scalable, performant, and deployable today. My research philosophy is guided by three principles:  

(i) security and privacy functions should run *in-network* or be natively **network-aware**,  
(ii) **hardware–software co-design** is essential for scalable defenses, and  
(iii) **cooperation among incentive-aligned actors** enables deployable, collective mechanisms to protect users.

I have applied this philosophy across both the **network edge and core**. At the edge, my system **SmartCookie** (USENIX Security 2024, patent-pending) introduced a layered hardware–software defense that blocks large-scale SYN-flood attacks without degrading user performance. My work on **5G fronthaul security** uncovered new integrity vulnerabilities in emerging cellular protocols, prompting calls for stronger protections. I also introduced **Sieve**, which generalizes SmartCookie’s layered approach to other volumetric attacks. In the network core, my system **Tango** (NSDI 2024, IETF/IRTF Applied Networking Research Prize) showed how cooperating edge networks can jointly discover and select safer Internet paths using only existing BGP mechanisms. Building on this, my ongoing work **PraxiGuard** develops a principled, network-aware model for splitting traffic across multiple paths to jointly optimize privacy and performance, mitigating website-fingerprinting attacks.

Across all efforts, I emphasize **building prototypes, open-source artifacts, and deployable systems** to ensure real-world impact. Taken together, my work lays the foundation for **ubiquitous, deployable network security and privacy**—protecting users at Internet scale.


<!-- Looking ahead, I am excited to extend this agenda in three directions that naturally invite hands-on undergraduate and graduate participation:  
1. conducting **measurement studies closer to the user** by turning campus and home networks into living laboratories for identifying vulnerabilities in emerging devices such as IoT sensors and drones;  
2. designing a **unifying framework for split-functionality defenses**, combining centralized reasoning with distributed enforcement using accessible platforms like eBPF; and  
3. investigating the **security and performance challenges of AI and large-language-model workloads**, which stress networks in new ways and open novel attack surfaces.   -->

