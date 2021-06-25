import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("shortly_token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    if (userToken === undefined) return;
    localStorage.setItem("shortly_token", JSON.stringify(userToken));
    setToken(userToken);
  };

  const removeToken = () => {
    localStorage.removeItem("shortly_token");
    setToken(null);
  };

  return {
    removeToken,
    setToken: saveToken,
    token,
  };
}
