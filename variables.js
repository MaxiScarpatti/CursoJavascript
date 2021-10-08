
class products {
constructor (torta, cantidad, precio) {
  this.torta = torta;
  this.cantidad = cantidad;
  this.precio = precio;
  }
}
 let formulario = document.getElementById("formularioTorta");
 formulario.addEventListener('submit', guardarTorta);

function cargarListado () {
  let listadoTortas = JSON.parse(localStorage.getItem("listadoTortas"));
  if (listadoTortas == null) {
    return [];
  }
  return listadoTortas;
}

function armarTarjeta (elemento) {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");

  const nombreTorta = document.createElement("h2");
  nombreTorta.textContent = `${elemento.torta}`;
  tarjeta.appendChild(nombreTorta);

  const cantidad = document.createElement("div");
  cantidad.textContent = `Cantidad: ${elemento.cantidad}`;
  tarjeta.appendChild(cantidad);

  const precio = document.createElement("div");
  precio.textContent = `Precio: ${elemento.precio}`;
  tarjeta.appendChild(precio);
  return tarjeta;
}

function guardarListado (listadoTortas){
  localStorage.setItem("listadoTortas", JSON.stringify(listadoTortas));
  mostrarListado(listadoTortas);
}

function guardarTorta (e,elemento) {
  e.preventDefault();
  let nombre = document.querySelector("#torta").value;
  let cantidad = document.querySelector("#cantidad").value;
  let precio = document.querySelector("#precio").value;

  let listadoTortas = cargarListado();

  listadoTortas.push(new products (nombre, cantidad, precio));

  guardarListado (listadoTortas);
document.getElementById("formularioTorta").reset();
}

function mostrarListado (listadoTortas) {
  let listado = document.getElementById("listado");
  listado.textContent = "";
  listadoTortas.map(elemento => {
    listado.appendChild(armarTarjeta(elemento));
  })

}

mostrarListado(cargarListado());
