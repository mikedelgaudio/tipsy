import { Navbar } from "./components/Navbar";
import ResultsView from "./components/ResultsView/ResultsView";
import { saveState } from "./redux/localStorage";
import store from "./redux/store";

function App() {
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
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <ResultsView />
      </main>
    </>
  );
}

export default App;
