const selectFrom = document.getElementById("currency-from");
const selectTo = document.getElementById("currency-to");
const amountInput = document.getElementById("amount");
const resultDisplay = document.getElementById("result");
const buyButton = document.getElementById("buy-btn");
const confirmModal = document.getElementById("confirm-modal");
const confirmButton = document.getElementById("confirm-btn");
const cancelButton = document.getElementById("cancel-btn");

let divisasData = {};

function populateSelect(selectElement, divisas) {
    divisas.forEach(divisa => {
        const option = document.createElement("option");
        option.value = divisa.codigo;
        option.dataset.value = parseFloat(divisa.valor.replace('$', ''));
        option.textContent = `${divisa.nombre} (${divisa.valor})`;
        selectElement.appendChild(option);
    });
}

function convertCurrency() {
    const fromValue = parseFloat(selectFrom.selectedOptions[0].dataset.value);
    const toValue = parseFloat(selectTo.selectedOptions[0].dataset.value);
    const amount = parseFloat(amountInput.value);
    
    if (!isNaN(amount) && fromValue && toValue) {
        const result = (amount * toValue) / fromValue;
        resultDisplay.textContent = result.toFixed(2);
    }
}

function saveTransaction() {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = selectFrom.value;
    const toCurrency = selectTo.value;
    const total = parseFloat(resultDisplay.textContent);

    if (!isNaN(amount) && !isNaN(total)) {
        const transactionData = {
            cantidad: amount,
            tipoCambio: { de: fromCurrency, a: toCurrency },
            total: total
        };

        fetch('guardarCompra.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transactionData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message); 
            alert("¡Compra guardada exitosamente!");
        })
        .catch(error => console.error('Error al guardar la compra:', error));
    }
}

buyButton.addEventListener("click", () => {
    confirmModal.style.display = "flex";
});

confirmButton.addEventListener("click", () => {
    saveTransaction();
    confirmModal.style.display = "none";
    alert("¡Compra confirmada!");
});

cancelButton.addEventListener("click", () => {
    confirmModal.style.display = "none";
});

fetch('./jsons/TiposCambios.json')
    .then(response => response.json())
    .then(data => {
        divisasData = data.divisas;
        populateSelect(selectFrom, divisasData);
        populateSelect(selectTo, divisasData);
        
        selectFrom.selectedIndex = 0;
        selectTo.selectedIndex = 1;
        
        amountInput.addEventListener("input", convertCurrency);
        selectFrom.addEventListener("change", convertCurrency);
        selectTo.addEventListener("change", convertCurrency);
    })
    .catch(error => console.error('Error fetching divisas:', error));


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
    