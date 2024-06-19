import React from "react";
import logo from "./logo.svg";
import "./App.css";

{
  /*
  작성자 : 1ch
  작성일 : 2030.5.30
  내용 : 기능에 대한 내용
  */
}

function App() {
  let name = "리액트";

  return (
    <div className="container">
      <h1 className="test">
        Hello,
        {name === "리액트" ? <h1>Yes</h1> : null}!!
      </h1>
      <p>반갑습니다.</p>
      {/*주석문 사용하는 방법*/}
    </div>
  );
}

export default App;
