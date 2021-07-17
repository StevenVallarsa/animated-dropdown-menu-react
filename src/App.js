import React from "react";

import Navbar from "./Navbar";
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";

function App() {
  return (
    <Navbar>
      <NavItem icon="fa fa-phone" />
      <NavItem icon="fa fa-book" />
      <NavItem icon="fa fa-chevron-circle-down">
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

export default App;
