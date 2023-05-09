import React, { Component } from 'react'
class Wish extends Component {
    state = {
        msg: "Vaanakam"
    }
    gmHaldler = () => {
        this.setState({ msg: "Kaalai Vaanakam" })
    }
    gaHaldler = () => {
        this.setState({ msg: "Mathiya Vaanakam" })
    }
    geHaldler = () => {
        this.setState({ msg: "Maalai Vaanakam" })
    }
    gnHaldler = () => {
        this.setState({ msg: "Iravu Vaanakam" })
    }
    render() {
        return (
            <div>
                <h2>Wish Message:{this.state.msg}</h2>
                <button onClick={this.gmHaldler}>Morning</button>
                <button onClick={this.gaHaldler} >Afternoon</button>
                <button onClick={this.geHaldler} >Evening</button>
                <button onClick={this.gnHaldler} >Night</button>
            </div >
        )
    }
}

export default Wish