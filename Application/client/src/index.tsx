import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-w-a8nr3b.us.auth0.com"
    clientId="RMUsP9ZNUIe2lLUdAk6ufqXgjxaZhD3z"
    redirectUri={window.location.origin}
    audience="https://dev-w-a8nr3b.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);