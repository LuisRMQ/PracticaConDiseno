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
            const mensajeTitulo = configuraciones.find(config => config.clave === "TituloPag").valor;
            document.getElementById("titulo_app").textContent = mensajeTitulo;

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


function guardarConfiguracion() {
    const data = {
        titulo: document.getElementById('tituloInput').value,
        mensaje_bienvenida: document.getElementById('bienvenidaInput').value,
        mensaje_home: document.getElementById('homeInput').value,
        home_icon: document.getElementById('homeIconInput').value,
        mensaje_cambio: document.getElementById('cambioInput').value,
        cambio_icon: document.getElementById('cambioIconInput').value,
        mensaje_operaciones: document.getElementById('operacionesInput').value,
        operaciones_icon: document.getElementById('operacionesIconInput').value,
        mensaje_config: document.getElementById('configInput').value,
        config_icon: document.getElementById('configIconInput').value,
        imagen_inicio: document.getElementById('logoInput').value,
    };

    fetch('saveConfig.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data).toString(),
    })
    .then(response => response.text())
    .then(result => {
        if (result === 'success') {
            alert('Configuración guardada correctamente.');
        } else {
            alert('Error al actualizar la configuración: ' + result);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema al procesar la solicitud.');
    });
}

document.addEventListener("DOMContentLoaded", () => {
    cargarConfig();
});
