import "./ArticleCard.css";
import climateChange from "./assets/climateChange.jpg";
import dry from "./assets/dry.jpg";
import europe from "./assets/europe.jpg";
import france from "./assets/france.jpg";
import nuclear from "./assets/nuclear.jpg";
import socialNetwork from "./assets/socialNetwork.jpg";
import protest from "./assets/protest.jpg";
import defaultPic from "./assets/defaultPic.jpg";

export const ArticleCard = ({ article }) => {
  return (
    <div className="ArticleCard">
      <div className="ArticleCard_content">
        <img
          alt=""
          src={
            article.title.includes("Sécheresse") ||
            article.title.includes("sécheresses") ||
            article.title.includes("sécheresse")
              ? dry
              : article.title.includes("réchauffe") ||
                article.title.includes("réchauffement") ||
                article.title.includes("chaleurs") ||
                article.title.includes("dérègle")
              ? climateChange
              : article.title.includes("Europe")
              ? europe
              : article.title.includes("France")
              ? france
              : article.title.includes("Activistes") ||
                article.title.includes("écologiste") ||
                article.title.includes("Luttes")
              ? protest
              : article.title.includes("nucléaire")
              ? nuclear
              : article.title.includes("réseaux")
              ? socialNetwork
              : defaultPic
          }
        />
        <div className="ArticleCard_content_text">
          <h3 className="title">{`${article.title.slice(0, -25)}...`}</h3>
          <p className="description">{`${article.desc.slice(0, -25)}...`}</p>
        </div>
      </div>
    </div>
  );
};
