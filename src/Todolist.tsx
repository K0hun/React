import React, { useState } from "react";

type Todo = {
    id : number;
    text : string;
    isCehcked : boolean;
}

const TodoList: React.FC = () => {
  const title: string = "오늘 할일";

  // 구조분해할당
  const [todos, setTodos] = useState<Todo[]>([
    {id: 1,text: "공부하기",isCehcked: false},
    {id: 2,text: "잠자기",isCehcked: false},
    {id: 3,text: "미팅하기",isCehcked: false},
  ]);

  return (
    <div>
      <h1>{title}</h1>
      <p></p>
      <div className="container">
        <div className="board">
          <ul>
            {
                todos.map((todo, index) =>{
                    return <li key={index}>{todo.text}</li>;
                })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
