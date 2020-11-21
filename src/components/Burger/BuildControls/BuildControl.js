import React from "react";
import classes from "./BuildControls.module.css";

function BuildControl({ added, type, label, remove }) {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{label}</div>
            <button className={classes.Less} onClick={remove}>
                Less
      </button>
            <button className={classes.More} onClick={added}>
                More
      </button>
        </div>
    );
}

export default BuildControl;
