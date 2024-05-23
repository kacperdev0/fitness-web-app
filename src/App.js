import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BodyView from "./BodyView";
import CalculatorsView from "./CalculatorsView";
import ArticlesView from "./ArticlesView/ArticlesView";
import "./CSS/App.css"
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import CalculateIcon from '@mui/icons-material/Calculate';
import ArticleIcon from '@mui/icons-material/Article';
import ArticleView from "./ArticlesView/ArticleView";
import NotFoundView from "./NotFoundView/NotFoundView";
import { Grid } from '@mui/material';

function App() {
  return (
    <Router>
      <div className="container">
        <Grid container>
          <Grid item xs={12} sm={1}>
            <div className="bg" id="navigation-panel">
              <Divider />
              <List>
                <ListItem key="Home" disablePadding>
                  <ListItemButton component={Link} to="/">
                    <ListItemIcon>
                      <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>

                <ListItem key="Calculators" disablePadding>
                  <ListItemButton component={Link} to="/calculators">
                    <ListItemIcon>
                      <CalculateIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Calculators" />
                  </ListItemButton>
                </ListItem>

                <ListItem key="Articles" disablePadding>
                  <ListItemButton component={Link} to="/articles">
                    <ListItemIcon>
                      <ArticleIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Articles" />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider /> 
            </div>
          </Grid>
          <Grid item xs={12} sm={11}>
            <Routes>
              <Route path="/" element={<BodyView />} />
              <Route path="/calculators" element={<CalculatorsView />} />
              <Route path="/articles" element={<ArticlesView />} />
              <Route path="/articles/:id" element={<ArticleView />} />
              <Route path="/body-part/:bodyPartName" element={<BodyView />} />
              <Route path="*" element={<NotFoundView />} />
            </Routes>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
