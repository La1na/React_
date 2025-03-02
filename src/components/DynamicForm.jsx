import React from "react";
import { useForm } from "react-hook-form";
import styles from "./DynamicForm.module.css";

const DynamicForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Форма отправлена:", data);
  };

  const firstFieldValue = watch("firstField", "");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="firstField">First field:</label>
        <input
          id="firstField"
          {...register("firstField", { required: true, minLength: 3 })}
          className={styles.input}
        />
        {errors.firstField && (
          <p className={styles.error}>Минимальная длина — 3 символа</p>
        )}
      </div>

      {firstFieldValue.length >= 3 && (
        <div className={styles.formGroup}>
          <label htmlFor="secondField">Second field:</label>
          <input
            id="secondField"
            {...register("secondField", { required: true })}
            className={styles.input}
          />
          {errors.secondField && (
            <p className={styles.error}>Это поле обязательно</p>
          )}
        </div>
      )}

      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
