import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Item } from "../Item/Item.js";
import { getFirestore } from "../../firebase/index.js";
import { Row } from "react-bootstrap";
import "./ItemList.css"
import React  from 'react';


function ItemList (){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const db = getFirestore() 
        const productsCollection = db.collection("items");
        const getDataFromFirestore = async ()=>{
            const response = await productsCollection.get();
            setData(response.docs.map((doc)=> ({...doc.data(), id: doc.id})));
        }
        getDataFromFirestore();
    }, []);
    return(
        <Row>
            {isLoading? setIsLoading && <p className="text-center">Cargando...</p> : (data.slice(0, 6).map((product)=>(
                <div className="col-sm-2 col-6" key={product.id}>
                    <Item key={product.id} product={product} id={product.id}/>
                </div>
            )))}
        </Row>
    )
}
export default ItemList;