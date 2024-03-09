import profile from "./assets/profile2.jpeg";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import portfolio from "./assets/portfolio.png";
import Button from "./Button";

function Contact() {
  return (
    <section className="container mx-auto my-5 p-2 md:p-0">
      <div className="md:flex items-center gap-5">
        <div className="relative h-24 w-24 mb-5">
          <img
            src={profile}
            width={100}
            height={100}
            alt="Profile image of Kim Rune Møller"
            className="absolute top-0 left-0 z-10 border-2 border-white shadow-lg rotate-2"
          />
          <img
            src={profile}
            width={100}
            height={100}
            alt="Profile image of Kim Rune Møller"
            className="absolute top-0 left-0 z-0 scale-110 filter blur rotate-6"
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
        <div className="grid grid-cols-4 gap-y-3 bg-gray-50 rounded p-4 my-5 text-xs md:text-base">
          <div className="rounded border-b-white border-b-2 p-2 text-gray-700">
            Fødselsdato
          </div>
          <div className="col-span-3 border-b-white border-b-2 rounded p-2 text-gray-950">
            21. november 1978
          </div>
          <div className=" rounded p-2 border-b-white border-b-2  text-gray-700">
            Adresse
          </div>
          <div className=" col-span-3 rounded p-2 border-b-white border-b-2  text-gray-950">
            Vågahaugen 55, 9303 Silsand
          </div>
          <div className="rounded p-2 border-b-white border-b-2  text-gray-700">
            Telefon
          </div>
          <div className=" col-span-3 rounded p-2 border-b-white border-b-2  text-gray-950">
            +47 411 29 887
          </div>
          <div className="rounded p-2 border-b-white border-b-2  text-gray-700">
            E-post
          </div>
          <div className=" col-span-3 rounded p-2 border-b-white border-b-2  text-gray-950">
            kim@kimrune.dev
          </div>
          <div className=" rounded p-1 text-gray-700 flex items-center">
            Social
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
              <span className="hidden sm:block">Frontend portfolio</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
