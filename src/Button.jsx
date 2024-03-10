import PropTypes from "prop-types";
function Button(props) {
  const { linkUrl, title, children, onClick } = props;

  return linkUrl ? (
    <a
      href={linkUrl}
      title={title}
      target="_blank"
      rel="noreferrer"
      className={`flex gap-2 items-center p-2 print:hidden bg-orange-100 opacity-75 hover:opacity-100 hover:scale-105 border border-orange-200 hover:bg-orange-200 rounded hover:shadow transition ease-in duration-200`}
    >
      {children}
    </a>
  ) : (
    <button
      onClick={onClick}
      className={`flex gap-2 items-center p-2 print:hidden bg-orange-100 opacity-75 hover:opacity-100 hover:scale-105 border border-orange-200 hover:bg-orange-200 rounded hover:shadow transition ease-in duration-200`}
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
  onClick: PropTypes.func,
};

export default Button;
