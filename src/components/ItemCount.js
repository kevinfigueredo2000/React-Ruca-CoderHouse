import React from "react";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function ItemCount(){
    const [count, setCount] = useState(1);

    function mas(){
        setCount( count + 1);
        if(count >=5){
            setCount(5);
        }
    }

    function menos(){
        setCount( count - 1);
        if(count <=0){
            setCount(0);
        }
    };
    return(
        <Container>
            <Row className="mb-3">
                <Button onClick={()=> menos(count)}>-</Button>
                    <p className="text-center"> {count} </p>
                <Button onClick={()=> mas(count)}>+</Button>
            </Row>
        </Container>
    );
}
    

export default ItemCount;