import ResultsActions from "./components/ResultsActions/ResultsActions";
import ItemMenu from "./components/ItemMenu/ItemMenu";
import TotalsMenu from "./components/TotalsMenu/TotalsMenu";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="homeWrapper">
        <ItemMenu />
        <TotalsMenu />
        <ResultsActions />
      </div>
    </div>
  );
}

export default Home;
