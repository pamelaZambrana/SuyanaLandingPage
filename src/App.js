import React from 'react';
import { Route,
    RouterProvider,
    createBrowserRouter, 
    createRoutesFromElements,} from 'react-router-dom';

import LayoutPage from './pages/PrincipalLayout/LayoutPage';
import LandingHomePage from "./pages/public/landing/LandingHomePage"
import AboutPage from "./pages/public/landing/AboutPage";
import LandingServicesPage from "./pages/public/landing/LandingServicesPage";
import LandingSpecialistPage from "./pages/public/landing/LandingSpecialistsPage";
import LandingContactsPage from "./pages/public/landing/LandingContactsPage";
import LoginPage from './pages/public/LoginPage';
import GlobalProvider from './globalContext/globalContext';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element = <LayoutPage/>>
    <Route index element=<LandingHomePage/>/>
    <Route path="about" element=<AboutPage/>/>
    <Route path="servicios" element=<LandingServicesPage/>/>
    <Route path="especialistas" element=<LandingSpecialistPage/>/>
    <Route path="contactos" element=<LandingContactsPage/>/>
    <Route path='login' element=<LoginPage/>/>
  </Route>
))

function App() {

  return (
    <>
      <GlobalProvider>
        <RouterProvider router = { router }></RouterProvider>
      </GlobalProvider>
    </>
    );
  }
  
  export default App;
  