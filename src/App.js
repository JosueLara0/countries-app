// Libraries
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Layout
import MainLayout from "./Layouts/MainLayout/MainLayout";

// Views
import Home from "./views/Home/Home";
import CountryDetails from "./views/CountryDetails/CountryDetails";
import CapitalWeather from "./views/CapitalWeather/CapitalWeather";
import NotFound from "./views/NotFound/NotFound";

function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/details/:country" exact>
            <CountryDetails />
          </Route>
          <Route path="/weather/:country/:capital" exact>
            <CapitalWeather />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
