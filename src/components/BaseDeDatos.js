export const PRODUCTS =[
    {id: 1,
     name: "Groot",
     tipodemate:"3D",
     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin tempor id eu nisl. In ante metus dictum at tempor commodo ullamcorper. Et leo duis ut diam quam. Eget nunc lobortis mattis aliquam faucibus purus in massa. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Et tortor consequat id porta nibh venenatis cras sed felis. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Eu facilisis sed odio morbi quis commodo odio aenean sed. Malesuada fames ac turpis egestas sed tempus urna et pharetra.",
     price:150,
     stock: 7,
     img: "../foto1.jpg"},
    {id: 2,
     name: "Poke bola",
     tipodemate:"3D",
     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin tempor id eu nisl. In ante metus dictum at tempor commodo ullamcorper. Et leo duis ut diam quam. Eget nunc lobortis mattis aliquam faucibus purus in massa. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Et tortor consequat id porta nibh venenatis cras sed felis. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Eu facilisis sed odio morbi quis commodo odio aenean sed. Malesuada fames ac turpis egestas sed tempus urna et pharetra.",
     price:160,
     stock: 5,
     img: "../foto2.jpg"},
    {id: 3,
     name: "Chimuelo",
     tipodemate:"3D",
     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin tempor id eu nisl. In ante metus dictum at tempor commodo ullamcorper. Et leo duis ut diam quam. Eget nunc lobortis mattis aliquam faucibus purus in massa. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Et tortor consequat id porta nibh venenatis cras sed felis. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Eu facilisis sed odio morbi quis commodo odio aenean sed. Malesuada fames ac turpis egestas sed tempus urna et pharetra.",
     price:210,
     stock: 3,
     img: "../foto3.jpg"},
     {id: 4,
        name: "Stitch",
        tipodemate:"3D",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin tempor id eu nisl. In ante metus dictum at tempor commodo ullamcorper. Et leo duis ut diam quam. Eget nunc lobortis mattis aliquam faucibus purus in massa. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Et tortor consequat id porta nibh venenatis cras sed felis. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Eu facilisis sed odio morbi quis commodo odio aenean sed. Malesuada fames ac turpis egestas sed tempus urna et pharetra.",
        price:210,
        stock: 3,
        img: "../foto4.jpg"}
];
export function getProductos(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=> resolve(PRODUCTS), 2000);
    })
}