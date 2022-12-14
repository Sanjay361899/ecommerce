import React from "react";
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from "@mui/icons-material";
import { useStateValue } from "./StateProvidere";
import { Link } from "react-router-dom";
const Header = () => {
  const [{basket}, dispatch]=useStateValue();
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon"
      />
      <div className="header__search">
        <input
        className="header__searchInput"
        type="text"/>
        <SearchIcon className="header__searchIcon"/>
      </div>
      <div className="header__nav">
      <Link to="/login"> <div className="header__option"><span className="header__optionLineOne">Hello Guest</span><span className="header__optionLineTwo">Sign In</span></div></Link> 
        <div className="header__option"></div>
        <div className="header__option"><span className="header__optionLineOne">Returns &</span><span className="header__optionLineTwo">order </span></div>
        <div className="header__option"><span className="header__optionLineOne">Your</span><span className="header__optionLineTwo"> Prime</span></div>

        <Link to="/checkout">
         <div className="header__optionBasket">
          <ShoppingBasket sx={{color:"whitesmoke"}}/>
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
          </div>  
        </Link>     
       
      </div>
    </div>
  );
};

export default Header;
