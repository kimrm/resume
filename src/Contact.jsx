import profile from "./assets/Compress/profile2.jpg";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import portfolio from "./assets/portfolio.png";
import Button from "./Button";
import Summary from "./Summary";

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
            KIM MØLLER
          </h1>
          <h2 className="text-lg md:text-2xl font-black uppercase tracking-widest my-3">
            Web- og programvareUtvikler
          </h2>
        </div>
      </div>
      <Summary />
      <h2 className="text-sm font-black uppercase tracking-widest mt-12 mb-3">
        Kontaktinformasjon
      </h2>
      <div>
        <div className="grid grid-cols-[200px_minmax(200px,_1fr)] gap-y-1 my-5 text-xs md:text-base">
          <div className="text-orange-900">Telefon</div>
          <div className="text-orange-950">+47 411 29 887</div>
          <div className="text-orange-900">E-post</div>
          <div className="text-orange-950 text-left">kim@kimrune.dev</div>
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
    </section>
  );
}

export default Contact;
