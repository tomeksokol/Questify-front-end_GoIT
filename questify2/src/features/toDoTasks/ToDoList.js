import { React, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import ToDoTask from './ToDoTask'
import ToDoEditedTask from "./ToDoEditedTask";
import ToDoCompleted from "./ToDoCompleted";

const TodoList = () => {
  const cards = useSelector((state) => state.toDos.cards);
  const editedCard = useSelector((state) => state.toDos.editedCardId);


  useEffect(() => {
    // eslint-disable-next-line
  }, [cards]);

  const renderedListItems = cards.map((card) => {
    return editedCard === card.id ? (
      <ToDoEditedTask
        id={card.id}
        key={card.id}
        difficulty={card.difficulty}
        title={card.title}
        date={card.date}
        time={card.time}
        category={card.category}
      />
    ) : card.completed ? (
      <ToDoCompleted id={card.id} title={card.title} />
    ) : (
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
