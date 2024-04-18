import cloud101 from "../assets/aws-educate-introduction-to-cloud-101.png";
import meta from "../assets/meta.png";
import csharp from "../assets/csharp.png";

function Badges() {
  return (
    <div className="md:flex gap-4">
      <a
        className="sm:text-lg my-2 border border-orange-100 dark:border-gray-50 flex gap-4 sm:max-w-72 h-24 rounded-md p-2 dark:bg-gray-200 hover:bg-orange-200  dark:hover:bg-gray-500 text-slate-900 items-center"
        target="_blank"
        rel="noreferrer"
        href="https://coursera.org/share/19b2fafdf15662fbdeb3935a89087bfd"
      >
        <div className=" border-0 border-r border-r-orange-100 dark:border-r-gray-50 h-full w-24 flex items-center">
          <img
            src={meta}
            width={100}
            className="h-12 max-w-44"
            alt="Meta Front-End Developer Certificate"
          />
        </div>
        <div>Meta Front-End Developer Certificate</div>
      </a>
      <a
        className="sm:text-lg my-2 border border-orange-100 dark:border-gray-50 flex gap-4 sm:max-w-72 h-24 rounded-md p-2 dark:bg-gray-200 hover:bg-orange-200 dark:hover:bg-gray-500 text-slate-900 items-center"
        href="https://www.credly.com/badges/4b881ada-b52c-40d5-8ea3-5e22c27159fa/public_url"
        target="_blank"
        rel="noreferrer"
      >
        <div className=" border-0 border-r border-r-orange-100 dark:border-r-gray-50 h-full w-24 flex items-center">
          <img
            src={cloud101}
            width={100}
            className=" max-w-44"
            alt="AWS Cloud 101"
          />
        </div>
        <div>AWS Cloud Computing 101</div>
      </a>
      <a
        className="sm:text-lg my-2 border border-orange-100 dark:border-gray-50 flex gap-4 sm:max-w-72 h-24 rounded-md p-2 dark:bg-gray-200 hover:bg-orange-200 dark:hover:bg-gray-500 text-slate-900 items-center"
        href="https://www.freecodecamp.org/certification/fcc2bf4abde-411d-4f0b-9a1d-9bf5683846d5/foundational-c-sharp-with-microsoft"
        target="_blank"
        rel="noreferrer"
      >
        <div className=" border-0 border-r border-r-orange-100 dark:border-r-gray-50 h-full w-24 flex items-center">
          <img
            src={csharp}
            width={100}
            className="max-w-44"
            alt="Foundational C#"
          />
        </div>
        <div>Foundational C#</div>
      </a>
    </div>
  );
}

export default Badges;
