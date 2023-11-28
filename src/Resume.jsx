import React from "react";
import profile from "./profile.png";
import ResumeItem from "./ResumeItem";
import Work from "./Work";
import Education from "./Education";

const Resume = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <section className="container mx-auto my-5 p-2 md:p-0">
        <div className="md:flex items-center gap-5">
          <div>
            <img src={profile} width={100} alt="Kim Rune Møller" />
          </div>
          <div>
            <h1 className="text-3xl md:text-6xl font-black uppercase tracking-widest my-3">
              KIM RUNE MØLLER
            </h1>
            <h2 className="text-lg md:text-2xl font-black uppercase tracking-widest my-3">
              Web Developer
            </h2>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-y-3 bg-white rounded p-4 my-5 text-xs md:text-base">
            <div className="bg-gray-50 rounded p-1 text-gray-500">Adresse</div>
            <div className="bg-gray-50 col-span-3 rounded p-1 text-gray-950">
              Vågahaugen 55, 9303 Silsand
            </div>
            <div className="bg-gray-50 rounded p-1 text-gray-500">Telefon</div>
            <div className="bg-gray-50 col-span-3 rounded p-1 text-gray-950">
              +47 411 29 887
            </div>
            <div className="bg-gray-50 rounded p-1 text-gray-500">E-post</div>
            <div className="bg-gray-50 col-span-3 rounded p-1 text-gray-950">
              kimrune@hotmail.no
            </div>
            <div className="bg-gray-50 rounded p-1 text-gray-500">
              Sosiale medier
            </div>
            <div className="bg-gray-50 col-span-3 rounded p-1 flex flex-col gap-4 text-gray-950">
              <a
                href="https://www.linkedin.com/in/kim-rune-moller"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn [linkedin.com/in/kim-rune-moller]
              </a>
              <a
                href="https://github.com/kimrm"
                target="_blank"
                rel="noreferrer"
              >
                GitHub [github.com/kimrm]
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto my-10 p-2 md:p-0">
        <h2 className="text-2xl font-black uppercase tracking-widest my-3">
          Sammendrag
        </h2>
        <p className="rounded text-orange-950">
          Allsidig programmerer med omfattende erfaring i .NET, VB.NET,
          WinForms, C#, Java (JSP), PHP og Javascript. Har en solid bakgrunn i
          webutvikling og applikasjonsutvikling for Windows. Søker nye
          utfordringer i front-end eller full-stack stillinger.
        </p>
      </section>
      <section className="container mx-auto my-10 p-2 md:p-0">
        <h2 className="text-2xl font-black uppercase tracking-widest my-3">
          Arbeidserfaring
        </h2>
        <div className="mb-10">
          {Work.map((work) => (
            <ResumeItem
              key={work.title}
              title={work.title}
              description={work.description}
              period={work.period}
              bulletpoints={work.bulletpoints}
            />
          ))}
        </div>
      </section>
      <section className="container mx-auto my-10 p-2 md:p-0">
        <h2 className="text-2xl font-black uppercase tracking-widest my-3">
          Utdannelse
        </h2>
        <div className="mb-10">
          {Education.map((education) => (
            <ResumeItem
              key={education.title}
              title={education.title}
              period={education.period}
              description={education.description}
              bulletpoints={education.bulletpoints}
            />
          ))}
        </div>
      </section>
      <section className="container mx-auto my-10 p-2 md:p-0">
        <h2 className="text-2xl font-black uppercase tracking-widest my-3">
          Ferdigheter
        </h2>
        <ul>
          <li className="list-disc">
            Programmering: VB.Net, C#, PHP, JavaScript, SQL
          </li>
          <li className="list-disc">
            Webutvikling: HTML, CSS, ASP, Laravel, Vue, WordPress
          </li>
          <li className="list-disc">Database: MySQL, SQL Server</li>
          <li className="list-disc">
            Verktøy: Visual Studio, VSCode, Git, Git CLI
          </li>
          <li className="list-disc">
            Systemintegrasjoner: REST API, SOAP, FTP
          </li>
          <li className="list-disc">Språk: Norsk, Engelsk</li>
        </ul>
      </section>
    </div>
  );
});

Resume.displayName = "Resume";

export default Resume;
