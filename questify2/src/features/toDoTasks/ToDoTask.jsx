import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./ToDoTask.module.css";
import { toDoReducer } from "./ToDoSlice";

import ToDoStar from "../../images/toDoTask/ToDoStar";

const ToDoTask = ({ id, difficulty, title, date, time, category }) => {
  const dispatch = useDispatch();

  const chandleDoubleClick = (id) => {
    dispatch(toDoReducer.actions.updateEditedCardId(id));
  };


  return (
    <li
      className={styles.todo__item}
      id={id}
      onDoubleClick={() => chandleDoubleClick(id)}
    >
      <div className="">
        <div className={styles.first__section}>
          <p className={styles.difficulty__bar}>{difficulty}</p>
          <ToDoStar />
        </div>

        <div className={styles.second__section}>
          <p className={styles.task__title}>{title}</p>
        </div>

        <div className={styles.second__section}>
          <p className={styles.task__date}>
            {date}, {time}
          </p>
        </div>
        <div className={styles.third__section}>
          <p className={styles.task__date}>{category}</p>
        </div>
      </div>
    </li>
  );
};

export default ToDoTask;
