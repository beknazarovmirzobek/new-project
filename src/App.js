import React from "react";
import AboutUs from './pages/AboutUs';
import './app.css';
import GlobalStyle from "./components/GlobalStyle";
import Navbar from '../src/components/Nav';
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";

import { Switch, Route } from 'react-router-dom';
import MoiveDetail from "./components/ModeiDetailes";


function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/work/:id">
          <MoiveDetail />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
