import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuote } from "../features/quote/quoteSlice";
import styles from "./Quote.module.css";

const Quote = () => {
  const dispatch = useDispatch();
  const { text, author, status, error } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  return (
    <div className={styles.quoteContainer}>
      {status === "loading" && <p>Загрузка...</p>}
      {status === "failed" && <p className={styles.error}>Ошибка: {error}</p>}
      {status === "succeeded" && (
        <>
          <p className={styles.quote}>"{text}"</p>
          <p className={styles.author}>— {author}</p>
          <button className={styles.button} onClick={() => dispatch(fetchQuote())}>
            Новая цитата
          </button>
        </>
      )}
    </div>
  );
};

export default Quote;
