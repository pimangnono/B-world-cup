import React from "react";
import "../css/GameTitle.css";

const GameTitle = (prop) => {
  return (
    <div className="gameTitle">
      <h2>
        BOYS PLANET 확신의 아이돌상 월드컵 {prop.round} 강: {prop.sequence}/
        {prop.round / 2}
      </h2>
    </div>
  );
};

export default GameTitle;
