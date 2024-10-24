document.addEventListener("DOMContentLoaded", () => {
    cargarDivisas();

    const agregarDivisaBtn = document.getElementById("agregarDivisaBtn");
    const agregarDivisaModal = new bootstrap.Modal(document.getElementById("agregarDivisaModal"));

    agregarDivisaBtn.addEventListener("click", () => {
        agregarDivisaModal.show();
    });

    const valorInput = document.getElementById("valorDivisa");
    const valorVentaInput = document.getElementById("diezPorciento");

    valorInput.addEventListener("input", () => {
        const valor = parseFloat(valorInput.value);
        if (!isNaN(valor)) {
            const valorVenta = (valor * 1.10).toFixed(2); 
            valorVentaInput.value = valorVenta;
        } else {
            valorVentaInput.value = ""; 
        }
    });

    const guardarDivisaBtn = document.getElementById("guardarDivisaBtn");
    guardarDivisaBtn.addEventListener("click", () => {
        const codigo = document.getElementById("codigoDivisa").value;
        const nombre = document.getElementById("nombreDivisa").value;
        const valor = parseFloat(valorInput.value);

        const valorwi = "$" + valor;


        if (codigo && nombre && !isNaN(valor) && valor >= 0) {
            const nuevaDivisa = {
                codigo: codigo,
                nombre: nombre,
                valor: valorwi,
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

    const table = document.createElement('table');
    table.classList.add('table', 'table-striped');

    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Valor en USD</th>
        </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    divisas.forEach(divisa => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${divisa.codigo}</td>
            <td>${divisa.nombre}</td>
            <td>${divisa.valor}</td>
        `;
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    contenedor.appendChild(table);
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

document.addEventListener("DOMContentLoaded", () => {
    cargarConfig();
});