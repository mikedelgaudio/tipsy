function AddBtn({
  clickSideEffect,
  ariaTitle,
  className = "",
  iconClassName = "",
}: any) {
  return (
    <button
      className={`btn ${className ? className : ""}`}
      onClick={() => clickSideEffect()}
      title={ariaTitle}
    >
      <span className="btn-wrapper">
        <svg
          className={`icons ${iconClassName ? iconClassName : ""}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 611.999 611.999"
        >
          <path
            fill="currentColor"
            d="M607.242 156.375a21.851 21.851 0 0 0-17.098-8.243h-68.262l33.411-33.411c17.069-17.071 17.069-44.746 0-61.817-17.071-17.071-44.748-17.071-61.817 0l-95.226 95.228h-184.5l-95.226-95.228c-17.069-17.071-44.746-17.069-61.817 0-17.071 17.071-17.071 44.746 0 61.817l33.411 33.411H21.855A21.857 21.857 0 0 0 .556 174.886L87.977 554.94a21.854 21.854 0 0 0 21.299 16.957h393.443a21.855 21.855 0 0 0 21.299-16.957l87.423-380.054a21.844 21.844 0 0 0-4.199-18.511zM382.494 390.012h-46.496v46.498c0 16.567-13.432 29.999-29.999 29.999S276 453.079 276 436.51v-46.498h-46.496c-16.567 0-29.999-13.43-29.999-29.999s13.43-29.999 29.999-29.999H276v-46.495c0-16.567 13.432-29.999 29.999-29.999s29.999 13.43 29.999 29.999v46.496h46.496c16.567 0 29.999 13.432 29.999 29.999s-13.432 29.998-29.999 29.998z"
          />
        </svg>
        <span className="btn-text">Add Item</span>
      </span>
    </button>
  );
}

export { AddBtn };
