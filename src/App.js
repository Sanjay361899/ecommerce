import Header from "./Header";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./fireBase";
import { useStateValue } from "./StateProvidere";
function App() {
  const [dispatch]=useStateValue();
  useEffect(()=>{
    //will only run once the app components loads...
    auth.onAuthStateChanged(authUser=>{
      console.log('The User Is >>>>>',authUser);
      if(authUser){
         //the user just logged in / the user was logged in
         dispatch({
          type:'SET_USER',
          user:authUser
         })
        }else{
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])
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
