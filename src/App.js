import React from "react";
import "./App.css";
import Nav from "./components/Nav";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home, About, Contact } from "./pages";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
