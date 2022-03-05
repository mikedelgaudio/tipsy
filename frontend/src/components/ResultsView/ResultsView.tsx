import ItemMenu from "./ItemMenu/ItemMenu";
import "./ResultsView.css";
import TotalsMenu from "./TotalsMenu/TotalsMenu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ResultsView() {
  return (
    <form className="results-view" onSubmit={e => e.preventDefault()}>
      <ToastContainer role="alert" />
      <ItemMenu />
      <TotalsMenu />
    </form>
  );
}

export default ResultsView;
