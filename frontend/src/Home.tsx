import CalculateBtn from "./components/CalculateBtn/CalculateBtn";
import ItemMenu from "./components/ItemMenu/ItemMenu";
import TotalsMenu from "./components/TotalsMenu/TotalsMenu";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="homeWrapper">
        <ItemMenu />
        <TotalsMenu />
        <CalculateBtn />
      </div>
    </div>
  );
}

export default Home;
