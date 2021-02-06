import React from "react";
import { Route, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function RouteWrapper({
  component: Component,
  path,
  isPrivateLink,
}) {
  const history = useHistory();
  const { currentUser } = useAuth();

  return (
    <Route
      path={path}
      render={(props) => {
        if (isPrivateLink && !currentUser) {
          history.push("/login");
        } else if (!isPrivateLink && currentUser) {
          history.push("/dashboard");
        }
        return <Component {...props} />;
      }}
    />
  );
}
