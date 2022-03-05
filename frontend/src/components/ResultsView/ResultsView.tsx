import ItemMenu from "./ItemMenu/ItemMenu";
import "./ResultsView.css";
import TotalsMenu from "./TotalsMenu/TotalsMenu";

function ResultsView() {
  return (
    <form className="results-view" onSubmit={e => e.preventDefault()}>
      <ItemMenu />
      <TotalsMenu />
    </form>
  );
}

export default ResultsView;
