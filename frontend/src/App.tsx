import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ResultsView from "./components/ResultsView/ResultsView";

function App() {
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
