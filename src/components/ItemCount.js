import React  from 'react';

export const ItemCount =({sumar, restar, disabled ,counter})=>{
    const tamaño ={
        width:"250px",
        marginLeft: "auto",
        marginRight: "auto"
    }

    return(<>
        <div className="row mb-2" style={tamaño} id="divContador">
            <button className="btn btn-primary col-sm-2 m-auto" id="restar" onClick={restar}>-</button>
                <p className="text-center col-sm-2 my-auto">{counter}</p>
            <button className="btn btn-primary col-sm-2 m-auto"  id="sumar" onClick={sumar} disabled={disabled}>+</button>
        </div>
        
    </>
    );
}