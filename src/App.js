import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Routes from react-router-dom
import BodyView from "./BodyView";
import CalculatorsView from "./CalculatorsView";
import ArticlesView from "./ArticlesView";
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

function App() {
 const [currentView, setCurrentView] = useState("home");

 const handleViewChange = (view) => {
    setCurrentView(view);
 };

 return (
    <Router>
      <div className="container">
        <div className="bg" id="navigation-panel">
          <Divider />
            <List>
              <ListItem key="Home" disablePadding>
                <ListItemButton component={Link} to="/" onClick={() => handleViewChange("home")}>
                  <ListItemIcon>
                      <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>

              <ListItem key="Calculators" disablePadding>
                <ListItemButton component={Link} to="/calculators" onClick={() => handleViewChange("calculators")}>
                  <ListItemIcon>
                      <CalculateIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Calculators" />
                </ListItemButton>
              </ListItem>

              <ListItem key="Articles" disablePadding>
                <ListItemButton component={Link} to="/articles" onClick={() => handleViewChange("articles")}>
                  <ListItemIcon>
                      <ArticleIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Articles" />
                </ListItemButton>
              </ListItem>
            </List>
          <Divider /> 
        </div>
        <Routes>
          <Route path="/" element={<BodyView />} />
          <Route path="/calculators" element={<CalculatorsView />} />
          <Route path="/articles" element={<ArticlesView />} />
        </Routes>
      </div>
    </Router>
 );
}

export default App;
