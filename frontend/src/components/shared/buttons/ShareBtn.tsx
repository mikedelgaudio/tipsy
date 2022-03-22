import ShareIcon from "../icons/ShareIcon";
import Dialog from "../Dialog";
import store from "../../../redux/store";

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

  const displayShare = () => {
    if (!navigator.share) return;

    const eventName = store.getState().calculation.eventTitle;
    const eventTotal = store.getState().calculation.eventTotal;
    const persons = store.getState().calculation.persons;

    const personData = persons.map(person => {
      return `${person.name}: $${person.totalDue}\n`;
    });

    const promotion = "Calculated by tipsy.delgaudiomike.com";

    // TODO: Create a side effect or logger notification?
    navigator
      .share({
        title: `${eventName}'s Calculations`,
        text: `How much everyone owes:\n${personData.join(
          "",
        )}\nTotal: $${eventTotal}\n\n${promotion}`,
      })
      .catch(console.warn);
  };

  return (
    <>
      {navigator["share"] ? (
        buttonLayout(displayShare)
      ) : (
        <Dialog
          buttonLayout={buttonLayout}
          modalData={modalData}
          ariaTitle={ariaTitle}
          className={className}
        />
      )}
    </>
  );
}

export default ShareBtn;
