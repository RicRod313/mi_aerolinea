import { useState} from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

//Components
import Navbar from 'components/layout/navbar/Navbar';
import SideDrawer from 'components/layout/side-drawer/SideDrawer';
import RoutesMain from 'components/routes/Routes';

import './App.css';

const App = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const showHideSideMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <Router>
      <div className="app">
        <Navbar openMenu={showHideSideMenu} />
        <SideDrawer open={openMenu} onClose={showHideSideMenu}/>
        <RoutesMain />
      </div>
    </Router>
  )
}

export default App
