<p style="text-align:center;">
  <a href="{{ '/documents/Sophia_Yoo_CV.pdf' | relative_url }}" target="_blank" rel="noopener">
    <i class="fa-solid fa-file-pdf" style="color:#d9534f;"></i>
    <strong>View/download my CV (PDF)</strong>
    <!-- <strong>View my CV (PDF) in a new window</strong> -->
  </a>
</p>

<p style="text-align:center; font-size:0.9rem; margin-top:1rem;">
  <em>Last updated: {{ site.time | date: "%B %d, %Y" }}</em>
</p>


<!-- <iframe src="{{ '/documents/Sophia_Yoo_CV.pdf' | relative_url }}"
        width="100%"
        height="900px"
        style="border:none;"></iframe> -->

<!-- <iframe 
  src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://sophiayoo1.github.io/documents/Sophia_Yoo_CV.pdf"
  width="100%"
  height="900px"
  style="border:none;">
</iframe> -->

<div id="pdf-viewer" style="width:100%; min-height: 90vh; margin-bottom: 2rem;"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script>
  const url = "{{ '/documents/Sophia_Yoo_CV.pdf' | relative_url }}";
  const container = document.getElementById('pdf-viewer');

  pdfjsLib.getDocument(url).promise.then(pdf => {
    for (let i = 1; i <= pdf.numPages; i++) {
      pdf.getPage(i).then(page => {
        const scale = 1.4;
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        container.appendChild(canvas);
        page.render({ canvasContext: context, viewport });
      });
    }
  });
</script>



