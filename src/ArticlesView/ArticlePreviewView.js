import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ShareButtonView from './ShareButtonView';

function ArticlePreviewView({ article }) {
    return (
        <Card className="article-item">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                  {article.title}
              </Typography>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'grid', gridTemplate: '1fr 1fr / 1fr' }}>
                  <Typography variant="body2" color="text.secondary" style={{textAlign: 'left'}}>
                  {article.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" >
                    {"Publish date: " + new Date(article.publishDate).toLocaleDateString()}
                  </Typography>
                </div>
              </div>
            </CardContent>
            <CardActions>
              <ShareButtonView articleId={article.id}></ShareButtonView>
              <Button component={Link} to={`${article.id}`} size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}


export default ArticlePreviewView;