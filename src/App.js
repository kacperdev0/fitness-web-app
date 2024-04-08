import React, { useState } from "react";
import BodyView from "./BodyView";
import CalculatorsView from "./CalculatorsView";
import ArticlesView from "./ArticlesView";

function App() {
 const [currentView, setCurrentView] = useState("home");

 const handleViewChange = (view) => {
    setCurrentView(view);
 };

 return (
    <div className="container">
      <div className="green-bg" id="navigation-panel">
        <i className="fa fa-home fa-4x nav-element" id="nav-home" onClick={() => handleViewChange("home")}></i><br/>
        <i className="fa fa-calculator fa-4x nav-element" id="nav-calculators" onClick={() => handleViewChange("calculators")}></i><br/>
        <i className="fa fa-bookmark-o fa-4x nav-element" id="nav-articles" onClick={() => handleViewChange("articles")}></i><br/>
      </div>
      {currentView === "home" && <BodyView/>}
      {currentView === "calculators" && <CalculatorsView/>}
      {currentView === "articles" && <ArticlesView/>}
    </div>
 );
}

export default App;