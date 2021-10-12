const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const procesarPedidoBtn = document.getElementById('procesar-pedido');

cargarEventos();

function cargarEventos(){

    //Se ejecuta cuando se presiona agregar carrito
    productos.addEventListener('click', (e)=>{carro.comprarProducto(e)});

    //Cuando se elimina productos del carrito
    carrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)});

    //Al vaciar carrito
    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});

    //Al cargar documento se muestra lo almacenado en LS
    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());

    //Enviar pedido a otra pagina
    procesarPedidoBtn.addEventListener('click', (e)=>{carro.procesarPedido(e)});
}

let elementos = document.getElementsByClassName("my-0 font-weight-bold");

//Recorremos el arreglo con todos los elementos, asignando a cada uno los listener.
for(let i = 0; i < elementos.length; i++){
    elementos[i].addEventListener("mouseover", porencima);
    elementos[i].addEventListener("mouseout", alquitar);
}
//Al usar this hacemos referencia al objeto que invoco la funcion
function porencima() {
    this.style.color = "orange";
}
function alquitar() {
    this.style.color = "brown";
}
