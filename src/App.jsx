import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ArticlesList from "./components/ArticlesList";
import ArticleSection from "./components/ArticleSection";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/:topic/:article_id" element={<ArticleSection />} />
      </Routes>
    </>
  );
}

export default App;
