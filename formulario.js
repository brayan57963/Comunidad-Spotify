const Formulario document.getElementById("Formulario");

Formulario.addEventListener("submit", (e) => {
    e.preventDefault(),
    

    fetch("https://sheet.best/api/sheets/1b8225b2-daaa-4f11-b62a-79591b60790a", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
    body: JSON.stringify({
        "Nombre": Formulario.Nombre.value,
        "Edad":  Formulario.Edad.value,
        "Sexo":  Formulario.camposex.value,
        "Email":  Formulario.correo_electronico.value
        });
    });

})
