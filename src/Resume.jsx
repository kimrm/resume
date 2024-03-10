import React from "react";
import Contact from "./Contact";
import ResumeItem from "./ResumeItem";
import Skills from "./Skills";
import Badges from "./Badges";
import Work from "./Work";
import Education from "./Education";

const Resume = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Contact />
      <section className="container mx-auto my-10 p-2 md:p-0">
        <h2 className="text-2xl font-black uppercase tracking-widest my-3">
          Sammendrag
        </h2>
        <p className="rounded text-orange-950">
          Allsidig programvareutvikler med omfattende kompetanse innen{" "}
          <strong>VB.NET, PHP og Javascript</strong>. Bakgrunnen min inkluderer
          webutvikling og applikasjonsutvikling for Windows-plattformen. Jeg har
          stor interesse for utvikling av brukervennlige systemer og har
          konstant fokus på brukeropplevelsen. Jeg er alltid interessert i
          utfordringer som bidrar til personlig og faglig utvikling. Er
          lidenskapelig opptatt av{" "}
          <strong className="bg-yellow-100">
            Javascript,Typescript,Node.js og React
          </strong>{" "}
          og bruker mye av tiden min på å fordype meg i dette.
        </p>
      </section>
      <section className="container mx-auto my-10 p-2 md:p-0">
        <h2 className="text-2xl font-black uppercase tracking-widest my-3">
          Arbeidserfaring
        </h2>
        <div className="mb-10">
          {Work.map((work) => (
            <ResumeItem
              key={work.id}
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
              key={education.id}
              title={education.title}
              period={education.period}
              description={education.description}
              bulletpoints={education.bulletpoints}
            />
          ))}
        </div>
      </section>
      <Skills />
      <Badges />
    </div>
  );
});

Resume.displayName = "Resume";

export default Resume;
