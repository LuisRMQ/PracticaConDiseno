<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    <link rel="stylesheet" href="css/style.css" />
    <title>Dev'CoUee PWA</title>
    <style>
        .modal {
            display: none;
            position: fixed;
            z-index: 100;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            justify-content: center;
            align-items: center;
        }

        .modal-content {
            background: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
        }

        .modal-buttons {
            margin-top: 15px;
            display: flex;
            justify-content: space-around;
        }
    </style>
</head>

<body>
    <main>
        <div class="card">
            <h1>Operación Compra - Venta</h1>
            <br>
            <div class="input-container">
                <label for="amount">Cantidad:</label>
                <input type="number" id="amount" placeholder="Ingresa la cantidad" />
            </div>
            <br>
            <div class="select-container">
                <label for="currency-from">De:</label>
                <select id="currency-from"></select>
                <br><br>
                <label for="currency-to">A:</label>
                <select id="currency-to"></select>
            </div>
            <br>
            <div class="result-container">
                <p>Total: <span id="result">0.00</span></p>
            </div>
            <div class="button-container">
                <button class="btn" id="buy-btn">Compra</button>
                <button class="btn" id="sell-btn">Venta</button>
            </div>
        </div>
    </main>

    <div class="modal" id="confirm-modal">
        <div class="modal-content">
            <p>¿Deseas confirmar la compra?</p>
            <div class="modal-buttons">
                <button id="confirm-btn">Confirmar</button>
                <button id="cancel-btn">Cancelar</button>
            </div>
        </div>
    </div>
    <div id="footer-bar" class="footer-bar-6">
    <a href="index.php" ><i id="homeIcon"></i><span id="home"></span></a>
    <a href="TipoCambio.php" d><i id="tpcambioIcon"></i><span id="tpcambio"></span></a>
    <a href="Operaciones.php" ><i id="operacionesIcon"></i><span id="operaciones"></span></a>
    <a href="Cuenta.php" ><i id="configuIcon"></i><span id="configu"></span></a>
</div>

    <script src="js/Operaciones.js"></script>

</body>

</html>