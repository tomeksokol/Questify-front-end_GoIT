import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

import { createUser } from "../../redux/auth/actions.js";
import { selectUserRequestStatus } from "../../redux/auth/selectors.js";
import { useDispatch, useSelector } from "react-redux";

import s from "./Login.module.css";
import sc from "../../utils/Container.module.css";
import ButtonGo from "../ButtonGo/ButtonGo.jsx";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { JWT_TOKEN_STORAGE_KEY } from "../../utils/constans.js";

const Login = () => {
  const dispatch = useDispatch();
  const userRequestStatus = useSelector(selectUserRequestStatus);
  const navigate = useNavigate();

  const inputRef = useRef(); // { current: }
  const nameId = useRef(nanoid());
  const emailId = useRef(nanoid());
  const passwordId = useRef(nanoid());

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    Loading.arrows("Loading");

    const { name, email, password } = formValues;

    dispatch(
      createUser({
        name,
        email,
        password,
      })
    );
  };

  const handleInputValueChange = (event) => {
    setFormValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    //const token = localStorage.getItem(JWT_TOKEN_STORAGE_KEY);
    if (userRequestStatus === "success") {
      Loading.remove();
      navigate("/");
    }
  }, [userRequestStatus, navigate]);

  return (
    <div className={s.landing}>
      <div className={s.position}>
        <div className={sc.container}>
          <h1 className={s.title}>Questify</h1>
          <p className={s.about}>
            Questify will turn your life into <br /> a thrilling game full of
            amazing <br />
            quests and exciting challenges.
          </p>
          <form onSubmit={handleSubmit}>
            <div className={s.spacer}>
              <h2 className={s.form__desc}>
                Write your email to sign up or log in
              </h2>
            </div>
            <div className={s.spacer__email}>
              <label htmlFor={nameId.current} className={s} required></label>
              <input
                ref={inputRef}
                id={nameId.current}
                type="text"
                name="name"
                required
                className={s.input}
                placeholder="Name"
                value={formValues.name}
                minLength="5"
                //defaultValue="Adam"
                onChange={handleInputValueChange}></input>
            </div>
            <div className={s.spacer__email}>
              <label htmlFor={emailId.current} className={s} required></label>
              <input
                id={emailId.current}
                type="text"
                name="email"
                required
                className={s.input}
                placeholder="Email"
                value={formValues.email}
                //defaultValue="adam@mail.com"
                onChange={handleInputValueChange}></input>
            </div>
            <div className={s.spacer__password}>
              <label
                htmlFor={passwordId.current}
                className={s}
                required></label>
              <input
                id={passwordId.current}
                type="password"
                name="password"
                required
                className={s.input}
                placeholder="Password"
                value={formValues.password}
                minLength="4"
                //defaultValue="123456"
                onChange={handleInputValueChange}></input>
              <ButtonGo />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
