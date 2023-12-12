import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ArticlesList from "./components/ArticlesList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
      </Routes>
    </>
  );
}

export default App;
