import PropTypes from "prop-types";
function ResumeItem({ title, description, period, bulletpoints }) {
  return (
    <div className="mb-10">
      <h3 className="my-3 text-lg font-bold text-orange-900 dark:text-gray-300">
        {title}
      </h3>
      <h4 className="font-bold">{period}</h4>
      {description && <p>{description}</p>}
      {bulletpoints && (
        <ul className="list-inside md:list-outside">
          {bulletpoints.map((bullet) => (
            <li key={bullet} className="list-disc max-w-prose">
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

ResumeItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  period: PropTypes.string.isRequired,
  bulletpoints: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ResumeItem;
