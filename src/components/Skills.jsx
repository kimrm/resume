import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

function Skills() {
  const language = useContext(LanguageContext);
  return (
    <>
      <ul>
        <li className="list-disc">
          <strong>{language === "no" ? "Programmering" : "Coding"}:</strong>{" "}
          JavaScript, TypeScript, PHP, VB.Net, C#, SQL
        </li>
        <li className="list-disc">
          <strong>
            {language === "no" ? "Rammeverk/bibliotek" : "Frameworks/libraries"}
            :
          </strong>
          React, Laravel, Wordpress
        </li>
        <li className="list-disc">
          <strong>
            {language === "no" ? "Webutvikling" : "Web Development"}:
          </strong>{" "}
          HTML, CSS, Tailwind CSS, SASS
        </li>
        <li className="list-disc">
          <strong>Database:</strong> MySQL, SQL Server
        </li>
        <li className="list-disc">
          <strong>{language === "no" ? "Verktøy" : "Tools"}:</strong> Visual
          Studio, VSCode, Git, Git CLI
        </li>
        <li className="list-disc">
          <strong>
            {language === "no" ? "Systemintegrasjoner" : "Integrations"}:
          </strong>{" "}
          REST API, SOAP, FTP
        </li>
        <li className="list-disc">
          <strong>{language === "no" ? "Språk: " : "Languages: "}</strong>
          {language === "no" ? "Norsk, Engelsk" : "Norwegian, English"}
        </li>
      </ul>
      {language === "no" ? (
        <p className="mt-2 max-w-prose">
          I tillegg til dette har jeg i min tid som utvikler vært innom C# .Net
          og Microsoft Presentation Foundation (WPF) og har brukt dette i mindre
          prosjekter. Jeg har også utviklet en app og et par spill til til
          Windows Phone den tiden disse var en ting. Her brukte jeg XAML og C#.
        </p>
      ) : (
        <p className="mt-2 max-w-prose">
          In addition to this, I have worked with C# .Net and Microsoft
          Presentation Foundation (WPF) and have used this in smaller projects.
          I have also developed an app and a few games for Windows Phone when
          these were a thing. Here I used XAML and C#.
        </p>
      )}
    </>
  );
}

export default Skills;
