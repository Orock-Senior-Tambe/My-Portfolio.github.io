const readButton = document.getElementById('read-pdf-button');

readButton.addEventListener('click', () => {
  // Replace with your PDF filename
  const pdfFile = "OROCK-CV.pdf";

  // Get the absolute path to the PDF
  const pdfUrl = new URL(pdfFile, window.location.href);

  // Open the PDF in a new window
  window.open(pdfUrl.href, '_blank');
});
