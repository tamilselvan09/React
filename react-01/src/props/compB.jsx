import React from "react";

function compB(props){


    return <div>
        <h2>component B</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h4>property 1:{props.prop1}</h4>
        <h4>property 2:{props.prop2}</h4>
        
    </div>
}
  export default compB 

