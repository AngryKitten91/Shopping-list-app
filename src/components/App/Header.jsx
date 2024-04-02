// import { useState } from "react";
import logo from "./../../assets/z91y_75c0_210715.jpg";

function Header() {
  return (
    <div className="header flex flex-flex-end fade-in">
      <h1 className="header-title">Shopping Cart App</h1>
      <img
        className="logo img"
        src={logo}
        alt="https://www.freepik.com/free-vector/shopping-trolley-white-background_20829428.htm#fromView=search&page=1&position=26&uuid=b669d771-aa4b-4f40-8088-e84ef29fbace"
      />
    </div>
  );
}

export default Header;
