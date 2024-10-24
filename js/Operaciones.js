const selectFrom = document.getElementById("currency-from");
const selectTo = document.getElementById("currency-to");
const amountInput = document.getElementById("amount");
const resultCompraDisplay = document.getElementById("result-compra");
const resultVentaDisplay = document.getElementById("result-venta");
const buyButton = document.getElementById("buy-btn");
const confirmModal = document.getElementById("confirm-modal");
const confirmButton = document.getElementById("confirm-btn");
const cancelButton = document.getElementById("cancel-btn");


const sellButton = document.getElementById("sell-btn");
const confirmModal1 = document.getElementById("confirm-modal1");
const confirmButton1 = document.getElementById("confirm-btn1");
const cancelButton1 = document.getElementById("cancel-btn1");

let divisasData = {};

function populateSelect(selectElement, divisas) {
    divisas.forEach(divisa => {
        const option = document.createElement("option");
        option.value = divisa.codigo;
        option.dataset.valor = parseFloat(divisa.valor.replace('$', ''));
        option.dataset.valorVenta = parseFloat(divisa.valorVenta.replace('$', ''));
        option.textContent = `${divisa.nombre} (Compra: ${divisa.valor}, Venta: ${divisa.valorVenta})`;
        selectElement.appendChild(option);
    });
}

function convertCurrency() {
    const fromValor = parseFloat(selectFrom.selectedOptions[0].dataset.valor);
    const fromValorVenta = parseFloat(selectFrom.selectedOptions[0].dataset.valorVenta);
    const toValor = parseFloat(selectTo.selectedOptions[0].dataset.valor);
    const toValorVenta = parseFloat(selectTo.selectedOptions[0].dataset.valorVenta);
    const amount = parseFloat(amountInput.value);
    
    if (!isNaN(amount) && fromValor && toValor) {
        const resultCompra = (amount * toValor) / fromValor;
        resultCompraDisplay.textContent = resultCompra.toFixed(2);
        
        const resultVenta = (amount * toValorVenta) / fromValorVenta;
        resultVentaDisplay.textContent = resultVenta.toFixed(2);
    }
}

function saveTransaction() {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = selectFrom.value;
    const toCurrency = selectTo.value;
    const totalCompra = parseFloat(resultCompraDisplay.textContent);
    const totalVenta = parseFloat(resultVentaDisplay.textContent);

    if (!isNaN(amount) && !isNaN(totalCompra) && !isNaN(totalVenta)) {
        const transactionData = {
            cantidad: amount,
            tipoCambio: { de: fromCurrency, a: toCurrency },
            totalCompra: totalCompra,
            // totalVenta: totalVenta
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



function saveVentaTransaction() {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = selectFrom.value;
    const toCurrency = selectTo.value;
    const totalCompra = parseFloat(resultCompraDisplay.textContent);
    const totalVenta = parseFloat(resultVentaDisplay.textContent);

    if (!isNaN(amount) && !isNaN(totalCompra) && !isNaN(totalVenta)) {
        const transactionData = {
            cantidad: amount,
            tipoCambio: { de: fromCurrency, a: toCurrency },
            // totalCompra: totalCompra,
            totalVenta: totalVenta
        };

        fetch('guardarVenta.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transactionData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message); 
            alert("Venta guardada exitosamente!");
        })
        .catch(error => console.error('Error al guardar la venta:', error));
    }
}






sellButton.addEventListener("click", () => {
    confirmModal1.style.display = "flex";
});

confirmButton1.addEventListener("click", () => {
    saveVentaTransaction();
    confirmModal1.style.display = "none";
    alert("Venta confirmada!");
});

cancelButton1.addEventListener("click", () => {
    confirmModal1.style.display = "none";
});






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

document.addEventListener("DOMContentLoaded", () => {
    cargarConfig();
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
