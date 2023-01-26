const express = require("express");

const products = require('./routes/products/products')

const app = express();


//deben seguir este orden
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', products);

// app.set("view engine", "ejs");
app.set("view engine", "pug");
app.set("views", "./views/partials");



let productos = [
    {
        nombreProducto: 'carpeta',
        precio: 1200,
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_829096-MLA50278868204_062022-W.jpg',
        id: 1
    },
    {
        nombreProducto: 'carpeta 2',
        precio: 1300,
        imagen: 'https://www.casaabe.com.ar/wp-content/uploads/2019/11/8205-600x600.jpg',
        id: 2
    },
    {
        nombreProducto: 'carpeta3',
        precio: 1400,
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_829096-MLA50278868204_062022-W.jpg',
        id: 3
    },
    {
        nombreProducto: 'carpeta4',
        precio: 800,
        imagen: 'https://www.casaabe.com.ar/wp-content/uploads/2019/11/8205-600x600.jpg',
        id: 4
    }
];

// app.get("/productos", (req, res) =>{
//     res.render("pages/form", {productos, title: 'Form products'}); 
// });

app.get("/productos", (req, res) =>{
    res.render("index.pug", {productos, title: 'Form products'}); 
});

app.post("/productos", (req, res) =>{
    productos.push(req.body);
    res.redirect("/productos"); 

});



const PORT = 3000

const server = app.listen(PORT, () => {
    console.log(`Listening app port ${server.address().port}`);
    server.on('error', (error) => console.log(`Error en servidor ${error}`));
})

server.on('error', (error) =>{
    console.log('Error ===>', error);
});