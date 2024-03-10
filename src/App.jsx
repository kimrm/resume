import { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import Resume from "./Resume.jsx";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { LanguageContext } from "./contexts/LanguageContext.js";
import Button from "./Button.jsx";

function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const term = queryParams.get("lang");
  const initialLanguage = term === "en" ? "en" : "no";
  const ref = useRef();
  const [language, setLanguage] = useState(initialLanguage);

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

  function handleLanguageButtonClick() {
    setLanguage((prevLanguage) => (prevLanguage === "no" ? "en" : "no"));
  }

  function hangleEnglishChecked() {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "no" : "en"));
  }
  return (
    <>
      <div className="absolute md:relative top-2 right-2 container mx-auto flex gap-4 mt-3 justify-end p-2">
        <ReactToPrint
          bodyClass="print-agreement"
          content={() => ref.current}
          trigger={() => (
            <button
              title="Skriv ut denne siden"
              className="inline-flex uppercase text-sm tracking-wide items-center p-2 border border-orange-200 bg-orange-100 hover:scale-105 hover:bg-orange-200 rounded hover:shadow transition ease-in duration-200"
            >
              skriv ut
            </button>
          )}
        />
        <button
          onClick={handleDownloadPdf}
          className="rounded border border-orange-950 hover:bg-orange-100 text-orange-950 px-2 py-1 hidden"
        >
          PDF
        </button>
        {/* <button
          className="flex gap-2 items-center h-10 px-2 border border-orange-200 rounded-md hover:bg-orange-100 text-orange-950 transition ease-in duration-200 hover:shadow-md"
          onClick={handleLanguageButtonClick}
        >
          <img
            src={language === "no" ? "./assets/en.png" : "./assets/no.png"}
            alt={
              language === "no"
                ? "Change to English language"
                : "Endre til Norsk språk"
            }
            className="h-6"
          />
          {language === "no" ? "English" : "Norsk"}
        </button> */}
        <label className="flex items-center border rounded-md p-2 border-orange-200 justify-center cursor-pointer">
          <input
            type="checkbox"
            value="en"
            className="sr-only peer"
            onChange={hangleEnglishChecked}
            checked={language === "en"}
          />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-400 dark:text-gray-500">
            <img
              src="./assets/en.png"
              alt="Change to English language"
              className={language === "en" ? "opacity-100" : "opacity-50"}
            />
          </span>
        </label>
      </div>
      <LanguageContext.Provider value={language}>
        <Resume ref={ref} />
      </LanguageContext.Provider>
    </>
  );
}

export default App;
