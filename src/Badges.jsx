import cloud101 from "./aws-educate-introduction-to-cloud-101.png";
import meta from "./meta.png";

function Badges() {
  return (
    <section className="container mx-auto my-10 p-2 md:p-0">
      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-widest my-3">
        Sertifiseringer og andre kurs
      </h2>
      <div className="md:flex gap-4">
        <a
          className="sm:text-lg my-2 border border-orange-100 flex gap-4 sm:max-w-72 h-24 rounded-md p-2  hover:bg-slate-200 text-slate-900 items-center"
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
          className="sm:text-lg border border-orange-100 flex gap-4 my-2 sm:max-w-72 h-24 rounded-md p-2  hover:bg-slate-200 text-slate-900 items-center"
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
