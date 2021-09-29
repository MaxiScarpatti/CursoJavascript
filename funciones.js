
const isStock = (quantity,stock) =>{
    if(quantity > stock){
        alert(`No tenemos suficiente stock, el stock disponible es ${stock}`);
        return false;
    }
    else return true;
}

const addToCart = (option, quantity) => {
    const found = products.find(product=>product.id === option)
    if(isStock(quantity, found.stock)){
        cart += (quantity * found.price);
        products[option-1].stock -= quantity;
        alert(`${found.name} fue agregado a la cuenta`);
    }
}

const showMenu = () =>{
    let menu = "Elige un Producto: \n";
    products.forEach((product)=>{
        menu += product.id + ".-" + product.name + "\n";
    });
    menu += (products.length + 1) + ".-Salir" ;
    let test = parseInt(prompt(menu));
    return test;

};
//hago un recorrido por mi array y lo muestro en html
for (const product of products) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> ID: ${product.id}</h3>
                            <p>  Producto: ${product.name}</p>
                            <b> $ ${product.price}</b>`;
    document.body.appendChild(contenedor);
}
