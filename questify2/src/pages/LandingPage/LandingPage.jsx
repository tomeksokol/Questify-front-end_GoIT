import React from 'react';
import Login from '../../components/Login/Login';
import styles from './LandingPage.module.css';

const LandingPage = () => {

  return (
    <main className={styles.body}>
      <Login />
    </main>
  );
};

export default LandingPage;