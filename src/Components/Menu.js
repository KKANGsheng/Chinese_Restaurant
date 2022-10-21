import React from "react";
import { MenuList } from "../helpers/MenuList";
import  MenuItem  from "../Components/MenuItem"
import "../styles/Menu.css";

// loopthrough menulist
function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              chinesename={menuItem.chinesename}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;