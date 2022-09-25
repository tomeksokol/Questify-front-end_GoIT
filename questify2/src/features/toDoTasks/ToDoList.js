import { React, useRef } from "react";
import { useSelector } from "react-redux";
import ToDoTask from './ToDoTask'
import { nanoid } from "nanoid";

// import { selectFilteredTodoIds } from "./todosSlice";

const TodoList = () => {
  const listItemKey = useRef(nanoid());  
  const cards = useSelector((state) => state.toDos.cards);
//   const todoIds = useSelector(selectFilteredTodoIds);
//   const loadingStatus = useSelector((state) => state.todos.status);

//   if (loadingStatus === "loading") {
//     return (
//       <div className="todo-list">
//         <div className="loader" />
//       </div>
//     );
//   }

  const renderedListItems = cards.map(card => {
    return (
      <ToDoTask
        id={card.id}
        key={card.id}
        difficulty={card.difficulty}
        title={card.title}
        date={card.date}
        time={card.time}
        category={card.category}
      />
    );
  });

  return <ul className="todo-list">{renderedListItems}</ul>;
};

export default TodoList;
