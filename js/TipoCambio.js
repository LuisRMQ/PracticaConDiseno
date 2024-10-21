document.addEventListener("DOMContentLoaded", () => {
    cargarDivisas();

    const agregarDivisaBtn = document.getElementById("agregarDivisaBtn");
    const agregarDivisaModal = new bootstrap.Modal(document.getElementById("agregarDivisaModal"));

    agregarDivisaBtn.addEventListener("click", () => {
        agregarDivisaModal.show();
    });

    const guardarDivisaBtn = document.getElementById("guardarDivisaBtn");
    guardarDivisaBtn.addEventListener("click", () => {
        const codigo = document.getElementById("codigoDivisa").value;
        const nombre = document.getElementById("nombreDivisa").value;
        const valor = parseFloat(document.getElementById("valorDivisa").value);
        const valorwi = "$"+valor;

        if (codigo && nombre && !isNaN(valor) && valor >= 0) {
            const nuevaDivisa = {
                codigo: codigo,
                nombre: nombre,
                valor: valorwi
            };
      

            fetch('guardarDivisa.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nuevaDivisa)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    divisas.push(nuevaDivisa);
                    actualizarDivisasEnUI();
                    agregarDivisaModal.hide();
                    document.getElementById("divisaForm").reset();
                } else {
                    console.error(data.message);
                }
            })
            .catch(error => console.error("Error al guardar la divisa:", error));
        }
    });
});

let divisas = [];

function cargarDivisas() {
    fetch('./jsons/TiposCambios.json')
        .then(response => response.json())
        .then(data => {
            divisas = data.divisas;
            actualizarDivisasEnUI();
        })
        .catch(error => console.error("Error al cargar las divisas:", error));
}

function actualizarDivisasEnUI() {
    const contenedor = document.getElementById('divisas-container');
    contenedor.innerHTML = '';

    divisas.forEach(divisa => {
        const div = document.createElement("div");
        div.innerHTML = `<p>${divisa.nombre} (${divisa.codigo}) <strong>${divisa.valor}</strong></p>`;
        contenedor.appendChild(div);
    });
}

function cargarConfig() {
    fetch('./jsons/config.json') 
        .then(response => response.json())
        .then(data => {
            const configuraciones = data.configuraciones;
            const mensajeCammbio = configuraciones.find(config => config.clave === "mensaje_cambio").valor;
            const mensajeOperaciones = configuraciones.find(config => config.clave === "mensaje_operaciones").valor;
            const mensajeConfig = configuraciones.find(config => config.clave === "mensaje_config").valor;
            const mensajehomeIcon = configuraciones.find(config => config.clave === "mensaje_home").icono;
            const mensajeCammbioIcon = configuraciones.find(config => config.clave === "mensaje_cambio").icono;
            const mensajeOperacionesIcon = configuraciones.find(config => config.clave === "mensaje_operaciones").icono;
            const mensajeConfigIcon = configuraciones.find(config => config.clave === "mensaje_config").icono;
            const mensajehome = configuraciones.find(config => config.clave === "mensaje_home").valor;

            document.getElementById("home").textContent = mensajehome;

            document.getElementById("tpcambio").textContent = mensajeCammbio;
            document.getElementById("operaciones").textContent = mensajeOperaciones;
            document.getElementById("configu").textContent = mensajeConfig;
            document.getElementById("homeIcon").className = mensajehomeIcon;
            document.getElementById("tpcambioIcon").className = mensajeCammbioIcon;
            document.getElementById("operacionesIcon").className = mensajeOperacionesIcon;
            document.getElementById("configuIcon").className = mensajeConfigIcon;

        })
        .catch(error => console.error("Error al cargar el mensaje de bienvenida:", error));
}



document.addEventListener("DOMContentLoaded", () => {
    cargarConfig();
    
  
});
