import React from "react";
import MenuItem from "../components/MenuItem";
import { Data } from "../data/data";
import "../styles/Menu.css";
function Menu() {
  return (
    <div className="menu">
      <div className="menuTitle">Our Menu</div>
      <div className="menuList">
        {Data.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
