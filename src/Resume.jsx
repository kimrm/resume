import React from "react";
import cloud101 from "./aws-educate-introduction-to-cloud-101.png";
import profile from "./profile.png";

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
        <div>
          <a
            className="inline-block"
            href="https://www.credly.com/badges/4b881ada-b52c-40d5-8ea3-5e22c27159fa/public_url"
            target="_blank"
            rel="noreferrer"
          >
            <img src={cloud101} width={100} alt="AWS Cloud 101" />
          </a>
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
        <div className="mt-3">
          <h3 className="my-3 text-lg font-bold text-orange-900">
            Freelance Utvikler + Student
          </h3>
          <h4 className="font-bold">2022 - Nåværende</h4>
          <ul className="list-inside md:list-outside">
            <li className="list-disc">
              Jobber med webløsninger, integrasjoner, og programvareutvikling
              for Windows.
            </li>
            <li className="list-disc">
              Teknologier: VSCode, Visual Studio, VB.Net, SQL, PHP, Laravel,
              Livewire, Tailwind, Bootstrap, Javascript, HTML, CSS, Vue,
              WordPress.
            </li>
          </ul>
        </div>

        <div className="block mt-8">
          <h3 className="my-3 text-lg font-bold text-orange-900">
            IT-medarbeider, Studiesenteret Midt-Troms
          </h3>
          <h4 className="font-bold">2020 - 2022</h4>
          <ul className="list-inside md:list-outside">
            <li className="list-disc">
              Jobbet med IT/nettverk og tekniske løsninger for studierom og
              konferanserom.
            </li>
            <li className="list-disc">
              Utviklet en infoskjerm-løsning for rombooking integrert med Google
              Calendar.
            </li>
          </ul>
        </div>

        <div className="my-8">
          <h3 className="my-3 text-lg font-bold text-orange-900">
            Utvikler, Dataprodukt AS
          </h3>
          <h4 className="font-bold">2006 - 2020</h4>
          <ul className="list-inside md:list-outside">
            <li className="list-disc">
              Spilte en nøkkelrolle i utviklingen av FleXi Bilsystem, et Dealer
              Management System brukt av Mazda og Hyundai forhandlere i Norge.
            </li>
            <li className="list-disc">
              Ansvarlig for utvikling av Windows-applikasjoner og
              server-løsninger på IBM i.
            </li>
            <li className="list-disc">
              Arbeidet med integrasjoner via REST API-er, SOAP Web-services og
              FTP.
            </li>
            <li className="list-disc">
              Teknologier: Visual Studio, VB.Net, C#, SQL, PHP.
            </li>
          </ul>
        </div>

        <div className="my-8">
          <h3 className="my-3 text-lg font-bold text-orange-900">
            Freelance Webutvikler
          </h3>
          <h4 className="font-bold">2002 - 2006</h4>
          <ul className="list-inside md:list-outside">
            <li className="list-disc">
              Utviklet webløsninger, hjemmesider og nettbutikker.
            </li>
            <li className="list-disc">
              Bidro i utviklingen av back-end for Preus Fotos e-commerce
              løsning.
            </li>
            <li className="list-disc">
              Teknologier: HTML, Javascript, CSS, ASP VBScript, VB.NET.
            </li>
            <li className="list-disc">
              Teknologier: Visual Studio, VB.Net, C#, SQL, PHP.
            </li>
          </ul>
        </div>
      </section>
      <section className="container mx-auto my-10 p-2 md:p-0">
        <h2 className="text-2xl font-black uppercase tracking-widest my-3">
          Utdannelse
        </h2>

        <div className="block mt-3">
          <h3 className="my-3 text-lg font-bold text-orange-900">
            Noroff University College
          </h3>
          <h4 className="font-bold">2022-2024 (pågår)</h4>
          <p>
            Fagskolegrad som Front-end Utvikler. Kurs: Design, Project
            Methodology, HTML and CSS, m.m.
          </p>
        </div>

        <div className="block mt-8">
          <h3 className="my-3 text-lg font-bold text-orange-900">
            Høgskolen i Sør-Trøndelag
          </h3>
          <h4 className="font-bold">2007-2008</h4>
          <h5>Kurs</h5>
          <ul>
            <li className="list-disc">Web-teknikker</li>
            <li className="list-disc">XML teknolog</li>
            <li className="list-disc">Programmering i Visual Basic</li>
            <li className="list-disc">
              Applikasjonsutvikling på .NET-plattformen
            </li>
            <li className="list-disc">C#.NET</li>
            <li className="list-disc">Web-programmering med PHP</li>
          </ul>
        </div>

        <div className="block mt-8">
          <h3 className="my-3 text-lg font-bold text-orange-900">
            UiT Norges Arktiske Universitet
          </h3>
          <h4 className="font-bold">2001</h4>
          <h5>Kurs</h5>
          <ul>
            <li className="list-disc">Grunnkurs i informasjonsteknologi</li>
            <li className="list-disc">Grunnkurs i databaser</li>
          </ul>
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
          <li className="list-disc">
            Verktøy: Visual Studio, VSCode, IBM i Solutions
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
