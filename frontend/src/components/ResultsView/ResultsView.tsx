import ItemMenu from "./ItemMenu/ItemMenu";
import "./ResultsView.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "../shared/errors/ErrorBoundary";

function ResultsView() {
  return (
    <form className="results-view" onSubmit={e => e.preventDefault()}>
      <ToastContainer role="alert" />
      <ErrorBoundary>
        <ItemMenu />
      </ErrorBoundary>
    </form>
  );
}

export default ResultsView;
