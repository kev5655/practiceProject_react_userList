import React, { useState } from "react";

import './UserForm.css';
import Card from "../UI/Card";
import Button from "../UI/Button";

const UserForm = (props) => {

    const [name, setName] = useState('');
    const [old, setOld] = useState('');

    const unameChangeHandler = (name) =>{
        setName(name.target.value);
    }

    const  oldChangeHandler = (old) => {
        setOld(old.target.value);
    }

    const createUser = () => {
        if(isNoInput(name) || isNoInput(old)){
            setName("");
            setOld("");
            return;
        }else if(isNotANumber(old)){
            setName("");
            setOld("");
            return;
        }
        const newUser = {
            "key": Math.random().toString(),
            "uname": name,
            "old": old
        }
        props.error("");
        props.addUser(newUser);
        setName("");
        setOld("");
    }

    const isNoInput = (value) => {
        if(value.trim() === ""){
            props.error("Please enter a Name or Age")
            return true;
        }
    }

    const isNotANumber = (value) => {
        const parsedOld = parseInt(old);
        if(isNaN(parsedOld)){
            props.error("Please enter a Valid Age")
            return true;
        }else if(parsedOld < 0){
            props.error("Please enter a Age over 0")
            return true;
        }
    }

    return (
        <Card>
            <label>Username</label>
            <input type='text' value={name} onChange={unameChangeHandler}/>
            <label>Age (Years)</label>
            <input type='text' value={old} onChange={oldChangeHandler}/>
            <Button
                clickHandler={createUser}
                label='Add User'>
            </Button>
        </Card>
    )

}

export default UserForm;