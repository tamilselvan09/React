import React, {Component} from "react"
import Counter from "./Counter/Counter"
import Message from "./Message/Message"
import Wish from "./Wish/Wish"
class App extends Component{
        
       render(){
         return (
           <div>
                <h1>App Component</h1>
                <Counter />
                <hr />
                <Message />
                <hr />
                <Wish />
           </div>
           
         )
       }


}
export default App