import PropTypes from "prop-types";
function Button(props) {
  const { hoverColor, linkUrl, title, children } = props;

  return linkUrl ? (
    <a
      href={linkUrl}
      title={title}
      target="_blank"
      rel="noreferrer"
      className={`flex gap-2 items-center p-2 print:hidden opacity-75 hover:opacity-100 hover:scale-105 border border-${hoverColor} hover:bg-${hoverColor} rounded hover:shadow transition ease-in duration-200`}
    >
      {children}
    </a>
  ) : (
    <button
      className={`inline-flex items-center p-2 scale-105 hover:bg-${hoverColor} border-${hoverColor} rounded hover:shadow transition ease-in duration-200`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  hoverColor: PropTypes.string,
  title: PropTypes.string,
  linkUrl: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
