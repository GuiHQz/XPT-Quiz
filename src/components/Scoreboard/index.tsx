import { useState } from "react";
import "./index.scss";

export const Scoreboard = () => {
  const [pOneScore, setPOneScore] = useState("10");
  const [pTwoScore, setPTwoScore] = useState("20");

  return (
    <div className="scoreboard">
      <div className="player-one">
        <span>Player 1</span>
      </div>
      <div className="scores">
        <span className="score-point p1">{pOneScore}</span>
        <span className="score-point p2">{pTwoScore}</span>
      </div>
      <div className="player-two">
        <span>Player 2</span>
      </div>
    </div>
  );
};
