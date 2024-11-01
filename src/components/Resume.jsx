import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import Contact from "./Contact";
import ResumeItem from "./ResumeItem";
import Skills from "./Skills";
import Badges from "./Badges";
import Work from "../data/Work";
import WorkEnglish from "../data/Work_en";
import Education from "../data/Education";
import EducationEnglish from "../data/Education_en";

const Resume = React.forwardRef((props, ref) => {
  const language = useContext(LanguageContext);

  return (
    <div ref={ref}>
      <Contact />
      <section className="container mx-auto my-10 p-2 md:p-0">
        <h2 className="text-2xl dark:text-gray-500 font-black uppercase tracking-widest my-3">
          {language === "no" ? "Arbeidserfaring" : "Work experience"}
        </h2>
        <div className="mb-10">
          {language === "no"
            ? Work.map((work) => (
                <ResumeItem
                  key={work.id}
                  title={work.title}
                  description={work.description}
                  period={work.period}
                  bulletpoints={work.bulletpoints}
                />
              ))
            : WorkEnglish.map((work) => (
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
        <h2 className="text-2xl dark:text-gray-500 font-black uppercase tracking-widest my-3">
          {language === "no" ? "Utdannelse" : "Education"}
        </h2>
        <div className="mb-10">
          {language === "no"
            ? Education.map((education) => (
                <ResumeItem
                  key={education.id}
                  title={education.title}
                  period={education.period}
                  description={education.description}
                  bulletpoints={education.bulletpoints}
                />
              ))
            : EducationEnglish.map((education) => (
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
      <section className="container mx-auto my-10 p-2 md:p-0">
        <h2 className="text-2xl dark:text-gray-500 font-black uppercase tracking-widest my-3">
          {language === "no"
            ? "Sertifisering og andre kurs"
            : "Certificates and other courses"}
        </h2>
        <Badges />
      </section>
      <section className="container mx-auto my-10 p-2 md:p-0">
        <h2 className="text-2xl dark:text-gray-500 font-black uppercase tracking-widest my-3">
          {language === "no" ? "Publikasjoner" : "Publications"}
        </h2>
        {language === "no" ? (
          <p className="max-w-prose">
            Skrev en kort case study for React meta-rammeverket{" "}
            <a href="https://remix.run" target="_blank" rel="noreferrer">
              Remix
            </a>{" "}
            som en del av en innlevering i mitt studie hos Noroff. Den kan leses
            her:{" "}
            <a
              href="https://library.noroff.dev/frameworks/remix/remix-case-study/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-dotted underline-offset-2"
            >
              Remix case study
            </a>
          </p>
        ) : (
          <p className="max-w-prose">
            Wrote a short case study for the React meta framework Remix during
            my study at Noroff. It can be read here:{" "}
            <a
              href="https://library.noroff.dev/frameworks/remix/remix-case-study/"
              className="underline decoration-dotted underline-offset-2"
            >
              Remix case study
            </a>
          </p>
        )}
      </section>
      <section className="container mx-auto my-10 p-2 md:p-0">
        <h2 className="text-2xl dark:text-gray-500 font-black uppercase tracking-widest my-3">
          {language === "no" ? "Ferdigheter" : "Skills"}
        </h2>
        <Skills />
      </section>
    </div>
  );
});

Resume.displayName = "Resume";

export default Resume;
