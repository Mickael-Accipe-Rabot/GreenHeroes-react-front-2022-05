import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { ArticleList } from "../../components/scraping/ArticleList";
import "./informer.css";

export const Informer = () => {
  return (
    <div>
      <Navbar />
      <ArticleList />
    </div>
  );
};
