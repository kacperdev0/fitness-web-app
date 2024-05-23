import React, { useState, useEffect } from "react";
import '../CSS/articlesView.css';
import { findLastArticlesInfo } from "../api/article/ArticleRequests";
import Loading from "../Loading";
import ArticlePreviewView from "./ArticlePreviewView";

function ArticlesView() {
   const [articles, setArticles] = useState([]);
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      findLastArticlesInfo()
         .then(data => {
          setArticles(data)
          setLoading(false)
        })
         .catch(err => {
          console.error(err)
          setLoading(false)
        });
   }, []);

   if (loading) {
    return <Loading/>
   }

 return (
    <div id="right-panel" style={{ height: "92%", padding: "2%", width: "96%", color: "white"}}>
        <div className="arcticle-container">
          {articles.map((article) => (
              <ArticlePreviewView 
                key={`articlepreview-${article.id}`}
                article={article}/>
          ))
          }
        </div>
    </div>
 );

}

export default ArticlesView;