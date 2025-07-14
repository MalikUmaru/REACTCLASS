function Display (props){
    return(
        <div className="container mt-4">
       <div className="col">
        <div className="row-12 row-sm-6 row-md-3 mb-3">
            <h1 className="text-primary fs-5">Little Lemon Restuarant</h1>
        </div>
        <div className="row-12 row-sm-6 row-md-3 mb-3">
            <h1 className="text-primary fs-5">Established in the year: {props.year}</h1>
        </div>
        </div>         
        </div>
    )
}

export default Display;