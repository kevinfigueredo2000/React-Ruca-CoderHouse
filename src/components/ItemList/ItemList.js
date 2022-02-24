import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Item } from "../Item/Item.js";
import { getFirestore } from "../../firebase/index.js";
import { Container, Row } from "react-bootstrap";
import "./ItemList.css"


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
        <>
            <img className="mb-2" id="imgg" src="https://http2.mlstatic.com/D_NQ_653944-MLA48961157173_012022-OO.webp"/>
            <Row>
                {isLoading? (<p className="text-center">Cargando...</p>): (data.map((product)=>(
                        <div className="col-sm" key={product.id}>
                            <Item key={product.id} product={product} id={product.id}/>
                        </div>
                )))}
                <h3 className="LGris my-3">Descubrí</h3>
                <Container>
                    <Row>
                        <div className="card col-sm mx-1 shadow">
                            <Row className="my-3">
                                <div className="col-sm mt-4 mx-4">
                                    <h6 className="LGrisChico">Para compartir con amigos</h6>
                                    <h2>Hasta 12x sin interés</h2>
                                    <button className="btn btn-primary">Ver más</button>
                                </div>
                                <div className="col-sm">
                                    <img className="img-fluid imgsRandom" src="https://http2.mlstatic.com/termos-thermos-pack-2-liq-color-1lt-acero-inoxidable-surtido-D_NQ_NP_631127-MLC26776791371_022018-F.jpg"/>
                                </div>
                            </Row>
                        </div>
                        <div className="card col-sm mx-1 shadow">
                            <Row className="my-3">
                                <div className="col-sm mt-4 mx-4">
                                    <h6 className="LGrisChico">Para disfrutar solo</h6>
                                    <h2>Hasta 6x sin interés</h2>
                                    <button className="btn btn-primary">Ver más</button>
                                </div>
                                <div className="col-sm">
                                    <img className="imgsRandom img-fluid" src='https://th.bing.com/th/id/OIP.nISUUNHS1zyJaJ2vn2JCnwHaHh?pid=ImgDet&rs=1'/>
                                </div>
                            </Row>
                        </div>
                    </Row>
                </Container>
            </Row>
            
        </>
    )
}
export default ItemList;