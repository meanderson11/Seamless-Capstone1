import React from "react";
import "./ControlButtons.css";
import {Link} from 'react-router-dom';
  
export default function ControlButtons(props) {
  const StartButton = (
    <div className="btn btn-one btn-start"
         onClick={props.handleStart}>
      Clock In
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <Link to="/dashboard">
      <div className="btn btn-two" 
           onClick={props.handleReset}>
        Clock Out
      </div>
      </Link>
      <div className="btn btn-one" 
           onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Break"}
      </div>
    </div>
  );
  
  return (
    <div className="Control-Buttons">
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </div>
  );
}