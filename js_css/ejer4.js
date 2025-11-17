function identificarCuerpo() {
    let codigo = parseInt(document.getElementById("codigo-cuerpo").value);
    let resultado = document.getElementById("resultado-ej4");
    let imagen = document.getElementById("img-ej4");

    let nombre = "";
    let descripcion = "";
    let url = "";

    switch (codigo) {
        case 1:
            nombre = "🌟 Estrella";
            descripcion = "Cuerpos gigantes de gas que producen luz y energía propia.";
            url = "https://osr.org/wp-content/uploads/2020/04/sirio-1.jpg";
            break;

        case 2:
            nombre = "🪐 Planeta";
            descripcion = "Objetos que orbitan estrellas y no emiten luz propia.";
            url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfxGScbPcfoMYuZXOX6rkgcKANjli0Hu_bdg&s";
            break;

        case 3:
            nombre = "☄️ Cometa";
            descripcion = "Cuerpos helados que desarrollan una cola al acercarse al Sol.";
            url = "https://concepto.de/wp-content/uploads/2019/06/cometa-e1561938278988.jpg";
            break;

        case 4:
            nombre = "🪨 Asteroide";
            descripcion = "Rocas espaciales que orbitan principalmente en el cinturón de asteroides.";
            url = "https://ciencia.nasa.gov/wp-content/uploads/sites/2/2023/06/777_PIA00135-jpg.webp";
            break;

        case 5:
            nombre = "🌌 Galaxia";
            descripcion = "Enormes conjuntos de estrellas, planetas, gas y polvo unidos por gravedad.";
            url = "https://concepto.de/wp-content/uploads/2019/07/galaxia-e1561948092846.jpg";
            break;

        default:
            resultado.innerHTML = "Código inválido. Debe ser entre 1 y 5.";
            imagen.style.display = "none";
            return;
    }

    resultado.innerHTML = `
        <strong>${nombre}</strong><br>
        ${descripcion}
    `;

    imagen.src = url;
    imagen.style.display = "block";
}