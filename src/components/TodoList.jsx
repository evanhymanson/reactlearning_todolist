import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos } = props;

  return (
    <ul className="main">
      {todos.map((todo, todoIdx) => {
        return (
          <TodoCard {...props} key={todoIdx} idx={todoIdx}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
