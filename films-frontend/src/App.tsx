import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/home/Home";
import Film from "./components/film/Film";
import Create from "./components/film/Create";

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <div className={"container"}>
        <Switch>
          <Route path={"/"} exact={true} component={Home} />
          <Route path={"/films/:filmId"} component={Film} />
          <Route path={"/create"} component={Create} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
