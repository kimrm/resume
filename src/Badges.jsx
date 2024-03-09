import cloud101 from "./aws-educate-introduction-to-cloud-101.png";
import meta from "./meta.png";

function Badges() {
  return (
    <section className="container mx-auto my-10 p-2 md:p-0">
      <h2 className="text-2xl font-black uppercase tracking-widest my-3">
        Sertifiseringer/Annet
      </h2>
      <div className="md:flex gap-4">
        <a
          className="text-center text-lg my-2 border flex sm:max-w-72 h-24 rounded-md p-2 bg-slate-300 hover:bg-slate-200 text-slate-900 items-center justify-center"
          href="https://coursera.org/share/19b2fafdf15662fbdeb3935a89087bfd"
        >
          <img
            src={meta}
            width={100}
            alt="Meta Front-End Developer Certificate"
          />
          Meta Front-End Developer Certificate
        </a>
        <a
          className="text-center text-lg border flex my-2 sm:max-w-72 h-24 rounded-md p-2 bg-slate-300 hover:bg-slate-200 text-slate-900 items-center justify-center"
          href="https://www.credly.com/badges/4b881ada-b52c-40d5-8ea3-5e22c27159fa/public_url"
          target="_blank"
          rel="noreferrer"
        >
          <img src={cloud101} width={100} alt="AWS Cloud 101" />
          AWS Cloud Computing 101
        </a>
      </div>
    </section>
  );
}

export default Badges;
