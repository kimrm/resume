import { useRef } from "react";
import ReactToPrint from "react-to-print";
import Resume from "./Resume.jsx";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function App() {
  const ref = useRef();

  const handleDownloadPdf = async () => {
    const element = ref.current;
    const canvas = await html2canvas(element, {
      scale: 1, // You can adjust this scale if needed
      useCORS: true,
    });

    // A4 dimensions in mm
    const pdfWidth = 210;
    const pdfHeight = 297;
    const marginBottom = 10; // Bottom margin in mm

    const imgData = canvas.toDataURL("image/png");

    // Create a PDF in A4 size
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [pdfWidth, pdfHeight],
    });

    // Calculate the aspect ratio of the canvas and the A4 page
    const canvasRatio = canvas.height / canvas.width;
    const a4Ratio = (pdfHeight - marginBottom) / pdfWidth;

    let imgWidth = pdfWidth;
    let imgHeight = imgWidth * canvasRatio;

    // Adjust width or height to fit the content within A4 dimensions, considering the margin
    if (canvasRatio > a4Ratio) {
      imgHeight = pdfHeight - marginBottom;
      imgWidth = imgHeight / canvasRatio;
    }

    // Center the image horizontally and position it at the top vertically
    const x = (pdfWidth - imgWidth) / 2;
    const y = 0; // Start at the top of the page

    pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
    pdf.save("cv-kim-rune-møller.pdf");
  };

  return (
    <>
      <div className="container mx-auto flex gap-4 mt-3 justify-end p-2">
        <ReactToPrint
          bodyClass="print-agreement"
          content={() => ref.current}
          trigger={() => (
            <button className="rounded border border-orange-950 hover:bg-orange-100 text-organge-950 px-2 py-1">
              Skriv ut
            </button>
          )}
        />
        <button
          onClick={handleDownloadPdf}
          className="rounded border border-orange-950 hover:bg-orange-100 text-organge-950 px-2 py-1"
        >
          PDF
        </button>
      </div>
      <Resume ref={ref} />
    </>
  );
}

export default App;
