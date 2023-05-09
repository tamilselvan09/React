function CompB(props) {

    return <div>
        <h1>Component B</h1>
        <pre>{JSON.stringify(props)}</pre>
        <h2>Prodct Name:{props.name}</h2>
        <h3>Wish Message:{props.msg}</h3>
    </div>
}
export default CompB