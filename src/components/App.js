import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      <Header name="My Bloggy Blog" /> {/*  blog name */}
      <About 
        image="https://via.placeholder.com/215" 
        about="This is a personal blog where I share my thoughts." // blog description
      />
      <ArticleList articles={blogData} />
    </div>
  );
}

export default App;
