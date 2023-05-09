import React from "react";


 const Employee =(props)=>{
return(
    <div>
       <h2>Employee Component</h2>
       <pre>{JSON.stringify(props)}</pre>
       <h3>Employee Name: {props.emp.name}</h3>
    </div>
   )
}

export default Employee