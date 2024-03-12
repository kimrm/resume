import ReactPDF from "@react-pdf/renderer";
import Resume from "./Resume.jsx";
import "./index.css";

ReactPDF.renderToStream(<Resume />);
