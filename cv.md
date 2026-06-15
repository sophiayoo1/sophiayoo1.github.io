---
layout: default
title: CV
permalink: /cv/
---

<main class="site-main">
  <div class="page-header">
    <h1 class="page-title">Curriculum Vitae</h1>
  </div>

  <div class="cv-actions">
    <a href="/documents/Sophia_Yoo_CV.pdf"
       class="cv-btn cv-btn-primary"
       target="_blank" rel="noopener">
      ↓&nbsp; Download CV (PDF)
    </a>
    <span class="cv-updated">
      Last updated: {{ site.time | date: "%B %Y" }}
    </span>
  </div>

  <div id="pdf-viewer"></div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
  <script>
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

    const url       = '/documents/Sophia_Yoo_CV.pdf';
    const container = document.getElementById('pdf-viewer');

    pdfjsLib.getDocument(url).promise.then(function(pdf) {
      for (var i = 1; i <= pdf.numPages; i++) {
        (function(pageNum) {
          pdf.getPage(pageNum).then(function(page) {
            var scale    = Math.min(1.5, (container.clientWidth || 900) / page.getViewport({scale:1}).width);
            var viewport = page.getViewport({ scale: scale });
            var canvas   = document.createElement('canvas');
            canvas.height = viewport.height;
            canvas.width  = viewport.width;
            container.appendChild(canvas);
            page.render({ canvasContext: canvas.getContext('2d'), viewport: viewport });
          });
        })(i);
      }
    }).catch(function(err) {
      container.innerHTML =
        '<p style="color:var(--text-muted);font-size:0.9rem;">Unable to display PDF inline. ' +
        '<a href="/documents/Sophia_Yoo_CV.pdf" target="_blank">Open PDF directly ↗</a></p>';
    });
  </script>

</main>
