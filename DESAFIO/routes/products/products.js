// const express = require("express");

const {Router} = require("express")

const products = Router()


let productos = [
    {
        title: 'carpeta',
        price: 1200,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_829096-MLA50278868204_062022-W.jpg',
        id: 1
    },
    {
        title: 'carpeta 2',
        price: 1300,
        thumbnail: 'https://www.casaabe.com.ar/wp-content/uploads/2019/11/8205-600x600.jpg',
        id: 2
    },
    {
        title: 'carpeta3',
        price: 1400,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_829096-MLA50278868204_062022-W.jpg',
        id: 3
    },
    {
        title: 'carpeta4',
        price: 800,
        thumbnail: 'https://www.casaabe.com.ar/wp-content/uploads/2019/11/8205-600x600.jpg',
        id: 4
    }
]

// metodo GET simple, devuelve todos los productos
products.get('/productos', (req, res) =>{
    return res
      .status(200)
      .send({productos})
});



// metodo get con parametros de busqueda, busca un producto dentro del array
products.get('/productos/:id', ( req, res ) => {
    const { id } = req.params;
    const num = id -1;
    return res
        .status(200)
        .send(productos[num])
});



// metodo POST, le pasamos title, price, thumbnail por el body de postman
products.post('/productos', (req, res) => {
    const object = { title, price, thumbnail } = req.body
    console.log({ title, price, thumbnail });
    object.id = (productos.length + 1);
    productos.push(object)
    res.send({
        productos
    })

});



// // metodo PUT, 
products.put('/productos/:id', (req, res) =>{
    const { thumbnail } = req.body
    const { id } = req.params
    const num = id -1;
    
    console.log(productos[num].thumbnail = thumbnail);
    res.send({
       productos
    })
})




// metodo DELETE, elimina un producto segun su id y devuelve el array coon los productos restantes
products.delete("/productos/:id", (req, res) =>{
    const { id } = req.params;
    const num = id -1;
    console.log(`eliminacionde de prodcuto ${id}`);
    productos.splice(num, 1);
    res
       .status(200)
       .send({productos})
})


module.exports = products