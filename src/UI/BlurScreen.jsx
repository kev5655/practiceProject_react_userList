import React from "react";

import './BlurScreen.css'


const BlurScreen = (props) => {
    let style = 'blurScreen ';
    if(props.className !== undefined){
        style += props.className;
    }

    return <div className={style}>{props.children}</div>
}

export default BlurScreen;