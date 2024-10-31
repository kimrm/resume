import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Summary() {
  const language = useContext(LanguageContext);
  return (
    <section className="container mx-auto my-10 py-2 md:p-0">
      <h2 className="text-2xl dark:text-gray-500 font-black uppercase tracking-widest my-3">
        {language === "no" ? "Sammendrag" : "Summary"}
      </h2>
      {language === "no" ? (
        <p className="rounded text-orange-950 dark:text-gray-200 max-w-prose">
          Allsidig utvikler med omfattende kompetanse innen{" "}
          <strong>VB.NET, PHP og Javascript</strong>. Bakgrunnen min inkluderer
          webutvikling og applikasjonsutvikling for Windows-plattformen. Jeg har
          stor interesse for utvikling av brukervennlige systemer og har
          konstant fokus på brukeropplevelsen. Er lidenskapelig opptatt av{" "}
          <strong>Javascript, React, Next.js og webutvikling generelt</strong>{" "}
          og bruker mye av tiden min på å fordype meg i dette, og jeg er alltid
          interessert i utfordringer som bidrar til personlig og faglig
          utvikling.
        </p>
      ) : (
        <p className="rounded text-orange-950 dark:text-gray-200 max-w-prose">
          Versatile software developer with extensive expertise in{" "}
          <strong>VB.NET, PHP, and JavaScript.</strong> My background includes
          web development and application development for the Windows platform.
          I have a strong interest in creating user-friendly systems and am
          constantly focused on enhancing user experience. I&apos;m passionate
          about{" "}
          <strong>
            JavaScript, React, Next.js, and web development in general
          </strong>
          , spending much of my time delving into these areas. I&apos;m always
          eager for challenges that contribute to both personal and professional
          growth.
        </p>
      )}
    </section>
  );
}
