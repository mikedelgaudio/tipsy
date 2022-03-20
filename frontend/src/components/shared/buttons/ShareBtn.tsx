import ShareIcon from "../icons/ShareIcon";
import Dialog from "../Dialog";

function ShareBtn({ ariaTitle, className = "", iconClassName = "" }: any) {
  const buttonContent = (
    <span className="btn-wrapper">
      <ShareIcon className={`icons ${iconClassName ? iconClassName : ""}`} />
      <span className="btn-text">Share</span>
    </span>
  );

  const modalTitle = "Share to your friends or family to get paid";

  const modalBody = (
    <div className="share-dialog">
      <div className="targets">
        <a className="btn">
          <svg>
            <use href="#facebook"></use>
          </svg>
          <span>Facebook</span>
        </a>

        <a className="btn">
          <svg>
            <use href="#twitter"></use>
          </svg>
          <span>Twitter</span>
        </a>

        <a className="btn">
          <svg>
            <use href="#linkedin"></use>
          </svg>
          <span>LinkedIn</span>
        </a>

        <a className="btn">
          <svg>
            <use href="#email"></use>
          </svg>
          <span>Email</span>
        </a>
      </div>
    </div>
  );

  const modalData = {
    title: modalTitle,
    body: modalBody,
  };

  return (
    <>
      <Dialog
        buttonContent={buttonContent}
        modalData={modalData}
        ariaTitle={ariaTitle}
        className={className}
      />
    </>
  );
}

export default ShareBtn;
