import CompB from "./CompB"

function CompA(){

    return <div>
          <h1>Component A</h1>
          <hr />
          <CompB props1={"GM"} props2={"GN"}  />         
    </div>
}
export default CompA 