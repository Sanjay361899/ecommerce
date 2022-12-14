import Header from "./Header";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          
        <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="/" element={<><Header/><Home /></>} />
            <Route path="/checkout" element={<><Header/><Checkout /></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
