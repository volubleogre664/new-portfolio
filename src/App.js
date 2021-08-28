import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";

import Home from "./pages/Home";
import Project from "./pages/Projects";
import VisionBoard from "./pages/Vision";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" />
        <Route component={Project} path="/projects" />
        <Route component={About} path="/about" />
        <Route component={VisionBoard} path="/goals" />
      </Switch>
    </Router>
  );
}

export default App;
