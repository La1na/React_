import React from "react";
import { Link } from "react-router-dom";

const articles = [
  { id: 1, title: "Статья 1" },
  { id: 2, title: "Статья 2" },
];

const ArticlesList = () => {
  return (
    <div>
      <h1>Список статей</h1>
      {articles.map((article) => (
        <p key={article.id}>
          <Link to={`/article/${article.id}`}>{article.title}</Link>
        </p>
      ))}
    </div>
  );
};

export default ArticlesList;
