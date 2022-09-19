import React from "react";
import styles from "./mainPage.module.css";
import { LogoutSvg } from "../../icons/logout";
import { ChallengeSvg } from "../../icons/challenge";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
export const MainPage = () => {
   const [open, setOpen]  = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.homepage}>
     
        <div className={styles.navigation}>
          <div className={styles.logo__wrapper}>
            <a href="/#">
              <span className={styles.logo}>Questify</span>
            </a>
          </div>

        <div className={styles.username__wrapper}>
          <div className={styles.username__questlog}>
            <div className={styles.circle__letter}>
              U{/* tutaj będzie pierwsza litera imienia użytkowanika */}
            </div>
            <div className={styles.username__info}>Username Quest Log</div>
</div>
            <button className={styles.challenge__button}>
              <ChallengeSvg
                className={styles.challenge__icon}
                width={14}
                height={14}
              />
            </button>
            <button className={styles.logout__button}>
              <LogoutSvg
                className={styles.logout__icon}
                width={21}
                height={16}
              />
            </button>
          </div>
        </div>

      <div className={styles.cards__wrapper}>
        <p>Today</p>
      </div>
      <div className={styles.cards__wrapper}>
        <p>Tomorrow</p>
      </div>

      <button
        type="button"
        className={styles.plus_btn}
        onClick={
          handleToggle
          // po kliknięciu dodanie nowej karty
        }
      >
        +
      </button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      ></Backdrop>
    </div>
  );
};
