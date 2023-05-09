
import Navbar from './Navbar/Navbar';
import User from './propsEx/User'

let  App =()=>  {
  return <div>
    <Navbar />
      <h1>App Component</h1>
     <hr />
     <button className= "btn btn-success"></button>
<hr />
   <User />
    </div>
}

export default App