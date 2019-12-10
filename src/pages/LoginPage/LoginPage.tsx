import React from "react";
import styles from "./LoginPage.module.css";
import Form from "../../components/form/Form";

const LoginPage: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Form />
    </div>
  );
};

export default LoginPage;
