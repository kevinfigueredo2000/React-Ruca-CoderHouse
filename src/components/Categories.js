import "bootstrap/dist/css/bootstrap.css";
import React from "react"
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getFirestore } from "../firebase/index";
import { Item } from "./Item/Item";

const Categories=()=>{
    const [data, setData] =useState([]);
    const [isLoading, setIsLoading] =useState(false)
    const { categoryID } = useParams();
    
    useEffect(()=>{
        const db = getFirestore() 
        let productsCollection;
        if(categoryID){
           productsCollection = db.collection("items")
           .where("categoryID", "==", Number(categoryID))
        }else{
            productsCollection = db.collection("items")
        }
       
        const getDataFromFirestore = async ()=>{
            setIsLoading(true);
            try{
                const response = await productsCollection.get();
                setData(response.docs.map((doc)=> ({...doc.data(), id: doc.id})));
            }finally{
                setIsLoading(false)
            }
        }
        
        getDataFromFirestore();
    }, [categoryID]);
    if(isLoading){
        return (
        <p className="text-center" style={{fontSize:"20px", marginTop:"17%", marginBottom:"18%"}}>Cargando los productos...</p>
        )
    }else{
        return(
            <Container>
                <h1 className="text-center">Mates</h1>
                <Row>
                    {data.map((product)=> 
                    <div className="col-sm">
                        <Item key={product.key} product={product}/>
                    </div>
                    )}
                </Row>
            </Container>
        )
    }
    
}
export default Categories;