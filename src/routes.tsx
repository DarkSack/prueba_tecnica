import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { CharacterInfoView } from "./Components/CharacterInfoView";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="character/:id" element={<CharacterInfoView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
