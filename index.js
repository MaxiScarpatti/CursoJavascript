alert('Bienvenido a Tu Pastelería')

do{

    let option = showMenu();
    if(option === products.length + 1) break;
    let qty = parseInt(prompt(SelQuantity))

    addToCart(option, qty);

    resp = prompt('¿Querés agregar más productos a la cuenta? S/N');

}while(resp === "S" || resp === "s");

if(cart > 0){
    alert(`Su compra tiene un total de $${cart}`);
}

alert('Gracias, lo esperamos pronto')

//DOM
let div = document.getElementById("miapp");
let parrafo = document.getElementById("titulo");

console.log(div.innerHTML);
console.log(parrafo);
console.log(div.textContent);
console.log(parrafo.textContent);

//me trae todos los elementos del listado class cakes
let cakes = document.getElementsByClassName("cakes");
for(const cake of cakes ) {
  console.log(cake.textContent);
}
//creamos un nuevo nodo tipo párrafo
let parrafo2 = document.createElement("p");
parrafo2.innerHTML = "<h2> Elegí la que más te guste</h2>";
document.body.appendChild(parrafo2);
