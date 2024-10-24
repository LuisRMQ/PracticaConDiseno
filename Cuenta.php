<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    <link rel="stylesheet" href="css/style.css" />
    <title id="titulo_app"></title>
</head>

<body>
    <main>
        <h1>Configuración</h1>
        <div id="config-form">
            <label for="tituloInput">Título de la App:</label>
            <input type="text" id="tituloInput" /><br/>

            <label for="bienvenidaInput">Mensaje de Bienvenida:</label>
            <input type="text" id="bienvenidaInput" /><br/>

            <label for="homeInput">Mensaje Home:</label>
            <input type="text" id="homeInput" /><br/>

            <label for="homeIconInput">Icono Home (clase CSS):</label>
            <input type="text" id="homeIconInput" /><br/>

            <label for="cambioInput">Mensaje Cambio:</label>
            <input type="text" id="cambioInput" /><br/>

            <label for="cambioIconInput">Icono Cambio (clase CSS):</label>
            <input type="text" id="cambioIconInput" /><br/>

            <label for="operacionesInput">Mensaje Operaciones:</label>
            <input type="text" id="operacionesInput" /><br/>

            <label for="operacionesIconInput">Icono Operaciones (clase CSS):</label>
            <input type="text" id="operacionesIconInput" /><br/>

            <label for="configInput">Mensaje Configuración:</label>
            <input type="text" id="configInput" /><br/>

            <label for="configIconInput">Icono Configuración (clase CSS):</label>
            <input type="text" id="configIconInput" /><br/>

            <label for="logoInput">URL del Logo:</label>
            <input type="text" id="logoInput" /><br/>

            <button onclick="guardarConfiguracion()">Guardar Cambios</button>
        </div>
    </main>

    <div id="footer-bar" class="footer-bar-6">
        <a href="index.php" data-script="js/app.js"><i id="homeIcon"></i><span id="home"></span></a>
        <a href="TipoCambio.php" data-script="js/TipoCambio.js"><i id="tpcambioIcon"></i><span id="tpcambio"></span></a>
        <a href="Operaciones.php" data-script="js/Operaciones.js"><i id="operacionesIcon"></i><span id="operaciones"></span></a>
        <a href="Cuenta.php" data-script="js/Configuracion.js"><i id="configuIcon"></i><span id="configu"></span></a>
    </div>


    <script src="js/Configuracion.js"></script>
</body>

</html>
