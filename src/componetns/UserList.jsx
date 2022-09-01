import React from "react";
import Card from "../UI/Card";
import User from "./User";


const UserList = (params) => {
    return (
        <Card>
            {params.userList.map((user) => (
                <User
                    key={user.key}
                    uname={user.uname}
                    old={user.old}
                ></User>
            ))}
        </Card>
    )
}

export default UserList;