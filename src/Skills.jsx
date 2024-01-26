function Skills() {
  return (
    <section className="container mx-auto my-10 p-2 md:p-0">
      <h2 className="text-2xl font-black uppercase tracking-widest my-3">
        Ferdigheter
      </h2>

      <ul>
        <li className="list-disc">
          Programmering: VB.Net, PHP, JavaScript, SQL
        </li>
        <li className="list-disc">
          Webutvikling: HTML, CSS, ASP, Laravel, Vue, WordPress
        </li>
        <li className="list-disc">Database: MySQL, SQL Server</li>
        <li className="list-disc">
          Verktøy: Visual Studio, VSCode, Git, Git CLI
        </li>
        <li className="list-disc">Systemintegrasjoner: REST API, SOAP, FTP</li>
        <li className="list-disc">Språk: Norsk, Engelsk</li>
      </ul>
      <p className="mt-2">
        I tillegg til dette har jeg i min tid som utvikler vært innom C# .Net og
        Microsoft Presentation Foundation (WPF) og har brukt dette i mindre
        prosjekter. Jeg har også utviklet en app og et par spill til til Windows
        Phone den tiden disse var en ting. Her brukte jeg XAML og C#.
      </p>
    </section>
  );
}

export default Skills;
