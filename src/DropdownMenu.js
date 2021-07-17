/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">
          <i className={props.leftIcon}></i>
        </span>
        {props.children}
        <span className="icon-right">
          <i className={props.rightIcon}></i>
        </span>
      </a>
    );
  }

  return (
    <div className="dropdown">
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        className="menu-primary"
      >
        <div className="menu">
          <DropdownItem> My Profile</DropdownItem>
          <DropdownItem
            leftIcon="fa fa-github fa-lg"
            rightIcon="fa fa-chevron-circle-right fa-lg"
            goToMenu="settings"
          />
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        className="menu-secondary"
      >
        <div className="menu">
          <DropdownItem
            leftIcon="fa fa-chevron-circle-left fa-lg"
            goToMenu="main"
          />
          <DropdownItem> Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;
