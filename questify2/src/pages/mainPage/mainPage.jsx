import React from "react";
import styles from "./mainPage.module.css";
import { useState, useEffect } from "react";
import { Navigation } from "../../components/navigation/navigation";
import { PlusBtn } from "../../components/plusBtn/plusBtn";
import ToDoForm from "../../features/toDoTasks/ToDoForm";
import TodoList from "../../features/toDoTasks/ToDoList";
import { useDispatch, useSelector } from "react-redux";
import { toDoReducer } from "../../features/toDoTasks/ToDoSlice";
import { fetchToDos } from "../../api/request";


const MainPage = () => {
  const dispatch = useDispatch();
  const formStatus=useSelector(state=>state.toDos.isFormOpen)
  const [open, setOpen] = useState(false);
  const setFormActive = () => {
    dispatch(toDoReducer.actions.openForm())
  }

  const getCardsFromApi = () => dispatch(fetchToDos());

    useEffect(() => {
      getCardsFromApi();
      // eslint-disable-next-line
    }, []);

  return (
 
      <div className={styles.homepage}>
        <Navigation />

        <div className={styles.cards__wrapper}>
          <p>Today</p>
        </div>

        <div>{formStatus && <ToDoForm />}</div>

        <div>
          <TodoList />
        </div>

        <div className={styles.cards__wrapper}>
          <p>Tomorrow</p>
        </div>

        <PlusBtn fnt={setFormActive} />
      </div>

  );
};

export default MainPage;