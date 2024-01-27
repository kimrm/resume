import PropTypes from "prop-types";
function Button(props) {
  const { linkUrl, title, children } = props;

  return linkUrl ? (
    <a
      href={linkUrl}
      title={title}
      target="_blank"
      rel="noreferrer"
      className={`flex gap-2 items-center p-2 print:hidden bg-gray-100 opacity-75 hover:opacity-100 hover:scale-105 border border-gray-200 hover:bg-gray-200 rounded hover:shadow transition ease-in duration-200`}
    >
      {children}
    </a>
  ) : (
    <button
      className={`inline-flex items-center p-2 scale-105 hover:bg-gray-200 border-gray-200 rounded hover:shadow transition ease-in duration-200`}
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
