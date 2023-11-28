function ResumeItem({ title, description, period, bulletpoints }) {
  return (
    <div className="mb-10">
      <h3 className="my-3 text-lg font-bold text-orange-900">{title}</h3>
      <h4 className="font-bold">{period}</h4>
      {description && <p>{description}</p>}
      {bulletpoints && (
        <ul className="list-inside md:list-outside">
          {bulletpoints.map((bullet) => (
            <li className="list-disc">{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ResumeItem;
