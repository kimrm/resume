import { useRef } from "react";
import ReactToPrint from "react-to-print";
import Resume from "./Resume";

function App() {
  const ref = useRef();
  return (
    <>
      <div className="container mx-auto flex gap-4 top-0 right-0 mt-3 justify-end">
        <ReactToPrint
          bodyClass="print-agreement"
          content={() => ref.current}
          trigger={() => (
            <button className="bg-orange-950 text-white px-3 py-2 rounded">
              Print
            </button>
          )}
        />
        <button className="bg-orange-950 text-white px-3 py-2 rounded">
          PDF
        </button>
      </div>
      <Resume ref={ref} />
    </>
  );
}

export default App;
