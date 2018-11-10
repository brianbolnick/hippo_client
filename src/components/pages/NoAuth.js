import React from "react";
import { Link } from "react-router-dom";
const NoAuth = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "column"
      }}
    >
      <h1 className="title" style={{ fontSize: "16rem" }}>
        NEW APP
      </h1>
      <h2 className="subtitle">
        You must be <Link to="/sign_in">signed in </Link> to see this page.
      </h2>
    </div>
  );
};
export default NoAuth;
