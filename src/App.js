import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";

import GuestRoute from "./GuestRoute";
import { ProvideAuth } from "./ProvideAuth";

const ShortlyApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <GuestRoute path="/login">
          <Login />
        </GuestRoute>
        <GuestRoute path="/register">
          <Register />
        </GuestRoute>
      </Switch>
    </Router>
  );
};

export default function App() {
  return (
    <ProvideAuth>
      <ShortlyApp />
    </ProvideAuth>
  );
}
