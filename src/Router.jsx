import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/characters/:name" element={<Characters />}></Route>
    </Routes>
  );
}
