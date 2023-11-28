import cloud101 from "./aws-educate-introduction-to-cloud-101.png";

function Badges() {
  return (
    <div>
      <a
        className="inline-block"
        href="https://www.credly.com/badges/4b881ada-b52c-40d5-8ea3-5e22c27159fa/public_url"
        target="_blank"
        rel="noreferrer"
      >
        <img src={cloud101} width={100} alt="AWS Cloud 101" />
      </a>
    </div>
  );
}

export default Badges;
