import "./App.css";
import Menu from "./component/Menu";
import React, { useState } from "react";
import { pages } from "./helpers";
import { centered_menu, menu_style, active_links } from "./setup";
import Person from "./component/Person";
import Info from "./component/Info";
function App() {
  const [selected, setSelected] = useState(pages.main);
  const [links, setLinks] = useState(active_links);
  const [menuCentered, setMenuPosition] = useState(centered_menu);
  const [menuStyle, setMenuStyle] = useState(menu_style);
  function changeMenu(menuItem) {
    setSelected(menuItem);
    console.log(menuItem);
  }
  return (
    <div className="App blue">
      <Menu
        selected={selected}
        changeMenu={changeMenu}
        links={links}
        menuCentered={menuCentered}
        menuStyle={menuStyle}
      />
      <Person />
      <Info selected={selected} />
    </div>
  );
}

export default App;
