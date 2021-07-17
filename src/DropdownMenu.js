/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
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
      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem leftIcon="fa fa-github" />
    </div>
  );
}

export default DropdownMenu;
