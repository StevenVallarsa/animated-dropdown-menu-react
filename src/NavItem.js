/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

export default function NavItem(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <li className="nav-item">
        <a
          href="#"
          className="icon-button"
          alt="button icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={props.icon}></i>
        </a>
        {menuOpen && props.children}
      </li>
    </div>
  );
}
