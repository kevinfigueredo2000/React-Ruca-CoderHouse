import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useState } from "react";

function ItemCount({stock, initial}){
    let [count, setCount] = useState(initial);
    
    function mas(){
        count < stock? setCount(count +1): setCount(count);
    }

    function menos(){
        count > initial? setCount(count -1): setCount(count);
    };
    return(
        <Container>
            <Row className="my-3">
                <Button className="col-sm-2 m-auto" onClick={menos}>-</Button>  <p className="col-sm-2 my-auto">{count}</p>  <Button className="col-sm-2 m-auto" onClick={mas}>+</Button>
            </Row>
        </Container>
    );
}
    

export default ItemCount;