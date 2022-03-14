
// !Problema A

// class movil {
//     constructor(color, peso, resolucion, camara, ram) {
//         this.color = color;
//         this.peso = peso;
//         this.resolucion = resolucion;
//         this.camara = camara;
//         this.ram = ram;
//         this.encendido = false;
//     }
//     botonEncender(){
//         if (this.encendido == false) {
//             alert("móvil encendido")
//             this.encendido = true;
//         }else {
//             alert("movil apagado")
//             this.encendido = false;
//         }
//     }
//     reiniciar(){
//         if (this.encendido == true) {
//             alert("reiniciado celular");
//         } else {
//             alert("el móvil esta apagado")
//         }
//     }
//     tomarFotos(){
//         alert(`Fotos tomadas con una resolución de ${this.camara}`)
//     }
//     grabarVideos(){
//         alert(`Video grabado`)
//     }
//     movilInfo(){
//         return `Es ${this.color} <br>
//         Pesa ${this.peso} <br>
//         Tiene una resolucion de ${this.resolucion} <br>
//         Con una camara de ${this.camara} <br>
//         Y ${this.ram} de RAM <br>`;
//     }
//     }



// let movil1 = new movil("rojo", "192gr", "1080p", "10MP", "3GB");
// let movil2 = new movil("naraja", "180gr", "720p", "20MP", "4GB");
// let movil3 = new movil("amarillo", "200gr", "1080p", "15MP", "6GB");

// // movil1.botonEncender();
// // movil1.tomarFotos();
// // movil1.grabarVideos();
// // movil1.reiniciar();
// // movil1.botonEncender();




// document.write("Movil 1 <br>");
// document.write("<br>");
// document.write(movil1.movilInfo());

// document.write("<br>");
// document.write("<br>");
// document.write("<br>");

// document.write("Movil 2 <br>");
// document.write("<br>");
// document.write(movil2.movilInfo());

// document.write("<br>");
// document.write("<br>");
// document.write("<br>");

// document.write("Movil 3 <br>");
// document.write("<br>");
// document.write(movil3.movilInfo());


// !Problema B
//TODO Terminar

class Movil {
    constructor(color, peso, resolucion, camara, ram) {
        this.color = color;
        this.peso = peso;
        this.resolucion = resolucion;
        this.camara = camara;
        this.ram = ram;
        this.encendido = false;
    }
    botonEncender(){
        if (this.encendido == false) {
            alert("móvil encendido")
            this.encendido = true;
        }else {
            alert("movil apagado")
            this.encendido = false;
        }
    }
    reiniciar(){
        if (this.encendido == true) {
            alert("reiniciado celular");
        } else {
            alert("el móvil esta apagado")
        }
    }
    tomarFotos(){
        alert(`Fotos tomadas con una resolución de ${this.camara}`)
    }
    grabarVideos(){
        alert(`Video grabado`)
    }
    movilInfo(){
        return `Es <b>${this.color}</b> <br>
        Pesa <b>${this.peso}</b> <br>
        Tiene una resolucion de <b>${this.resolucion}</b> <br>
        Con una camara de <b>${this.camara}</b> <br>
        Y <b>${this.ram}</b> de RAM <br>`
    }
    }


class altaGama extends Movil {
    constructor(color, peso, resolucion, camara, ram, camaraExtra){
        super (color, peso, resolucion, camara, ram);
        this.Extra = camaraExtra;
    };
    grabarLenta(){
        alert("estas grabando en cámara lenta")
    };
    bloqFacial(){
        alert("vamos a hacer un reconocimiento facial")
    };
    infoAlta(){
        return this.movilInfo() + `La cámara extra tiene una resolución de <b>${this.Extra}</b> <br>`
    };
}

let movilAltaGama1 = new altaGama("negro","120gr", "1440p", "20MP", "8GB", "4K")
let movilAltaGama2 = new altaGama("blanco","110gr", "1440p", "27MP", "8GB", "5K")



document.write("Movil 1 <br>")
document.write("<br>")
document.write(movilAltaGama1.infoAlta())

document.write("<br>")
document.write("<br>")
document.write("<br>")

document.write("Movil 2 <br>")
document.write("<br>")
document.write(movilAltaGama2.infoAlta())





// !Problema C


// class apps {
//     constructor (cantidadDescargas,puntuacion, peso ){
//         this.descargas = cantidadDescargas;
//         this.valoracion = puntuacion;
//         this.peso = peso;
//         this.instaladas = false;
//         this.open = false;
//     }
//     instalarApp() {
//         if (this.instaladas == false) {
//             alert("App instalada");
//             this.instaladas = true;
//         } else {
//             alert("App desinstalada");
//             this.instaladas = false;
//         }
//     }
//     desinstalarApp() {
//         if (this.instaladas == true) {
//             alert("App desinstalada");
//             this.instaladas = false;
//             this.open = false;
//         }
//     }
//     abrirApp() {
//         if (this.open == false && this.instaladas == true) {
//                 alert("App abierta");
//                 this.open = true;
//         }
//     }
//     cerrarApp() {
//         if(this.open == true) {
//             alert("App cerrada");
//             this.open = false;
//         }
//     }
//     appInfo() {
//         return `
//         Se han descargardo esta applicacion <b>${this.descargas}</b> personas <br>
//         Tiene una puntuacion de <b>${this.valoracion}</b> estrellas <br>
//         Tiene un tamaño de <b>${this.peso}</b> <br>`
//     }
//     }


//     let app1 = new apps("10000","3.7", "400MB")
//     let app2 = new apps("12000","4.2", "350MB")
//     let app3 = new apps("9000","3.6", "550MB")
//     let app4 = new apps("20000","2.8", "800MB")
//     let app5 = new apps("50000","4.7", "100MB")
//     let app6 = new apps("2000","3.8", "275MB")
//     let app7 = new apps("14000","4", "150MB")


//     document.write(app1.appInfo() + `<br>`)
//     document.write(app2.appInfo() + `<br>`)
//     document.write(app3.appInfo() + `<br>`)
//     document.write(app4.appInfo() + `<br>`)
//     document.write(app5.appInfo() + `<br>`)
//     document.write(app6.appInfo() + `<br>`)
//     document.write(app7.appInfo() + `<br>`)

// app1.instalarApp()
// app1.abrirApp()
// app1.cerrarApp()
// app1.desinstalarApp()





