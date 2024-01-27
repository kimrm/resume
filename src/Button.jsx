import PropTypes from "prop-types";
function Button(props) {
  const { hoverClass, linkUrl, children } = props;

  return linkUrl ? (
    <a
      href={linkUrl}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center p-2 print:hidden opacity-75 hover:opacity-100 hover:scale-105 hover:${hoverClass} rounded hover:shadow transition ease-in duration-200`}
    >
      {children}
    </a>
  ) : (
    <button
      className={`inline-flex items-center p-2 scale-105 hover:${hoverClass} rounded hover:shadow transition ease-in duration-200`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  hoverClass: PropTypes.string,
  linkUrl: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
