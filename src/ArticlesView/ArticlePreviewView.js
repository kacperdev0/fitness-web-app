import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
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
                <Avatar 
                alt="Avatar" 
                src="https://th.bing.com/th/id/R.a0bd55bec80e37f8bbe0085d9535ffc7?rik=SgaLxefEhFF9Rw&pid=ImgRaw&r=0" 
                style={{ marginRight: '13px' }} 
                />
                <div style={{ display: 'grid', gridTemplate: '1fr 1fr / 1fr' }}>
                  <Typography variant="body2" color="text.secondary" >
                  {article.author}
                  </Typography><br></br>
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