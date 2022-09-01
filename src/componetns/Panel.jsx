import React, { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

import './Panel.css'
import UserFromErrorMsg from "./UserFromErrorMsg";

const DEFALUT_USERLIST = [
    {"key": Math.random().toString(), "uname": "Kevin", "old": 22},
    {"key": Math.random().toString(), "uname": "Thomas", "old": 8},
    {"key": Math.random().toString(), "uname": "Devil", "old": 1},
]

const Panel = (params) => {

    const [userList, setUserList] = useState(DEFALUT_USERLIST);
    const [isValidUserInput, setIsValidUserInput] = useState(false);
    const [errorDescription, setErrorDescription] = useState("");

    const addUserHandler = (newUser) => {
        setUserList((prevUserList) => {
            return [newUser, ...prevUserList];
        })
    }

    const errorHandler = (error) => {
        if(error === ""){
            setIsValidUserInput(false);
        }else {
            setIsValidUserInput(true);
            setErrorDescription(error);
        }
    }

    const confirmErrorHandler = () => {
        setIsValidUserInput(false);
    }

    return (
        <div className='panel'>
            <UserForm addUser={addUserHandler} error={errorHandler}/>
            <UserList userList={userList}/>
            {isValidUserInput && <UserFromErrorMsg
                errorDescription={errorDescription}
                confirmError={confirmErrorHandler}
            />}
        </div>
    )
}

export default Panel;