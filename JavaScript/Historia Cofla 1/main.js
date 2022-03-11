let cofla = prompt("Dinero cofla");
let roberto = prompt("Dinero roberto");
let pedro = prompt("Dinero pedro");

cofla = parseInt(cofla)
cofla = parseInt(roberto)
cofla = parseInt(pedro)

document.write("<h3>Cofla</h3>")

if (cofla < 0.6) {
    document.write("eres un pobre");
} else if (cofla < 1) {
    document.write("Helado de agua <br>");
    document.write(`te sobra ${cofla - 0.6 + "€"}`);
}else if (cofla < 1.6) {
    document.write("Helado de crema <br>");
    document.write("te sobra " + `${cofla - 1}€`);
}else if (cofla < 1.7) {
    document.write("Helado de heladix <br>");
    document.write("te sobra " + `${cofla - 1.6}€`);
}else if (cofla < 1.8) {
    document.write("Helado de heladovich <br>");
    document.write("te sobra " + `${cofla - 1.7}€`);
}else if (cofla < 2.9) {
    document.write("Helado de helardo <br>");
    document.write("te sobra " + `${cofla - 1.8}€`);
}else if (cofla >= 2.9) {
    document.write("Helado de confites o 1/4 KG <br>");
    document.write("te sobra " + `${cofla - 2.9}€`);
}

document.write("<br><br><h3>Roberto</h3>")

if (roberto < 0.6) {
    document.write("eres un pobre");
} else if (roberto < 1) {
    document.write("Helado de agua <br>");
    document.write(`te sobra ${roberto - 0.6 + "€"}`);
}else if (roberto < 1.6) {
    document.write("Helado de crema <br>");
    document.write("te sobra " + `${roberto - 1}€`);
}else if (roberto < 1.7) {
    document.write("Helado de heladix <br>");
    document.write("te sobra " + `${roberto - 1.6}€`);
}else if (roberto < 1.8) {
    document.write("Helado de heladovich <br>");
    document.write("te sobra " + `${roberto - 1.7}€`);
}else if (roberto < 2.9) {
    document.write("Helado de helardo <br>");
    document.write("te sobra " + `${roberto - 1.8}€`);
}else if (roberto >= 2.9) {
    document.write("Helado de confites o 1/4 KG <br>");
    document.write("te sobra " + `${roberto - 2.9}€`);
}

document.write("<br><br><h3>pedro</h3>")

if (pedro < 0.6) {
    document.write("eres un pobre");
} else if (pedro < 1) {
    document.write("Helado de agua <br>");
    document.write(`te sobra ${pedro - 0.6 + "€"}`);
}else if (pedro < 1.6) {
    document.write("Helado de crema <br>");
    document.write("te sobra " + `${pedro - 1}€`);
}else if (pedro < 1.7) {
    document.write("Helado de heladix <br>");
    document.write("te sobra " + `${pedro - 1.6}€`);
}else if (pedro < 1.8) {
    document.write("Helado de heladovich <br>");
    document.write("te sobra " + `${pedro - 1.7}€`);
}else if (pedro < 2.9) {
    document.write("Helado de helardo <br>");
    document.write("te sobra " + `${pedro - 1.8}€`);
}else if (pedro >= 2.9) {
    document.write("Helado de confites o 1/4 KG <br>");
    document.write("te sobra " + `${pedro - 2.9}€`);
}