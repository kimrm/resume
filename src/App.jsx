import { useRef, useState, useContext } from "react";
import { useQueryParam } from "./hooks/useQueryParam.js";
import ReactToPrint from "react-to-print";
import Resume from "./Resume.jsx";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { LanguageContext } from "./contexts/LanguageContext.js";
import { ThemeContext } from "./contexts/ThemeContext.js";
import { useSystemColorScheme } from "./hooks/useSystemColorScheme.js";

const svg = {
  light: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 inline-block"
    >
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
    </svg>
  ),
  dark: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 inline-block"
    >
      <path
        fillRule="evenodd"
        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const term = queryParams.get("lang");
  const initialLanguage = term === "en" ? "en" : "no";
  const ref = useRef();
  const [language, setLanguage] = useState(initialLanguage);
  useQueryParam({ language });
  const { systemColorScheme, toggleColorScheme } = useSystemColorScheme();

  const handleDownloadPdf = async () => {
    const element = ref.current;
    const canvas = await html2canvas(element, {
      scale: 1,
      useCORS: true,
    });

    const pdfWidth = 210;
    const pdfHeight = 297;
    const marginBottom = 10;

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [pdfWidth, pdfHeight],
    });

    const canvasRatio = canvas.height / canvas.width;
    const a4Ratio = (pdfHeight - marginBottom) / pdfWidth;

    let imgWidth = pdfWidth;
    let imgHeight = imgWidth * canvasRatio;

    if (canvasRatio > a4Ratio) {
      imgHeight = pdfHeight - marginBottom;
      imgWidth = imgHeight / canvasRatio;
    }

    const x = (pdfWidth - imgWidth) / 2;
    const y = 0;

    pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
    pdf.save("cv-kim-rune-møller.pdf");
  };

  function handleEnglishChecked() {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "no" : "en"));
  }

  return (
    <>
      <div className="container mx-auto flex gap-4 mt-3 justify-center sm:justify-end items-end p-2">
        <ReactToPrint
          bodyClass="print-agreement"
          content={() => ref.current}
          trigger={() => (
            <button
              title={
                language === "en" ? "Print this page" : "Skriv ut denne siden"
              }
              className="inline-flex uppercase text-sm dark:text-orange-950 dark:bg-orange-100 opacity-75  tracking-wide items-center p-2 border border-orange-200 bg-orange-100 hover:scale-105 hover:bg-orange-200 rounded hover:shadow transition ease-in duration-200"
            >
              {language === "no" ? "skriv ut" : "print"}
            </button>
          )}
        />
        <button
          onClick={handleDownloadPdf}
          className="rounded border border-orange-950 hover:bg-orange-100 text-orange-950 px-2 py-1 hidden"
        >
          PDF
        </button>

        <label className="flex items-center rounded-md p-2 border-orange-200 justify-center cursor-pointer">
          <input
            type="checkbox"
            value="en"
            className="sr-only peer"
            onChange={handleEnglishChecked}
            checked={language === "en"}
          />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span
            className={
              language === "en"
                ? "ms-3 text-sm font-medium text-orange-900"
                : "ms-3 text-sm font-medium text-gray-500"
            }
          >
            {language === "no" ? "English" : "Engelsk"}
          </span>
        </label>
        <button
          className="flex h-10 items-center justify-center"
          onClick={toggleColorScheme}
        >
          {svg[systemColorScheme]}
        </button>
      </div>
      <LanguageContext.Provider value={language}>
        <Resume ref={ref} />
      </LanguageContext.Provider>
    </>
  );
}

export default App;
