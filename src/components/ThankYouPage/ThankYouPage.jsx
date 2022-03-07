import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";


const ThankYouPage =()=>{
    const { orderId } = useParams()
    const [order, setOrder] = useState({})

    useEffect(()=>{
        const db = getFirestore();
        db.collection("orders")
        .doc(orderId)
        .get()
        .then((res)=> setOrder({ id: res.id, ...res.data() }))
    }, [orderId])    

    return (
        <div className="card text-center my-5" style={{justifyContent:"center", marginLeft:"auto", marginRight:"auto", width:"80%"}}>
            <h3>Detalle de su compra:</h3>
                <h3 className="my-3 dataOperacion">Numero de compra: {order.id}</h3>
                <h3 className="my-3">Total ${order.total}</h3>
            <Link to="/"><button className="btn btn-primary mt-3 mb-4" >Volver a la tienda</button></Link>
        </div>
    )
}

export default ThankYouPage;