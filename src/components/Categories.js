import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase/index";
import { Item } from "./Item/Item";
import React from "react";
import { Container } from "react-bootstrap";
import "./Categories.css"

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
        return <p className="text-center" style={{fontSize:"20px", marginTop:"17%", marginBottom:"18%"}}>Cargando los productos...</p>
    }else{
        return(
            <Container style={{display:"flex", flexDirection:"column", minHeight:"70vh"}} className="categorias">
                <h1>{data.categoryID}</h1>
                <div className="row">
                    {data.map((product)=> 
                    <div className="col-sm-2 col-6">
                        <Item key={product.key} product={product}/>
                    </div>
                    )}
                </div>
            </Container>
            
        )
    }
    
}
export default Categories;