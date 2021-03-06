import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error404View } from "./components/Error-404-View";
import { Navbar } from "./components/Navbar";
import { ResultsView } from "./components/Results-View";
import { WelcomeView } from "./components/Welcome-View";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomeView />} />
            <Route path="calculate" element={<ResultsView />} />
            <Route path="*" element={<Error404View />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
