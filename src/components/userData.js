import { useState } from "react";
import React from "react";
import { getFirestore } from "../firebase";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Row } from "react-bootstrap";

const UserData = ()=>{
    const { cart, clearAll } = useCart();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [nroTarj, setNroTajeta] = useState("");
    const [cp, setCp] = useState("");

    const [hidden, setHidden] = useState(true);
    let navigate = useNavigate();

    const getTotal = (cart) =>{
        let total = 0;
        cart.forEach((element) => {
            total += element.item.price * element.quantity;
        });
        return total;
    }

    const handleSubmit = (evt)=>{
        evt.preventDefault()

        if(!name || !phone || !mail || !cp || !nroTarj){
            return false;
        }
        const newOrder = { 
            buyer: name,
            items: cart,
            total: getTotal(cart)
        };
        
        const db = getFirestore();
        db.collection("orders")
        .add(newOrder)
        .then((res)=> {
            navigate(`/thanks/${res.id}`)
        })
        .catch((err) => console.log(err))
        clearAll();
    }
    return(
    <div className="card mt-3 mb-5 col-sm-10 mx-auto shadow" >
        <h2 className="my-3">Introduzca sus datos</h2>
        <form onSubmit={handleSubmit}>
            <Row>
                <div className="col-sm">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" placeholder="Escriba su nombre" className="form-control " value={name} onChange={(e)=> {setName(e.target.value); setHidden(true) }}/>
                </div>
                <div className="col-sm">
                    <label htmlFor="phone">Telefono</label>
                    <input type="number" id="phone" name="phone" placeholder="Escriba su numero de telefono" className="form-control col-sm" value={phone} onChange={(e)=> {setPhone(e.target.value); setHidden(true) }}/>
                </div>
            </Row>
            <Row>
                <div className="col-sm">
                    <label htmlFor="email">Mail</label>
                    <input type="email" id="email" name="email" placeholder="Ingrese su mail" className="form-control col-sm" value={mail} onChange={(e)=> {setMail(e.target.value); setHidden(true) }}/>
                </div>
                <div className="col-sm">
                    <label htmlFor="email">Repite tu mail</label>
                    <input type="email" id="repMail" name="repMail" placeholder="Repita su mail" className="form-control col-sm" value={mail} onChange={(e)=> {setMail(e.target.value); setHidden(true) }}/>
                </div>
            </Row>
            <Row>
                <div className="col-sm">
                    <label htmlFor="nroTarj">Nro Tarjeta</label>
                    <input type="number" id="nroTarj" name="nroTarj" placeholder="Ingrese Nro de Tarjeta" className="form-control col-sm" value={nroTarj} onChange={(e)=> {setNroTajeta(e.target.value); setHidden(true) }}/>
                </div>
                <div className="col-sm">
                    <label htmlFor="cp">Ingrese su código postal</label>
                    <input type="number" id="cp" name="cp" placeholder="Ingrese su código postal" className="form-control col-sm" value={cp} onChange={(e)=> {setCp(e.target.value); setHidden(true) }}/>
                </div>
            </Row>
                <input type="submit" value="Finalizar compra" onClick={()=> (!name || !phone || !mail || !cp || !nroTarj) && setHidden(false)}  className="my-4 btn btn-primary"/>

                <div className="alert alert-danger" hidden={hidden} role="alert">Ingresa los datos correspondientes!</div>
        </form>
    </div>)
}

export default UserData;