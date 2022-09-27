import React from "react";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toDoReducer } from "./ToDoSlice";
import { nanoid } from "nanoid";
import styles from "./ToDoTask.module.css";

// import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import ClearButton from "../../images/toDoTask/ClearButton";
import ToDoStar from "../../images/toDoTask/ToDoStar";
import SaveButton from "../../images/toDoTask/SaveButton";
import ConfirmButton from "../../images/toDoTask/ConfirmButton";

const ToDoEditedTask = ({ id, difficulty, title, date, time, category }) => {
  const dispatch = useDispatch();

  const inputRef = useRef();
  const formId = useRef(nanoid());
  const titleId = useRef(nanoid());

  const [formValues, setFormValues] = useState({
    id: id,
    title:  title,
    difficulty: difficulty,
    category: category,
    type: "quest",
    date: date,
    time: time,
  });

  const [value, setValue] = React.useState(dayjs());

  const handleSubmit = (event) => {
    event.preventDefault();

    const { title, difficulty, category, type } = formValues;
    const newToDoTask = {
      id: id,
      title: title,
      difficulty: difficulty,
      category: category,
      type: "quest",
      date: value.format("DD/MM/YYYY"),
      time: `${value.$H}:${value.$m}`,
    };

    dispatch(toDoReducer.actions.editToDoCard(newToDoTask));
    dispatch(toDoReducer.actions.updateEditedCardId(""));
  };

  const handleInputValueChange = (event) => {
    setFormValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onConfirm = (id) => {
    dispatch(toDoReducer.actions.completeToDoCard(id));
    dispatch(toDoReducer.actions.updateEditedCardId(""));
  }

    const onDelete = (id) => {
      dispatch(toDoReducer.actions.deleteToDoCard(id));
    };

  return (
    <ul>
      <li className={styles.todo__form}>
        <form onSubmit={handleSubmit} id={formId.current}>
          <div className="">
            <div className={styles.first__section}>
              <select
                className={styles.difficulty__bar}
                name="difficulty"
                value={formValues.difficulty}
                onChange={handleInputValueChange}
                form={formId.current}
              >
                <option value="Easy">Easy</option>
                <option value="Normal">Normal</option>
                <option value="Hard">Hard</option>
              </select>

              <ToDoStar />
            </div>

            <div className={styles.input__placeholder}>
              <p>edit quest</p>
            </div>

            <div className={styles.second__section}>
              <input
                ref={inputRef}
                id={titleId.current}
                name="title"
                value={formValues.title}
                onChange={handleInputValueChange}
                className={styles.input__field}
                required
              />
            </div>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DateTimePicker
                  label="Date&Time picker"
                  name="date"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>

            <div className={styles.third__section}>
              <select
                className="categoryPicker"
                name="category"
                value={formValues.category}
                onChange={handleInputValueChange}
                form={formId.current}
              >
                <option value="Stuff">Stuff</option>
                <option value="Family">Family</option>
                <option value="Health">Health</option>
                <option value="Learning">Learning</option>
                <option value="Leisure">Leisure</option>
                <option value="Work">Work</option>
              </select>

              <button type="submit" className={styles.submit__button}>
                <SaveButton />
              </button>

              <button className={styles.destroy} onClick={() => onDelete(id)}>
                <ClearButton />
              </button>
              <button className={styles.destroy} onClick={() => onConfirm(id)}>
                <ConfirmButton />
              </button>
            </div>
          </div>
        </form>
      </li>
    </ul>
  );
};

export default ToDoEditedTask;
