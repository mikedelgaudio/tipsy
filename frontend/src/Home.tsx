import CalculateBtn from "./components/CalculateBtn/CalculateBtn";
import ItemMenu from "./components/ItemMenu/ItemMenu";
import SharingRow from "./components/SharingRow/SharingRow";
import TotalsMenu from "./components/TotalsMenu/TotalsMenu";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="homeWrapper">
        <ItemMenu />
        <TotalsMenu />
        <CalculateBtn />
        <SharingRow />
      </div>
    </div>
  );
}

export default Home;
