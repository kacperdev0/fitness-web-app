import React from "react";
import "./CSS/singleArticleView.css";

function SingleArticleView({ articleHTML }) {
  console.log(articleHTML);

  return (
    <div id="right-panel" style={{ padding: "2%", width: "91%", color: "white" }}>
      <div dangerouslySetInnerHTML={{ __html: articleHTML }} />
    </div>
  );
}

export default SingleArticleView;
