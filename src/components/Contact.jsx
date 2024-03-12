import profile from "../assets/Compress/profile2.jpg";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import portfolio from "../assets/portfolio.png";
import Button from "./Button";
import Summary from "./Summary";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

function Contact() {
  const language = useContext(LanguageContext);

  return (
    <section className="container mx-auto my-5 p-2 md:p-0">
      <div className="md:flex items-center gap-5">
        <div className="relative h-24 w-24 mb-5">
          <img
            src={profile}
            width={100}
            height={100}
            alt="Profile image of Kim Møller"
            className="absolute top-0 left-0 z-10 border-2 border-white shadow-lg rotate-2"
          />
          <img
            src={profile}
            width={100}
            height={100}
            alt="Profile image of Kim Møller"
            className="absolute top-0 left-0 z-0 scale-110 filter blur rotate-6"
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-6xl font-black uppercase tracking-widest my-3">
            KIM MØLLER
          </h1>
          <h2 className="text-lg md:text-2xl font-black uppercase tracking-widest my-3">
            {language === "no"
              ? "Web- og programvare-utvikler"
              : "Web and Software Developer"}
          </h2>
        </div>
      </div>
      <Summary />
      <h2 className="text-sm font-black uppercase tracking-widest mt-12 mb-3">
        {language === "no" ? "Kontaktinformasjon" : "Contact information"}
      </h2>
      <div>
        <div className="grid grid-cols-[100px_minmax(100px,_1fr)] gap-y-1 my-5">
          <div className="text-orange-900 dark:text-gray-100">
            {language === "no" ? "Telefon" : "Phone"}{" "}
          </div>
          <div className="text-orange-950 dark:text-gray-200">
            +47 411 29 887
          </div>
          <div className="text-orange-900 dark:text-gray-100">
            {language === "no" ? "E-post" : "E-mail"}
          </div>
          <div className="text-orange-950 dark:text-gray-200 text-left">
            kim@kimrune.dev
          </div>
        </div>
        <div className=" col-span-3 rounded p-1 py-2 flex gap-5 text-gray-950">
          <span className="hidden print:block">
            linkedin.com/in/kim-rune-moller | github.com/kimrm |
            portfolio.kimrune.dev
          </span>
          <Button
            title="LinkedIn Profile"
            linkUrl="https://www.linkedin.com/in/kim-rune-moller"
          >
            <img src={linkedin} width={25} alt="LinkedIn profile icon" />
            <span className="hidden sm:block">LinkedIn</span>
          </Button>
          <Button title="GitHub Profile" linkUrl="https://github.com/kimrm">
            <img src={github} width={25} alt="GitHub profile icon" />
            <span className="hidden sm:block">GitHub</span>
          </Button>
          <Button
            title="Frontend portfolio"
            linkUrl="https://portfolio.kimrune.dev"
          >
            <img src={portfolio} width={25} alt="Portfolio icon" />
            <span className="text-sm sm:text-base">Portfolio</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
