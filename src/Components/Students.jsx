function Students (props){
   return(
        <div className="container mt-4">
       <div className="col">
       
        <div className="row-12 row-sm-6 row-md-3 mb-3">
            <h1 className="text-primary fs-5">Name: {props.name}</h1>
        </div>
         <div className="row-12 row-sm-6 row-md-3 mb-3">
            <h1 className="text-primary fs-5">Age: {props.age}</h1>
        </div>
         <div className="row-12 row-sm-6 row-md-3 mb-3">
            <h1 className="text-primary fs-5">Level: {props.level}</h1>
        </div>
        </div>         
        </div>
    )
}

export default Students;