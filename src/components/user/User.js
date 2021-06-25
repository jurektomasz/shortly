import React, { useEffect, useState } from "react";
import useToken from "../helpers/useToken";
import { displayUrls } from "../helpers/displayUrls";
import { useAuth } from "../../auth/ProvideAuth";

export default function User() {
  const { token } = useToken();
  const [urls, setUrls] = useState([]);
  const { username } = useAuth().checkAuthState();

  useEffect(() => {
    fetch("/api/v1/shortUrls/userUrls", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUrls(data);
      });
  }, [token]);

  return (
    <div className="user-links">
      <h1 className="heading-secondary">{`${username}'s`} URLS</h1>
      <ul className="links-list">{displayUrls(urls)}</ul>
    </div>
  );
}
