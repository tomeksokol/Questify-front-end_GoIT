import { React } from "react";
import { useDispatch } from "react-redux";
import styles from "./ToDoCompleted.module.css";
import { removeToDo } from "../../api/request";


const ToDoCompleted = ({id, title}) => {
  const dispatch = useDispatch();

  const onDelete = (payload) => {
    dispatch(removeToDo(payload));
  };

  return (
    <li className={styles.CardItem} id={id}>
      <div className={""}>
        <div className={""}>
          <p className={styles.completed__upper}>
            <div className={styles.completed__name}>COMPLETED:</div>
            <div className={styles.completed__title}>{title}</div>
          </p>
        </div>

        <button
          className={styles.continue__button}
          onClick={() => onDelete(id)}
        >
          <p className={styles.continue__text}>Continue</p>
        </button>
      </div>
    </li>
  );
};

export default ToDoCompleted;
