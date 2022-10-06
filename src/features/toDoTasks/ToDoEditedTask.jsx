import React from "react";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toDoReducer } from "./ToDoSlice";
import { nanoid } from "nanoid";
import styles from "./ToDoForm.module.css";
import ellipseBlue from "../../icons/ellipse-blue.svg";
import ellipseRed from "../../icons/ellipse-red.svg";
import ellipseGreen from "../../icons/ellipse-green.svg";
import starIcon from "../../icons/star.svg";
import { removeToDo, UpdateToDo, CompleteToDo } from "../../api/request";

import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import ClearButton from "../../images/toDoTask/ClearButton";

import SaveButton from "../../images/toDoTask/SaveButton";
import ConfirmButton from "../../images/toDoTask/ConfirmButton";
import { DeleteTaskModal } from "../../components/deleteQuestModal/DeleteQuestModal";

const ToDoEditedTask = ({ id, difficulty, title, date, time, category }) => {
  const dispatch = useDispatch();

  const inputRef = useRef();
  const formId = useRef(nanoid());
  const titleId = useRef(nanoid());

  const [formValues, setFormValues] = useState({
    id: id,
    title: title,
    difficulty: difficulty,
    category: category,
    type: "quest",
    date: date,
    time: time,
  });

  const [value, setValue] = React.useState(dayjs());

  const UpdateCardInApi = (payload) => dispatch(UpdateToDo(payload));
  const CompleteCardInApi = (payload) => dispatch(CompleteToDo(payload));

  const handleSubmit = (event) => {
    event.preventDefault();

    const { title, difficulty, category, type } = formValues;
    const newToDoTask = {
      title: title,
      difficulty: difficulty,
      category: category,
      type: "quest",
      date: value.format("DD/MM/YYYY"),
      time: `${value.$H}:${value.$m}`,
    };

    // dispatch(toDoReducer.actions.editToDoCard(newToDoTask));
    UpdateCardInApi({ ...newToDoTask, cardId: id });
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

  const onConfirm = () => {
    const status = { status: "Complete" };
    CompleteCardInApi({ ...status, cardId: id });
    dispatch(toDoReducer.actions.updateEditedCardId(""));
  };

  const onDelete = (payload) => {
    dispatch(removeToDo(payload));
    dispatch(toDoReducer.actions.closeModal());
  };

  const modalStatus = useSelector((state) => state.toDos.isModalOpen);

  return (
    <li className={styles.questsWrapper}>
      <form className={`${styles.form} ${styles.grow}`} onSubmit={handleSubmit} id={formId.current}>
        <div className={styles.header__wrapper}>
          <div className={styles.level__wrapper}>
            <button className={styles.level__button} type="button">
              {formValues.difficulty === "Hard" ? (
                <img
                  className={styles.ellipse}
                  src={ellipseRed}
                  alt="star"
                  tabIndex="1"></img>
              ) : formValues.difficulty === "Normal" ? (
                <img
                  className={styles.ellipse}
                  src={ellipseGreen}
                  alt="star"
                  tabIndex="1"></img>
              ) : formValues.difficulty === "Easy" ? (
                <img
                  className={styles.ellipse}
                  src={ellipseBlue}
                  alt="star"
                  tabIndex="1"></img>
              ) : (
                <></>
              )}
            </button>

            <select
              className={styles.level__select}
              name="difficulty"
              value={formValues.difficulty}
              onChange={handleInputValueChange}
              form={formId.current}>
              <option value="Easy">Easy</option>
              <option value="Normal">Normal</option>
              <option value="Hard">Hard</option>
            </select>
            <img
              className={styles.star__icon}
              src={starIcon}
              alt="star"
              tabIndex="1"></img>
          </div>
        </div>

        <div className={styles.TitleWrapper}>
          <h2 className={styles.form__title}>EDIT QUEST</h2>
          <input
            ref={inputRef}
            id={titleId.current}
            name="title"
            value={formValues.title}
            onChange={handleInputValueChange}
            className={styles.form__input}
            required
          />
          <div className={styles.date__wrapper}>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                  <DateTimePicker
                    name="date"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        id="standard-basic"
                        variant="standard"
                        label="Date "
                        margin="normal"
                        {...params}
                      />
                    )}
                  />
                </Stack>
              </LocalizationProvider>
            </div>
          </div>
        </div>

        <div className={styles.bottom__wrapper}>
          <div className={styles.category__wrapper}>
            <div>
              <select
                name="category"
                value={formValues.category}
                onChange={handleInputValueChange}
                form={formId.current}
                className={
                  formValues.category === "Stuff"
                    ? `${styles.category__select} ${styles.stuff}`
                    : formValues.category === "Work"
                    ? `${styles.category__select} ${styles.work}`
                    : formValues.category === "Family"
                    ? `${styles.category__select} ${styles.family}`
                    : formValues.category === "Health"
                    ? `${styles.category__select} ${styles.health}`
                    : formValues.category === "Learning"
                    ? `${styles.category__select} ${styles.learning}`
                    : formValues.category === "Leisure"
                    ? `${styles.category__select} ${styles.leisure}`
                    : styles.category__select
                }>
                <option value="Stuff">Stuff</option>
                <option value="Family">Family</option>
                <option value="Health">Health</option>
                <option value="Learning">Learning</option>
                <option value="Leisure">Leisure</option>
                <option value="Work">Work</option>
              </select>
            </div>
          </div>

          <div className={styles.button__wrapper}>
            <button type="submit" className={styles.button__trash}>
              <SaveButton />
            </button>

            {/* <button className={styles.destroy} onClick={() => onDelete(id)}>
                <ClearButton />
              </button> */}

            <button
              className={styles.button__cancel}
              onClick={(e) => {
                e.preventDefault();
                dispatch(toDoReducer.actions.openModal());
              }}>
              <ClearButton />
            </button>

            <button className={styles.button__done} onClick={onConfirm}>
              <ConfirmButton />
            </button>

            {modalStatus && (
              <DeleteTaskModal
                cancelFn={() => dispatch(toDoReducer.actions.closeModal())}
                deleteFn={() => {
                  onDelete(id);
                }}
              />
            )}
          </div>
        </div>
      </form>
    </li>
  );
};

export default ToDoEditedTask;
