import "bootstrap/dist/css/bootstrap.min.css"
import ItemDetail from "../ItemDetail"

function ItemDetailContainer(){
    return(
        <div className="container">
            <div className="row">
                <ItemDetail  className="col-12" />
            </div>
        </div>
        
    )
}
export default ItemDetailContainer;