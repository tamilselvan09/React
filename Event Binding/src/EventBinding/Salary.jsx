import React, { Component } from 'react'

class Salary extends Component {
    state = {
        emp_Sal: 25000
    }
    updateSalary = (amount) => {
        this.setState({ emp_Sal: this.state.emp_Sal + amount })
    }
    render() {
        return (
            <div>
                <h3>Employee Salary:{this.state.emp_Sal}</h3>
                <button onMouseOut={this.updateSalary.bind(this, 50000)}>Hike 50K</button>
                <button onMouseOut={this.updateSalary.bind(this, 150000)}>Hike 150k</button>
                <button onMouseOut={this.updateSalary.bind(this, 0)}>Hike 0</button>
            </div>
        )
    }
}

export default Salary