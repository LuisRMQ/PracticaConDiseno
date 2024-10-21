<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    <link rel="stylesheet" href="css/style.css" />
    <title>Dev'CoUee PWA</title>
</head>

<body>
    <main class="d-flex justify-content-center align-items-center">
        <div class="card p-4">
            <h1>Alta Tipo de Cambio</h1>
            <br>

            <!-- Updated Button with Correct Bootstrap Attributes -->
            <button class="btn btn-primary" id="agregarDivisaBtn" data-bs-toggle="modal" data-bs-target="#agregarDivisaModal">
                Agregar Tipo de Cambio
            </button>

            <div id="divisas-container" class="mt-3">
            </div>
        </div>
    </main>

    <div id="footer-bar" class="footer-bar-6">
    <a href="index.php" data-script="js/app.js"><i id="homeIcon"></i><span id="home"></span></a>
    <a href="TipoCambio.php" data-script="js/TipoCambio.js"><i id="tpcambioIcon"></i><span id="tpcambio"></span></a>
    <a href="Operaciones.php" data-script="js/Operaciones.js"><i id="operacionesIcon"></i><span id="operaciones"></span></a>
    <a href="Cuenta.php" data-script="js/Configuracion.js"><i id="configuIcon"></i><span id="configu"></span></a>
</div>

    <!-- Modal -->
    <div class="modal fade" id="agregarDivisaModal" tabindex="-1" aria-labelledby="agregarDivisaModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="agregarDivisaModalLabel">Agregar Tipo de Cambio</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="divisaForm">
                        <div class="mb-3">
                            <label for="codigoDivisa" class="form-label">Código</label>
                            <input type="text" class="form-control" id="codigoDivisa" maxlength="5" required>
                        </div>
                        <div class="mb-3">
                            <label for="nombreDivisa" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="nombreDivisa" required>
                        </div>
                        <div class="mb-3">
                            <label for="valorDivisa" class="form-label">Valor</label>
                            <input type="number" class="form-control" id="valorDivisa" required>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-primary" id="guardarDivisaBtn">Guardar</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Include Bootstrap JS and Custom Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/TipoCambio.js"></script>
</body>

</html>
