import styles from "./userInfo.module.css";
import { LogoutSvg } from "../../icons/logout";
import { ChallengeSvg } from "../../icons/challenge";
import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../../redux/auth/selectors";
import { logoutUser } from "../../redux/auth/actions";
import { useNavigate } from "react-router";
import { USER_NAME, JWT_TOKEN_STORAGE_KEY } from "../../utils/constans";
import { toDoReducer } from "../../features/toDoTasks/ToDoSlice";
export const UserInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(toDoReducer.actions.cleanCards())
    localStorage.removeItem(JWT_TOKEN_STORAGE_KEY);
    navigate("/login");
  };

  const userName = useSelector(getUserName) || localStorage.getItem(USER_NAME);
  const firstLetterName = userName.slice(0, 1);
  return (
    <div className={styles.username__wrapper}>
      <div className={styles.username__questlog}>
        <div className={styles.circle__letter}>{firstLetterName}</div>
        <div className={styles.username__info}>{userName} Quest Log</div>
      </div>
      <button className={styles.challenge__button}>
        <ChallengeSvg
          className={styles.challenge__icon}
          width={14}
          height={14}
        />
      </button>
      <button className={styles.logout__button} onClick={handleLogout}>
        <LogoutSvg className={styles.logout__icon} width={21} height={16} />
      </button>
    </div>
  );
};
