import profile from "./assets/profile.png";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import portfolio from "./assets/portfolio.png";

function Contact() {
  return (
    <section className="container mx-auto my-5 p-2 md:p-0">
      <div className="md:flex items-center gap-5">
        <div>
          <img
            src={profile}
            width={100}
            alt="Profile image of Kim Rune Møller"
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-6xl font-black uppercase tracking-widest my-3">
            KIM RUNE MØLLER
          </h1>
          <h2 className="text-lg md:text-2xl font-black uppercase tracking-widest my-3">
            Web og programvareUtvikler
          </h2>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-y-3 bg-white rounded p-4 my-5 text-xs md:text-base">
          <div className="bg-gray-50 rounded p-1 text-gray-700">
            Fødselsdato
          </div>
          <div className="bg-gray-50 col-span-3 rounded p-1 text-gray-950">
            21. november 1978
          </div>
          <div className="bg-gray-50 rounded p-1 text-gray-700">Adresse</div>
          <div className="bg-gray-50 col-span-3 rounded p-1 text-gray-950">
            Vågahaugen 55, 9303 Silsand
          </div>
          <div className="bg-gray-50 rounded p-1 text-gray-700">Telefon</div>
          <div className="bg-gray-50 col-span-3 rounded p-1 text-gray-950">
            +47 411 29 887
          </div>
          <div className="bg-gray-50 rounded p-1 text-gray-700">E-post</div>
          <div className="bg-gray-50 col-span-3 rounded p-1 text-gray-950">
            kim@kimrune.dev
          </div>
          <div className="bg-gray-50 rounded p-1 text-gray-700 flex items-center">
            Social
          </div>
          <div className="bg-gray-50 col-span-3 rounded p-1 py-4 flex gap-5 text-gray-950">
            <span className="hidden print:block">
              linkedin.com/in/kim-rune-moller | github.com/kimrm |
              portfolio.kimrune.dev
            </span>
            <a
              href="https://www.linkedin.com/in/kim-rune-moller"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center print:hidden opacity-75 hover:opacity-100 hover:scale-105 transition ease-in duration-200"
            >
              <img
                src={linkedin}
                width={25}
                alt="LinkedIn profile icon"
                className="inline mr-2"
              />
              <span className="hidden sm:block">LinkedIn</span>
            </a>
            <a
              href="https://github.com/kimrm"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center print:hidden opacity-75 hover:opacity-100 hover:scale-105 transition ease-in duration-200"
            >
              <img
                src={github}
                width={25}
                alt="GitHub profile icon"
                className="inline mr-2"
              />
              <span className="hidden sm:block">GitHub</span>
            </a>
            <a
              href="https://portfolio.kimrune.dev"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center print:hidden opacity-75 hover:opacity-100 hover:scale-105 transition ease-in duration-200"
            >
              <img
                src={portfolio}
                width={25}
                alt="Portfolio icon"
                className="mr-2"
              />
              <span className="hidden sm:block">Frontend portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
