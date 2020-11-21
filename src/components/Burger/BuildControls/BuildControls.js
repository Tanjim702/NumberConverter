import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl";
const controls = [
    { label: "Salad", type: "salad" },
    { label: "bacon", type: "bacon" },
    { label: "cheese", type: "cheese" },
    { label: "meat", type: "meat" },
];
function BuildControls(props) {
    return (
        <div className={classes.BuildControls}>
            <p>
                Current Price: <strong>{props.totalPrice.toFixed(2)}</strong>
            </p>
            {controls.map((ctrl) => {
                return (
                    <BuildControl
                        remove={() => props.remove(ctrl.type)}
                        added={() => props.add(ctrl.type)}
                        type={ctrl.type}
                        more={props.add}
                        key={ctrl.label}
                        label={ctrl.label}
                    />
                );
            })}
            <button
                onClick={props.purchasehandler}
                disabled={!props.purchasable}
                className={classes.OrderButton}>ORDER NOW</button>
        </div>
    );
}

export default BuildControls;
