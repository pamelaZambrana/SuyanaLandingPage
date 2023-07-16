import React, { useContext, useEffect, useState } from 'react';
import { principalNavbarList } from './linkList';

import { GlobalContext } from '../../globalContext/globalContext';
import { TYPES } from '../../globalContext/reducer';
import NavbarLinks from '../common/navbarLinks/navbarLinks';


const PrincipalNavbar = () => {
  /* ---- using local state */
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });
  /* ----- using global state ----- */
  const [globalState, dispatch] = useContext(GlobalContext);
  const openMenu = globalState.openPrincipalMenu;

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
console.log(windowSize)
  return (
      <nav className='principal-navbar'>
          <h1>CLÍNICA SUYANA</h1>
          {
              windowSize.width > 785 ?
              <NavbarLinks
                list={ principalNavbarList }
                classStyle={ "navbar-links-plain" }
              ></NavbarLinks>
              :
              <>
                <i 
                  className="bi bi-list"
                  onClick={() => dispatch({ type : TYPES.CLOSE_OPEN_PRINCIPAL_MENU })}  
                ></i>
                {
                  openMenu ?
                  <NavbarLinks
                    list={ principalNavbarList }
                    classStyle={ "navbar-links-vertical" }
                  ></NavbarLinks>
                  : null
                }
              </>
          }
      </nav>
  );
}

export default PrincipalNavbar;
