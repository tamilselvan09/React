import React, {Component} from "react";
//single button one handler
class Message extends Component {
    state ={
        msg :"Hello"
    }
    gmHndler =()=>{
        this.setState({msg: "Good Morning"})
    }
    gaHndler =()=>{
        this.setState({msg: "Good Afternoon"})
    }
    geHndler =()=>{
        this.setState({msg: "Good Evening"})
    }
    gnHndler =()=>{
        this.setState({msg: "Good Night"})
    }

    render (){
        return(
            <div>
                <h1>Message Value:{this.state.msg} </h1>
                <button onMouseOver={this.gmHndler}>GM</button>
                <button onMouseOver={this.gaHndler}>GA</button>
                <button onMouseOver={this.geHndler}>GE</button>
                <button onMouseOver={this.gnHndler}>GN</button>
            </div>
        )
    }
}
export default Message