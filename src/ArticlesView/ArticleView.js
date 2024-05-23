import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { findArticleById } from "../api/article/ArticleRequests";
import Loading from '../Loading';
import { Box, Container, Typography } from '@mui/material';
import { Article } from "../api/article/Article";
function ArticleView() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    findArticleById(id)
      .then(data => {
        setArticle(data);
        setError(false);
      })
      .catch(err => {
        console.error(err)
        const newArticle = new Article();
        newArticle.title = "Article Not Found!";
        newArticle.content = "The article you are looking for does not exist or an error occurred while fetching it."
        setArticle(newArticle)
        setError(true);
      });
  }, [id]);


  if (!article)
    return <Loading/>;
  return (
    <Container maxWidth="md">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          px={2}
          mt={4}
        >
          <Typography variant="h2" component="h1" gutterBottom style={{color: error ? "red" : ""}}>
            {article.title}
          </Typography>
          <Typography variant="body1">
            {article.content}
          </Typography>
        </Box>
    </Container>
  );
}

export default ArticleView;
