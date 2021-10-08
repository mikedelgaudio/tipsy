import ItemMenu from "./ItemMenu/ItemMenu";
import ResultsActions from "./ResultsActions/ResultsActions";
import "./ResultsView.css";
import TotalsMenu from "./TotalsMenu/TotalsMenu";

function ResultsView() {
  return (
    <div className="results-view">
      <ItemMenu />
      <TotalsMenu />
      <ResultsActions />
    </div>
  );
}

export default ResultsView;
