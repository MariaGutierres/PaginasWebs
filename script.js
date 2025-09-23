function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
}




let Imagenes = (

    [   "./img/band5.jpg",
        "./img/band2.jpg",
        "./img/band3.jpg",
        "./img/band4.jpg"
    ]

);

let contador = 0;


function cambiar() {
    contador++;
    document.getElementById("imagen_cambiar").src = Imagenes[contador % Imagenes.length];

}

window.onload = function () {
    if (Imagenes.length > 0) {
        document.getElementById("imagen_cambiar").src = Imagenes[0];
    }

    setInterval(cambiar, 3000);
};
