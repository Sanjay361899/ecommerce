import Header from "./Header";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
