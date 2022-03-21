import ShareIcon from "../icons/ShareIcon";
import Dialog from "../Dialog";

function ShareBtn({ ariaTitle, className = "", iconClassName = "" }: any) {
  const buttonLayout = (click: () => void) => {
    return (
      <button
        onClick={() => click()}
        className={`btn ${className ? className : ""}`}
        title={ariaTitle}
      >
        <span className="btn-wrapper">
          <ShareIcon
            className={`icons ${iconClassName ? iconClassName : ""}`}
          />
          <span className="btn-text">Share</span>
        </span>
      </button>
    );
  };

  const modalTitle = "Share with family or friends";

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
        buttonLayout={buttonLayout}
        modalData={modalData}
        ariaTitle={ariaTitle}
        className={className}
      />
    </>
  );
}

export default ShareBtn;
