import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";

function Routing() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default Routing;
