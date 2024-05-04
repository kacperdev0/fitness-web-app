import React, { useState, useEffect } from "react";
import './CSS/articlesView.css';
import SingleArticleView from "./singleArticleView";
import { findLastArticlesInfo } from "./api/article/ArticleRequests";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Loading from "./Loading";

function ArticlesView() {
   const [articles, setArticles] = useState([]);
   const [selectedArticle, setSelectedArticle] = useState(null);
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
 const handleClick = (article) => {
   let articleHTML = "<h1>Article</h1><div>This is <b>article</b> template</div>";
   setSelectedArticle(articleHTML);
 }

 return (
    <div id="right-panel" style={{ padding: "2%", width: "91%", color: "white"}}>
        {selectedArticle ? (
         <div>
           <div style={{width: "100%", textAlign: "left"}}>
            <i className="fa fa-arrow-circle-o-left fa-3x change-color-on-hover" onClick={() => {setSelectedArticle(null)}}></i>
          </div> 
          <SingleArticleView articleHTML={selectedArticle} />
        </div>
         ) : (
        <div className="arcticle-container">
         {articles.map((article, index) => (
            <Card className="article-item">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                  {article.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              <div style={{ display: 'flex', alignItems: 'center' }}>
               <Avatar 
               alt="Avatar" 
               src="https://th.bing.com/th/id/R.a0bd55bec80e37f8bbe0085d9535ffc7?rik=SgaLxefEhFF9Rw&pid=ImgRaw&r=0" 
               style={{ marginRight: '13px' }} 
               />
               <Typography variant="body2" color="text.secondary" >
               {article.author}
               </Typography>
            </div>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small" onClick={() => handleClick(article)}>Learn More</Button>
            </CardActions>
          </Card>
            // <div key={index} className="article-item" onClick={() => handleClick(article)}>
            //    <div className="preview" style={{height: "200px"}}>
            //       <div><h3>{article.title}</h3></div>
            //    </div>
            //    <div class="author-bar">
            //       <div style={{width: "70%"}}>
            //          {article.author}
            //       </div>
            //       <div style={{width: "27%", paddingRight: "3%", textAlign: "right"}}>
            //          {article.publishDate}
            //       </div>
            //    </div>
            // </div>
         ))
        }</div>
         )}
    </div>
 );

}

export default ArticlesView;