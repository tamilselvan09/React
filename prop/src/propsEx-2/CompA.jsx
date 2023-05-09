import CompB from './CompB'
function CompA() {
    let product_Name = "Iphone 12 min"
    let price = 45000
    return <div>
        <h1>Component A</h1>
        <hr />
        <CompB name={product_Name} msg={"GM"} />
    </div>
}
export default CompA