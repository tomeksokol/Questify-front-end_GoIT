import React from "react";
import styles from "./mainPage.module.css";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import { Navigation } from "../../components/navigation/navigation";
import { PlusBtn } from "../../components/plusBtn/plusBtn";
import ToDoForm from "../../features/toDoTasks/ToDoForm";
import TodoList from "../../features/toDoTasks/ToDoList";
import { useDispatch, useSelector } from "react-redux";
import { toDoReducer } from "../../features/toDoTasks/ToDoSlice";


const MainPage = () => {
  const dispatch = useDispatch();
  const formStatus=useSelector(state=>state.toDos.isFormOpen)
  console.log(formStatus);
  const [open, setOpen] = useState(false);
  const setFormActive = () => {
    dispatch(toDoReducer.actions.openForm())
  }
  // const [displayFormIsActive, setFormActive] = useState(false);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleToggle = () => {
  //   setOpen(!open);
  //  };
  // const handleOpen = (e) => {
  //   e.preventDefault()
  // setFormActive(true)
  // }
  // const saveFunction = (e) => {
  //   e.preventDefault()
  //   setFormActive(false)
  // }

  return (
    <div className={styles.homepage}>
      <Navigation />

      <div className={styles.cards__wrapper}>
        <p>Today</p>
      </div>

      <div>{formStatus && <ToDoForm
        // saveFunction={saveFunction}
      />}</div>

      <div>
        <TodoList />
        {/* <ToDoList /> */}
      </div>

      <div className={styles.cards__wrapper}>
        <p>Tomorrow</p>
      </div>

      {/* <PlusBtn fnt={handleToggle} /> */}
      <PlusBtn
        fnt={setFormActive}
      />
      {/* <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      ></Backdrop> */}
    </div>
  );
};

export default MainPage;