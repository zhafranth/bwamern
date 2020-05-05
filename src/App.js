import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/scss/style.scss";
import LandingPage from "Pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route to="/" component={LandingPage}></Route>
      </Router>
    </div>
  );
}

export default App;
