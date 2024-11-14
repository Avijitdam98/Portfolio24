import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import { AiOutlineAlignCenter, AiOutlineAlignLeft } from "react-icons/ai";
import "./Layout.css";
import Menus from "../Menus/Menus";

export const Layout = () => {
  const [toggle, setToggle] = useState(true);

  // Change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <AiOutlineAlignCenter size={30} />
              ) : (
                <AiOutlineAlignLeft size={30} />
              )}
            </p>
          </div>
          <Menus toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};
