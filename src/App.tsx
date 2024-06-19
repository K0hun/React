import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let name = "리액트";
  const style = {
    backgroundColor: "black",
    color: "white",
    fontSize: "48px",
    fontWeight: "bold",
    padding: "20px"
  };

  return (
    <div style = {{
    backgroundColor: "black",
    color: "white",
    fontSize: "48px",
    fontWeight: "bold",
    padding: "20px"
  }}>
      <h1 style = {style}>
        Hello,
        {name === "리액트" ? <h1>Yes</h1> : null}!!
      </h1>
      <p>반갑습니다.</p>
    </div>
  );
}

export default App;
