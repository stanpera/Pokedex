import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/subpages/Navigation";
import HomePage from "./components/subpages/HomePage";
import Arena from "./components/subpages/Arena";
import Favourites from "./components/subpages/Favourites";
import Ranking from "./components/subpages/Ranking";
import Edition from "./components/subpages/Edition";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="arena" element={<Arena />} />
          <Route path="ranking" element={<Ranking />} />
          <Route path="edition" element={<Edition />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;



  
  