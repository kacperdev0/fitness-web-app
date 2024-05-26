import React from "react";
import ReactLoading from 'react-loading';

function Loading() {
  return (
    <div id="right-panel" style={{ padding: "2%", width: "96%", height: "92vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <ReactLoading type={"cubes"} color={"#1e67c7"} height={'10%'} width={'10%'} />
    </div>
  );
}

export default Loading;
