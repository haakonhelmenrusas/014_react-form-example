import React from "react";
import styles from "./Input.module.css";

type InputType = "text" | "number" | "password";

interface InputProps {
  isRequired?: boolean;
  type?: InputType;
  /**
   * The placeholder attribute specifies a short hint that describes the expected value of a text field (e.g. a sample value or a short description of the expected format).
   * The short hint is displayed in the text field before the user enters a value.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Labels_and_placeholders)
   */
  placeholder?: string;
  name?: string;
  labelName: string;
  id: string;
  value?: string;
  minLength?: number;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
}

/**
 * Input component. The labelName and id is required props.
 * @param props - Input attributes like type, id etc.
 */
const Input: React.FC<InputProps> = (props): JSX.Element => {
  const { isRequired, type, name, labelName, id, value, ...restProps } = props;
  return (
    <div className={styles.input}>
      <label className={styles.label} htmlFor={id}>
        {labelName}
      </label>
      <input
        className={styles.field}
        id={id}
        name={name}
        required={isRequired}
        type={type}
        value={value}
        {...restProps}
      />
    </div>
  );
};

export default Input;
