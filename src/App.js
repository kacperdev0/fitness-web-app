import React, { useState } from "react";
import BodyView from "./BodyView";
import CalculatorsView from "./CalculatorsView";
import ArticlesView from "./ArticlesView";
import "./CSS/App.css"

function App() {
 const [currentView, setCurrentView] = useState("home");

 const handleViewChange = (view) => {
    setCurrentView(view);
 };

 return (
    <div className="container">
      <div className="bg" id="navigation-panel">
        <div className="full-nav-element"><i className="fa fa-home fa-3x nav-element" id="nav-home" onClick={() => handleViewChange("home")}></i><br/><span className="icon-text">Home</span></div><br/>
        <div className="full-nav-element"><i className="fa fa-calculator fa-3x nav-element" id="nav-calculators" onClick={() => handleViewChange("calculators")}></i><br/><span className="icon-text">Calculators</span></div><br/>
        <div className="full-nav-element"><i className="fa fa-bookmark-o fa-3x nav-element" id="nav-articles" onClick={() => handleViewChange("articles")}></i><br/><span className="icon-text">Articles</span></div>
      </div>
      {currentView === "home" && <BodyView/>}
      {currentView === "calculators" && <CalculatorsView/>}
      {currentView === "articles" && <ArticlesView/>}
    </div>
 );
}

export default App;