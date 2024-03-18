import profile from "../assets/Compress/profile2.jpg";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
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
            linkedin.com/in/kim-rune-moller | github.com/kimrm | kimrune.dev
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
          <Button title="Frontend portfolio" linkUrl="https://kimrune.dev">
            <svg
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            <span className="text-sm sm:text-base">
              {language === "no" ? "Hjemmeside" : "Home page"}
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
