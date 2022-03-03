import { ToastContainer } from "react-toastify";
import ItemMenu from "./ItemMenu/ItemMenu";
import "./ResultsView.css";
import "react-toastify/dist/ReactToastify.css";
import TotalsMenu from "./TotalsMenu/TotalsMenu";

function ResultsView() {
  return (
    <form className="results-view" onSubmit={e => e.preventDefault()}>
      <ToastContainer />
      <ItemMenu />
      <TotalsMenu />
    </form>
  );
}

export default ResultsView;
