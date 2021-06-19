import React, { useContext, createContext } from "react";
import useToken from "../components/helpers/useToken";
import moment from "moment";
import jwt from "jsonwebtoken";
import { Redirect } from "react-router-dom";

const authContext = createContext(null);

function useProvideAuth() {
  const { removeToken, setToken, token } = useToken();

  const loginUser = async (credentials) => {
    const data = await fetch("http://localhost:3001/api/v1/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());

    setToken(data);
    return data;
  };

  const logoutUser = () => {
    removeToken();
    return <Redirect to={{ pathname: "/" }} />;
  };

  const decodeToken = (token) => {
    return jwt.decode(token);
  };
  const getExpiration = (decodedToken) => {
    return moment.unix(decodedToken.exp);
  };
  const isTokenValid = (decodedToken) => {
    return decodedToken && moment().isBefore(getExpiration(decodedToken));
  };

  const checkAuthState = () => {
    const decodedToken = decodeToken(token);
    if (decodedToken && moment().isBefore(getExpiration(decodedToken))) {
      return decodedToken;
    }
    return false;
  };

  const isAuthenticated = () => {
    if (!token) {
      return false;
    }
    const decodedToken = decodeToken(token);
    return isTokenValid(decodedToken);
  };

  return {
    loginUser,
    logoutUser,
    checkAuthState,
    isAuthenticated,
  };
}

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function useAuth() {
  return useContext(authContext);
}

export function withAuth(Component) {
  return function (props) {
    return (
      <authContext.Consumer>
        {(auth) => <Component {...props} auth={auth} />}
      </authContext.Consumer>
    );
  };
}
