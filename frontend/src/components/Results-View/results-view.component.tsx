import { ItemMenu } from "./Item-Menu";
import "./results-view.component.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "../shared/errors/ErrorBoundary";
import { EventFooterActions } from "./Event-Footer-Actions";
import store from "../../redux/store";
import { saveState } from "../../redux/localStorage";

function ResultsView() {
  // TODO: Verify this is the proper way to grab state
  store.subscribe(() => {
    saveState({
      persons: store.getState().calculation.persons,
      items: store.getState().calculation.items,
      eventTitle: store.getState().calculation.eventTitle,
      eventTotal: store.getState().calculation.eventTotal,
      eventTotalFloat: store.getState().calculation.eventTotalFloat,
      eventTipTaxTotal: store.getState().calculation.eventTipTaxTotal,
      eventTipTaxTotalFloat: store.getState().calculation.eventTipTaxTotalFloat,
      eventSubtotalFloat: store.getState().calculation.eventSubtotalFloat,
      eventId: store.getState().calculation.eventId,
    });
  });
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
