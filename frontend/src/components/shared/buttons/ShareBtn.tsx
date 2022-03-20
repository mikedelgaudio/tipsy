import ShareIcon from "../icons/ShareIcon";

function ShareBtn({
  click,
  ariaTitle,
  className = "",
  iconClassName = "",
}: any) {
  return (
    <button
      className={`btn ${className ? className : ""}`}
      onClick={() => click()}
      title={ariaTitle}
    >
      <span className="btn-wrapper">
        <ShareIcon className={`icons ${iconClassName ? iconClassName : ""}`} />
        <span className="btn-text">Share</span>
      </span>
    </button>
  );
}

export default ShareBtn;
