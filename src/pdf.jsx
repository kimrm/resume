import React from "react";
import ReactPDF from "@react-pdf/renderer";
import Resume from "./Resume";
import "./index.css";

ReactPDF.renderToStream(<Resume />);
