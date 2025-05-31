import "./App.css";
import { Route, Routes, BrowserRouter  } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Collection from "./components/pages/Home/Collection";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
