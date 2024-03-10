import { useContext } from "react";
import { LanguageContext } from "./contexts/LanguageContext";

export default function Summary() {
  const language = useContext(LanguageContext);
  return (
    <section className="container mx-auto my-10 py-2 md:p-0">
      <h2 className="text-2xl font-black uppercase tracking-widest my-3">
        {language === "no" ? "Sammendrag" : "Summary"}
      </h2>
      {language === "no" ? (
        <p className="rounded text-orange-950 max-w-prose">
          Allsidig programvareutvikler med omfattende kompetanse innen{" "}
          <strong>VB.NET, PHP og Javascript</strong>. Bakgrunnen min inkluderer
          webutvikling og applikasjonsutvikling for Windows-plattformen. Jeg har
          stor interesse for utvikling av brukervennlige systemer og har
          konstant fokus på brukeropplevelsen. Jeg er alltid interessert i
          utfordringer som bidrar til personlig og faglig utvikling. Er
          lidenskapelig opptatt av{" "}
          <strong>Javascript,Typescript,Node.js og React</strong> og bruker mye
          av tiden min på å fordype meg i dette.
        </p>
      ) : (
        <p className="rounded text-orange-950 max-w-prose">
          Versatile software developer with extensive expertise in{" "}
          <strong>VB.NET, PHP, and Javascript</strong>. My background includes
          web development and application development for the Windows platform.
          I have a strong interest in creating user-friendly systems and
          consistently focus on user experience. I am always interested in
          challenges that contribute to personal and professional growth.
          Passionate about{" "}
          <strong>Javascript, Typescript, Node.js, and React</strong>, and I
          spend a lot of my time delving into these technologies.
        </p>
      )}
    </section>
  );
}
