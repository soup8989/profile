import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CafePage } from "./pages/CafePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/profile" element={<HomePage />} />
        <Route path="/profile/cafe" element={<CafePage />} />
      </Routes>
    </>
  );
}

export default App;
