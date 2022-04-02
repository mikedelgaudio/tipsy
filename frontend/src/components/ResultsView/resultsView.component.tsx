import ItemMenu from "./ItemMenu/ItemMenu";
import "./resultsView.component.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "../shared/errors/ErrorBoundary";
import { EventFooterActions } from "./EventFooterActions";

function ResultsView() {
  return (
    <form className="results-view" onSubmit={e => e.preventDefault()}>
      <ToastContainer role="alert" />
      <ErrorBoundary>
        <ItemMenu />
        <EventFooterActions />
      </ErrorBoundary>
    </form>
  );
}

export { ResultsView };
