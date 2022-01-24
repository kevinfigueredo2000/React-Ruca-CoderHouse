export const PRODUCTS =[
    {id: 1,
     name: "Groot",
     description:"Mate 3D",
     price:150,
     stock: 7,
     img: "../foto1.jpg"},
    {id: 2,
     name: "Poke bola",
     description:"Mate 3D",
     price:160,
     stock: 5,
     img: "../foto2.jpg"},
    {id: 3,
     name: "Chimuelo",
     description:"Mate 3D",
     price:210,
     stock: 3,
     img: "../foto3.jpg"},
];
export function getProductos(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=> resolve(PRODUCTS), 0);
    })
}