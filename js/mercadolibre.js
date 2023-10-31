//cuando se trabaja con objetos, se construye la clase 
let inputBusqueda = document.getElementById("inputBusqueda")
class Automovil {
    constructor(marca, modelo, precio, year, kilometros, ubicacion, imagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.year = year;
        this.kilometros = kilometros;
        this.ubicacion = ubicacion;
        this.imagen = imagen;
    }
}
let auto1 = new Automovil("XTZ ", "125", 7000000, "2017 ·", " 10.400 km ·", " Pitalito-Huila", "images/xtz.jpg");
let auto2 = new Automovil("XTZ", "250", 15000000, "2022 ·", " 5.400 km ·", " Pitalito-Huila", "images/mini-xtz250-2020-1.JPG");
let auto3 = new Automovil("RX", "115", 150000, "2015 ·", " 5.400 km ·", " Pitalito-Huila", "images/rx.jpg");
let auto4 = new Automovil("DT", "125", 1500000, "2000 ·", " 5.400 km ·", " Pitalito-Huila", "images/dt.jpg");
/* alert (auto1.marca + " " + auto1.modelo); */

// for (contador = 1; contador <= 2; contador++) {

        CargarVehiculo(auto1);
        CargarVehiculo(auto2); 
        CargarVehiculo(auto3);
        CargarVehiculo(auto4); 


        window.addEventListener("keydown", function(event){
            let busqueda = document.getElementById("inputBusqueda").value;
            if(event.key == "Enter") {
                // mainContent.innerHTML = "";
                let inputUser = busqueda.toLowerCase();
                if (inputUser == "XTZ") {
                    CargarVehiculo(auto1);
                    CargarVehiculo(auto2);
                }
                else if (inputUser == "RX") {
                    CargarVehiculo(auto3);
                }
                else if (inputUser == "DT") {
                    CargarVehiculo(auto4);
                }
            }
        });

function CargarVehiculo(auto) {

        /* inputBusqueda.addEventListener("keydown", function(event) {
            if(event.key == "Enter"){ */
            let mainContent = document.getElementById("mainContent");
        
            /* Caja del producto */
            let boxProducto = document.createElement("div");
            mainContent.appendChild(boxProducto);
            boxProducto.setAttribute("class", "box-producto");
        
            /* Caja para la imagen */
            let boxImg = document.createElement("div");
            boxProducto.appendChild(boxImg);
            boxImg.setAttribute("class", "box-img");
            let imgAuto = document.createElement("img");
            boxImg.appendChild(imgAuto);
            imgAuto.setAttribute("src", auto.imagen);
            imgAuto.setAttribute("class", "img-auto")
        
            /* Caja para información */
            let boxInfo = document.createElement("div");
            boxProducto.appendChild(boxInfo);
            boxInfo.setAttribute("class", "box-info");
            let marca = document.createElement("label");
            boxInfo.appendChild(marca);
            let textNodeMarca = document.createTextNode(auto.marca + "" + auto.modelo);
            marca.appendChild(textNodeMarca);
            marca.setAttribute("class", "marca");
        
            /* Precio */
            let  precio= document.createElement("label");
            boxInfo.appendChild(precio);
            let precioStr = Intl.NumberFormat('de-DE').format(auto.precio);
            let textNodePrecio = document.createTextNode("$" + precioStr);
            precio.appendChild(textNodePrecio);
            precio.setAttribute("class", "precio")

        
            /* año */
            let  año = document.createElement("label");
            boxInfo.appendChild(año);
            let añoStr = auto.year;
            let textNodeAño = document.createTextNode(añoStr);
            año.appendChild(textNodeAño);
            año.setAttribute("class", "año")
        
            /* kilometros */
            let kilometros = document.createElement("label");
            boxInfo.appendChild(kilometros);
            let kilometrosStr = auto.kilometros;
            let textNodeKilometros = document.createTextNode(kilometrosStr);
            kilometros.appendChild(textNodeKilometros);
            kilometros.setAttribute("class", "kilometros")
        
            /* Ubicación */
            let ubicacion = document.createElement("label");
            boxInfo.appendChild(ubicacion);
            let ubicacionStr = auto.ubicacion;
            let textNodeUbicacion = document.createTextNode(ubicacionStr);
            ubicacion.appendChild(textNodeUbicacion);
            ubicacion.setAttribute("class", "ubicacion")
        
            /* Icono corazón */
            let boxCorazon = document.createElement("div");
            boxImg.appendChild(boxCorazon);
            let iconoCorazon = document.createElement("i");
            boxCorazon.appendChild(iconoCorazon);
            boxCorazon.setAttribute("class", "box-corazon"); 
            iconoCorazon.setAttribute("class", "icono-corazon fa-regular fa-heart");
        
            /* Linea divisora */
            let lineaDiv = document.createElement("hr");
            boxProducto.appendChild(lineaDiv);
            lineaDiv.setAttribute("class", "linea-div");
            
            /* } */
      
}