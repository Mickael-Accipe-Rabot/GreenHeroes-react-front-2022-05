import axios from "axios";
import "./ArticleList.css";
import { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/news")
      .then((res) => res.data)
      .then((data) => setArticles(data))
      .catch((err) => console.error(err));
  }, []);

  const [climatFilter, setClimatFilter] = useState(false);
  const [politiqueFilter, setPolitiqueFilter] = useState(false);
  const [socialFilter, setSocialFilter] = useState(false);
  const [nucleaireFilter, setNucleaireFilter] = useState(false);

  const handleClimatFilter = () => setClimatFilter(!climatFilter);
  const handlePolitiqueFilter = () => setPolitiqueFilter(!politiqueFilter);
  const handleSocialFilter = () => setSocialFilter(!socialFilter);
  const handleNucleaireFilter = () => setNucleaireFilter(!nucleaireFilter);

  return (
    <div className="ArticleList">
      <div className="ArticleList_category">
        <button className="ArticleList_button" onClick={handleClimatFilter}>
          Climat
        </button>
        <button className="ArticleList_button" onClick={handlePolitiqueFilter}>
          Politique
        </button>
        <button className="ArticleList_button" onClick={handleSocialFilter}>
          Social
        </button>
        <button className="ArticleList_button" onClick={handleNucleaireFilter}>
          Nucléaire
        </button>
      </div>

      {articles && climatFilter
        ? articles
            .filter(
              (article) =>
                article.title.includes("Sécheresse") ||
                article.title.includes("sécheresses") ||
                article.title.includes("sécheresse")
            )
            .map((article) => {
              return (
                <div key={article.title}>
                  {<ArticleCard article={article} />}
                </div>
              );
            })
        : politiqueFilter
        ? articles
            .filter(
              (article) =>
                article.title.includes("Jour") || article.title.includes("rue")
            )
            .map((article) => {
              return (
                <div key={article.title}>
                  {<ArticleCard article={article} />}
                </div>
              );
            })
        : socialFilter
        ? articles
            .filter(
              (article) =>
                article.title.includes("Activistes") ||
                article.title.includes("écologiste") ||
                article.title.includes("Luttes") ||
                article.title.includes("réseaux")
            )
            .map((article) => {
              return (
                <div key={article.title}>
                  {<ArticleCard article={article} />}
                </div>
              );
            })
        : nucleaireFilter
        ? articles
            .filter((article) => article.title.includes("nucléaire"))
            .map((article) => {
              return (
                <div key={article.title}>
                  {<ArticleCard article={article} />}
                </div>
              );
            })
        : articles.map((article) => {
            return (
              <div key={article.title}>{<ArticleCard article={article} />}</div>
            );
          })}
    </div>
  );
};
