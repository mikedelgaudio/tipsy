import ShareIcon from "../icons/ShareIcon";
import MyCustomDialog from "../Modal";

function ShareBtn({ ariaTitle, className = "", iconClassName = "" }: any) {
  const buttonContent = (
    <span className="btn-wrapper">
      <ShareIcon className={`icons ${iconClassName ? iconClassName : ""}`} />
      <span className="btn-text">Share</span>
    </span>
  );
  return (
    <>
      <MyCustomDialog
        buttonContent={buttonContent}
        ariaTitle={ariaTitle}
        className={className}
      />
    </>
  );
}

export default ShareBtn;
