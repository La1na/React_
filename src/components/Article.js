import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import styles from "./Article.module.css";

const articles = {
  1: "Содержание статьи 1...",
  2: "Содержание статьи 2...",
};

const Article = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.articleContainer}>
      <h1 className={styles.title}>Статья {id}</h1>
      <p className={styles.content}>{articles[id] || "Статья не найдена"}</p>
      <p className={styles.path}>Текущий путь: {location.pathname}</p>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
};

export default Article;
