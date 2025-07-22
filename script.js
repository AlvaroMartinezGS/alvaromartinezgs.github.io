
window.addEventListener('DOMContentLoaded', () => {
  const { jsPDF } = window.jspdf;
  document.getElementById('downloadPDF').addEventListener('click', async () => {
    const content = document.getElementById('content');
    const canvas = await html2canvas(content, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'pt', 'a4');
    const imgWidth = 595.28;
    const pageHeight = 841.89;
    const imgHeight = canvas.height * imgWidth / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('CV_Alvaro_Martinez.pdf');
  });
});
