import React from "react";
import classes from "./Popup.css";
import PlayerDetail from "./PlayerDetail";

function Popup(props) {
    return (
        <div className="popup">
            <div className="popup-inner">
                {props.children}
            </div>
        </div>
    );
}

export default Popup;