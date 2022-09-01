import React from "react";

import './UserFromErrorMsg.css'
import Card from "../UI/Card";
import BlurScreen from "../UI/BlurScreen";
import Button from "../UI/Button";

const UserFromErrorMsg = (props) => {

    const confirmErrorHandler = () => {
        props.confirmError();
    }

    return(
        <BlurScreen>
            <Card className='errorCard'>
                    <label className='errorCard_header'>Invalid Input</label>
                    <p className='errorCard_description'>{props.errorDescription}</p>
                    <Button label='Okey' clickHandler={confirmErrorHandler}/>
            </Card>
        </BlurScreen>
    )
}

export default UserFromErrorMsg;