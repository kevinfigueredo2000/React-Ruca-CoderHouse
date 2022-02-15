import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
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
           productsCollection = db.collection("productos")
           .where("categoryID", "==", Number(categoryID))
        }else{
            productsCollection = db.collection("productos")
        }
       
        const getDataFromFirestore = async ()=>{
            setIsLoading(true);
            try{
                const response = await productsCollection.get();
                if(response.empty) console.log("No hay productos");
                setData(response.docs.map((doc)=> ({...doc.data(), id: doc.id})));
            }finally{
                setIsLoading(false)
            }
        }
        
        getDataFromFirestore();
    }, [categoryID]);
    if(isLoading){
        return <p>Cargando los productos...</p>
    }else{
        return(
            <div className="row">
                {data.map((product)=> 
                <div className="col-3">
                    <Item key={product.key} product={product} />
                </div>
                )}
            </div>
        )
    }
    
}
export default Categories;