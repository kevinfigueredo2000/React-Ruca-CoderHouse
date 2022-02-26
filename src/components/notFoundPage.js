import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";
import React  from 'react';

const NotFoundPage =()=>{
    return(
    <div className="text-center mt-5">
        <h1>Error 404 página no encontrada</h1>
        <Link to="/"><button className="btn btn-primary mt-5">Volver a la Home</button></Link>
    </div>)
}
export default NotFoundPage;