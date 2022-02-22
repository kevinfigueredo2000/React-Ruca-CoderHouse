import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Item } from "../Item/Item.js";
import { getFirestore } from "../../firebase/index.js";
import { Container, Row } from "react-bootstrap";


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
        //const URL = "http://localhost:3001/productos"
        //setIsLoading(true)
        //fetch(URL)
        //.then((response)=> response.json())
        //.then((json) =>setProducts(json))
        //.catch((error)=> {console.error(error)})
        //.finally(()=> setIsLoading(false))
    }, []);
    return(
        <>
            <div className="row">
                {isLoading? (<p className="text-center">Cargando...</p>): (data.map((product)=>(
                        <div className="col-sm-3" key={product.id}>
                            <Item key={product.id} product={product} id={product.id}/>
                        </div>
                )))}
                <h3>Descubrí</h3>
                <Container>
                    <Row>
                        <div className="card col-sm-6">
                            <h6 className="">Lorem ipsum</h6>
                            <Row>
                                <div className="col-sm-6">
                                    <h5 className="">Lorem ipsum<br/>Lorem ipsum</h5>
                                    <button className="btn btn-primary">Ver más</button>
                                </div>
                                <div className="col-sm-6">
                                    <image src='https://th.bing.com/th/id/OIP.nISUUNHS1zyJaJ2vn2JCnwHaHh?pid=ImgDet&rs=1'/>
                                    df
                                </div>
                            </Row>
                        </div>
                        <div className="card col-sm-6">
                            <h6 className="">Lorem ipsum</h6>
                            <Row>
                                <div className="col-sm-6">
                                    <h5 className="" style={{color:"grey"}}>Lorem ipsum<br/>Lorem ipsum</h5>
                                    <button className="btn btn-primary">Ver más</button>
                                </div>
                                <div className="col-sm-6">
                                    <image src='https://th.bing.com/th/id/OIP.nISUUNHS1zyJaJ2vn2JCnwHaHh?pid=ImgDet&rs=1'/>
                                    df
                                </div>
                            </Row>
                        </div>
                    </Row>
                </Container>
            </div>
            
        </>
    )
}
export default ItemList;