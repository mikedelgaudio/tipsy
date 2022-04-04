import { useNavigate } from "react-router-dom";

function Error404View() {
  const navigate = useNavigate();

  return (
    <>
      <section className="container c-full-height c-grid-center">
        <h1 className="header">Sorry, this page doesn't exist.</h1>
        <p className="paragraph-1">Please navigate to the home page.</p>
        <button className="btn btn-success" onClick={() => navigate("/")}>
          Go Home
        </button>
      </section>
    </>
  );
}

export { Error404View };
