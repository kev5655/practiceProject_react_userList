import React from "react";

import "./User.css";

const User = (params) => {
    return(
        <div className='user'>
            <p className='user_name'>{params.uname}</p>
            <p className='user_old'>{params.old} (Years Old)</p>
        </div>
    )
}

export default User;