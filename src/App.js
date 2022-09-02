import React from "react";
import "./App.css";

// import Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";

import Home from "./Pages/Home";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
