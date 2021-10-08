import ResultsActions from "./ResultsActions/ResultsActions";
import ItemMenu from "./ItemMenu/ItemMenu";
import TotalsMenu from "./TotalsMenu/TotalsMenu";
import "./ResultsView.css";

function ResultsView() {
  return (
    <div className="resultsWrapper">
      <ItemMenu />
      <TotalsMenu />
      <ResultsActions />
    </div>
  );
}

export default ResultsView;
