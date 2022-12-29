//Catalogo de productos:
const usuarioRegistrado=[
  {
    nombre:"pedo",
    apellido:"asdasd",
    localidad:"asd",
    edad:"25",
  }
]
const catalogo = [
  {
    id: 1,
    producto: "Kirby Peluche",
    precioUsd: 35,
    marca: "Nintendo",
    categoría: "peluche",
    enStock: true,
    oferta:true,

  },
  {
    id: 2,
    producto: "S.H. Figuarts Goku SSJ",
    precioUsd: 50,
    marca: "Bandai",
    categoría: "figura articulada",
    enStock: false,
    oferta:true,
  },
  {
    id: 3,
    producto: "Popup Parade Kenshin Himura",
    precioUsd:40,
    marca: "Good Smile",
    categoría: "figura no articulada",
    enStock: true,
    oferta:false,
  }
  ,
  {
    id: 4,
    producto: "Popup Parade Makoto Shishio",
    precioUsd:25,
    marca: "Good Smile",
    categoría: "figura no articulada",
    enStock: true,
    oferta:false,
  }
  ,
  {
    id: 5,
    producto: "Gogeta SSGSS Ultimate Soldier",
    precioUsd:80,
    marca: "Bandai",
    categoría: "figura no articulada",
    enStock: true,
    oferta:true,
  }
  ,
  {
    id: 6,
    producto: "Vegueta FES!!",
    precioUsd:30,
    marca: "Bandai",
    categoría: "figura no articulada",
    enStock: false,
    oferta:true,
  }
];

// //Funciones exclusivas para usuarios:
// function mostrarCatalogoTotal(){ 
//   for (let i = 0; i < catalogo.length; i++) {
//       console.log(catalogo[i].producto)
      
//   }
  
// }

function mostrarStockDisponible(){
  for (let i = 0; i < catalogo.length; i++) {
    if(catalogo[i].enStock==true){
      console.log(catalogo[i])
    
    }
    

  }  
}

// function mostrarOfertas(){
//   for (let i = 0; i < catalogo.length; i++) {
//     const precioOferta=catalogo[i].precioUsd *0.80;  
//     if (catalogo[i].oferta===true){ 
//     console.log(`El articulo ${catalogo[i].producto} se encuentra a precio de oferta ${precioOferta}usd.\n Precio normal: ${catalogo[i].precioUsd} usd `);
//   }
//   }
// }


// function confirmacion(){ //A traves de un letrero, se le indica al usuario si ordenar productos por nombre o por precio.
//   if(confirm ("Aceptar:Ordenar por precio. Cancelar:Ordena por nombre")){
//     ordenarPrecio();
//     alert("ordenado por precio")
//   }else{
//     ordenarNombre();
//     alert("ordenado por nombre")
//   }
// }

// function ordenarNombre() {
//   const catalogoOrdenadoNombre=[...catalogo];
//   catalogoOrdenadoNombre.sort((a,b) =>{
//     if (a.producto > b.producto){
//       return 1;
//   }
//   if (a.producto < b.producto){
//     return -1;
// }

//   return 0;
// }
//   )
//   console.log(catalogoOrdenadoNombre)
// }

// function ordenarPrecio() {
//   catalogo.sort((a,b) =>{
//     if (a.precioUsd > b.precioUsd){
//       return 1;
//   }
//   if (a.precioUsd < b.precioUsd){
//     return -1;
// }
//   return 0;
// }

//   )
//   console.log(catalogo);

// }

// function busquedaCategoria(){
//   const busquedaUsuarioCategoria=prompt("busqueda por categoria: \n Ingrese:\n peluche \n figura articulada \n figura no articulada").toLocaleLowerCase();
//   const catalogoBusquedaCategoria=catalogo.filter(p =>{
//     if(p.categoría==busquedaUsuarioCategoria){
//       return true;
//     }else{
//       return false;
//     }
//   } 
//   )
//   console.log(catalogoBusquedaCategoria)
//   }
  

// //Funciones exclusivas para adminstrador:
// function ingresoProducto(){
//   let id= catalogo.length+1;
//   let producto=prompt("Ingrese nombre del producto");
//   let precioUsd=prompt("Ingrese precio del producto");
//   let marca=prompt("Ingrese marca del producto");
//   let categoría=prompt("ingrese categoria");
//   let enStock=true;
//   let oferta=false;
//   catalogo.push({id,producto,precioUsd,marca,categoría,enStock,oferta});
// }

// //Selector de opciones por parte del usuario, usando funciones:
// const SeleccionUsuario=prompt("Se mostrara resultados en consola.\n Ingrese opciones:\n 1.Ver todos los productos. \n 2.Ver productos disponibles.\n 3.Ver Ofertas.\n 4.Ordenar. \n 5.Buscador por Categoria \n 6.Salir.")
//   switch (SeleccionUsuario) {
//     case "1": console.log("Catalogo total:");
//               mostrarCatalogoTotal();          
      
//       break;
//       case "2":console.log("Stock disponible")
//       mostrarStockDisponible();
      
//       break;
//       case "3":console.log("Ofertas de articulos de este mes")
//       mostrarOfertas();
//       break;
//       case "4":alert("ordenar productos por nombre o precio")
//       confirmacion();
//       break;

//       case "5":busquedaCategoria();
//       break;

//       case "6":alert("Vuelva pronto.")
//       break;
//     default:alert("Valor incorrecto.")
//       break;
//   }


////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
function cardsProductosHtml ( array ) {

  const contenedor = document.querySelector(".container")

  array.forEach( ( catalogoIngresado ) => {
      const card = document.createElement("div")
      card.className = "card"
      card.innerHTML = `
      <section>
          <h1>
              ${ catalogoIngresado.producto}
          </h1>
          <h2>
          Categoria: ${ catalogoIngresado.categoría}
          </h2>
          <h3>
          Precio: ${ catalogoIngresado.precioUsd} usd
          </h3>
          <h4> 
          En stock
          ${ catalogoIngresado.enStock}
          </h4> 
          <button>
              comprar
          </button>
      </section>
      `
      contenedor.appendChild(card)
  })

}




const botonModos= document.querySelector("#claro-oscuro")
const body=document.querySelector(".modo-claro")

botonModos.onclick=() => {
    body.classList.toggle("modo-oscuro")
    if(body.className ==="modo-claro"){
        botonModos.textContent="Modo oscuro"
    }else{
        botonModos.textContent="Modo claro"
    }
}

const botonProductos=document.querySelector("#mostrar-productos")
botonProductos.onclick=() =>{
  cardsProductosHtml(catalogo)
}


function recordarUsuario(){
 localStorage.setItem("usuarioLogueado",JSON.stringify(usuarioRegistrado))
}

function obtenerDatosUsuario(){
  const usuario=localStorage.getItem("usuarioLogueado")
  const convertidorJSon=JSON.parse(usuario)
  console.log(convertidorJSon)
}