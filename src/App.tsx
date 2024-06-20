import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./Todolist";
import Clock from './Timer';

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
      <TodoList></TodoList>
      <Clock></Clock>
    </div>
  );
}

export default App;
