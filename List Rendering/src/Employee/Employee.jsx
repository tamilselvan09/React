import React from "react";
class Employee extends React.Component{
    employee = [{id:1,name:"Vicky",sal:50000},
                {id:2,name:"Shanker",sal:60000},
                {id:3,name:"Siva",sal:70000},]

    render(){
        return <div>

         
           <table border={2}>
            
            <thead >
                <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Salary</th>
                </tr>
                </thead>
                <tbody >
                    {
                        this.employee.map(function(emp){
                            return <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.sal}</td>
                            </tr>
                        })
                    }
                </tbody>
           
           </table>

        </div>
    }
}
export default Employee