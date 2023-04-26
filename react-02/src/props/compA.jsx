import React from "react";
import compB from "./compB";

function compA(){
     
    let a= 100
    let b= 200
    return <div>

         <h1>component A</h1>
         <hr />
         <compB prop1={a} prop2={b}/>
    </div>
}


export default compA