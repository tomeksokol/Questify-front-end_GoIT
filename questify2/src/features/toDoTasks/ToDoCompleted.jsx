import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ToDoCompleted.module.css";
import { removeToDo } from "../../api/request";
import CompleteQuestModal from "../../components/CompleteQuestModal/CompleteQuestModal";
import { toDoReducer } from "./ToDoSlice";


const ToDoCompleted = ({id, title}) => {
  const dispatch = useDispatch();

  const modalStatus = useSelector((state) => state.toDos.isTaskNameShown);

  const onDelete = (payload) => {
    dispatch(removeToDo(payload));
  };

  return (
    <li className={styles.CardItem} id={id}>
      <div className={""}>
        <div className={""}>
          <h1 className={styles.completed__upper}>
            <div className={styles.completed__name}>COMPLETED:</div>
            <button
              className={styles.completed__button}
              onClick={(e) => {
                e.preventDefault();
                dispatch(toDoReducer.actions.openTaskName());
              }}
            >
              <div className={styles.completed__title}>{title}</div>
            </button>
          </h1>
        </div>

        <button
          className={styles.continue__button}
          onClick={() => onDelete(id)}
        >
          <p className={styles.continue__text}>Continue</p>
        </button>

        {modalStatus && (
          <CompleteQuestModal
            title={title}
            handleClose={() => dispatch(toDoReducer.actions.closeTaskName())}
          />
        )}
      </div>
    </li>
  );
};

export default ToDoCompleted;
