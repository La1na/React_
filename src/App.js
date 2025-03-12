import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ArticlesList from "./components/ArticlesList";
import Article from "./components/Article";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </Router>
  );
};

export default App;
