import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/landing/Header";
import Main from "./components/landing/Main";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Footer from "./components/landing/Footer";
import Navigation from "./components/landing/Navigation";
import NotFound from "./components/404/NotFound";

import GuestRoute from "./auth/GuestRoute";
import { ProvideAuth } from "./auth/ProvideAuth";
import User from "./components/user/User";

const ShortlyApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/userUrls">
          <header className="header-wrapper header-wrapper__user">
            <div className="wrapper">
              <Navigation />
            </div>
          </header>
          <main className="main-wrapper">
            <div className="wrapper ">
              <User />
            </div>
          </main>

          <Footer />
        </Route>

        <GuestRoute path="/login">
          <Login />
        </GuestRoute>
        <GuestRoute path="/register">
          <Register />
        </GuestRoute>
        <Route path="*">
          <NotFound />
        </Route>
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
