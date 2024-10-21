document.addEventListener("DOMContentLoaded", () => {
    fetch('./jsons/compras.json')
        .then(response => response.json())
        .then(data => {
            const purchaseList = document.getElementById("purchase-list");
            
            if (data && data.length > 0) {
                data.forEach((compra, index) => {
                    const compraElement = document.createElement("div");
                    compraElement.classList.add("compra-item");
                    compraElement.innerHTML = `
                        <p><strong>Compra ${index + 1}:</strong></p>
                        <p>Cantidad: ${compra.cantidad}</p>
                        <p>Tipo de Cambio: De ${compra.tipoCambio.de} a ${compra.tipoCambio.a}</p>
                        <p>Total: ${compra.total}</p>
                        <hr />
                    `;
                    purchaseList.appendChild(compraElement);
                });
            } else {
                purchaseList.innerHTML = "<p>No hay compras registradas.</p>";
            }
        })
        .catch(error => console.error('Error al cargar el listado de compras:', error));
});


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
