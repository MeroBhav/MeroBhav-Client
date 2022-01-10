import React from "react";

// @packages
import { BrowserRouter, Switch, Route } from "react-router-dom";

// @pages
import Home from "./Pages/Home/Home";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";

import HomeMainDataLayer from "./Context/HomeMainDataLayer";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <HomeMainDataLayer>
            <Route exact path="/" component={Home} />
          </HomeMainDataLayer>
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/auth/signup" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
