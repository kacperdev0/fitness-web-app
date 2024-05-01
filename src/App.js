import React, { useState } from "react";
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
    <div className="container">
      <div className="bg" id="navigation-panel">
        <Divider />
          <List>
            <ListItem key="Home" disablePadding  onClick={() => handleViewChange("home")}>
              <ListItemButton>
                <ListItemIcon>
                    <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>

            <ListItem key="Calculators" disablePadding onClick={() => handleViewChange("calculators")}>
              <ListItemButton>
                <ListItemIcon>
                    <CalculateIcon/>
                </ListItemIcon>
                <ListItemText primary="Calculators" />
              </ListItemButton>
            </ListItem>

            <ListItem key="Aricles" disablePadding onClick={() => handleViewChange("articles")}>
              <ListItemButton>
                <ListItemIcon>
                    <ArticleIcon/>
                </ListItemIcon>
                <ListItemText primary="Articles" />
              </ListItemButton>
            </ListItem>
          </List>
        <Divider /> 
      </div>
      {currentView === "home" && <BodyView/>}
      {currentView === "calculators" && <CalculatorsView/>}
      {currentView === "articles" && <ArticlesView/>}
    </div>
 );
}

export default App;