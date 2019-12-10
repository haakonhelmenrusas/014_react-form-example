import React from "react";

import styles from "./Button.module.css";

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  type?: ButtonType;
  label: string;
  primary?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => any;
}

const Button: React.FC<ButtonProps> = (props): JSX.Element => {
  const { label, onClick, primary, type } = props;

  if (primary) {
    return (
      <button type={type} onClick={e => onClick(e)} className={styles.primary}>
        {label}
      </button>
    );
  }

  return (
    <button type={type} onClick={e => onClick(e)} className={styles.button}>
      {label}
    </button>
  );
};

export default Button;
