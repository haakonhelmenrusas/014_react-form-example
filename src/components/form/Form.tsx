import React, { useState } from "react";
import styles from "./Form.module.css";
import Button from "../button/Button";
import Input from "../input/Input";

const Form: React.FC = (): JSX.Element => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (event: any) => {
    event.preventDefault();
    console.log(name, password)
  };

  return (
    <form onSubmit={submitForm} className={styles.component}>
      <h1 className={styles.heading}>Login form</h1>
      <Input
        type="text"
        id="name"
        labelName="Name"
        onChange={name => setName(name.currentTarget.value)}
        value={name}
      />
      <Input
        type="password"
        id="password"
        labelName="Password"
        onChange={password => setPassword(password.currentTarget.value)}
        value={password}
        minLength={8}
      />
      <Button
        type="submit"
        buttonStyle="primary"
        label="Login"
      />
    </form>
  );
};

export default Form;
