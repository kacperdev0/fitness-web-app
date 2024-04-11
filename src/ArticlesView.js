import React, { useState } from "react";
import './articlesView.css';

function ArticlesView() {

 const articles = [
   {id: 1, title: "Jak kłuć dupe?", description: "Strzykawką debilu", author: "autor"},
   {id: 2, title: "Jak kłuć dupe?", description: "Strzykawką debilu", author: "autor"},
   {id: 3, title: "Jak kłuć dupe?", description: "Strzykawką debilu", author: "autor"}
 ]


 return (
    <div id="right-panel" style={{ padding: "2%", width: "91%", color: "white"}}>
        <h1>Articles</h1>
        <div className="arcticle-constainer">
         {articles.map((article, index) => (
            <div key={index} className="article-item">
               <div style={{height: "70%"}}>
                  <div><h3>{article.title}</h3></div>
                  <div>{article.description}</div>
               </div>
               <div class="author-bar">{article.author}</div>
            </div>
         ))
        }</div>
    </div>
 );

}

export default ArticlesView;