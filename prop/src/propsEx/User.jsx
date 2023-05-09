import React from "react";
import Employee from "./Employee";
const User =()=>{
    let user = {

       name: "Priyanka",
        loc: "Wayanad"
    }

    return(

    <div>
       <h2>User Component</h2>
       <hr />
       <Employee emp={user} msg={"Good Knight"} />

    </div>
        )
}


export default User

  