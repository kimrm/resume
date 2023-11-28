import { useRef } from "react";
import ReactToPrint from "react-to-print";
import Resume from "./Resume.jsx";

function App() {
  const ref = useRef();
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
        <button className="rounded border border-orange-950 hover:bg-orange-100 text-organge-950 px-2 py-1">
          PDF
        </button>
      </div>
      <Resume ref={ref} />
    </>
  );
}

export default App;
