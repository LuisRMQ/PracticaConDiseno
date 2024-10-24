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
    <style>
        .icon-preview {
            font-size: 24px;
            margin-left: 10px;
        }
    </style>
</head>

<body>
    <main>
        <h1>Configuración</h1>
        <div id="config-form">
            <label for="tituloInput">Título de la App:</label>
            <input type="text" id="tituloInput" /><br />

            <label for="bienvenidaInput">Mensaje de Bienvenida:</label>
            <input type="text" id="bienvenidaInput" /><br />

            <br>
            <hr>
            <br>

            <label for="homeInput">Mensaje Home:</label>
            <input type="text" id="homeInput" /><br />

            <label for="cambioInput">Mensaje Cambio:</label>
            <input type="text" id="cambioInput" /><br />

            <label for="operacionesInput">Mensaje Operaciones:</label>
            <input type="text" id="operacionesInput" /><br />

            <label for="configInput">Mensaje Configuración:</label>
            <input type="text" id="configInput" /><br />

            <br>
            <hr>
            <br>

            <label for="cambioIconInput">Icono Cambio:</label>
            <select id="cambioIconInput" onchange="updateIconPreview('cambioIconPreview', this.value)">
                <option value="fa-solid fa-arrow-right">Cambio</option>
                <option value="fa-solid fa-sync">Actualizar</option>
                <option value="fa-solid fa-exchange-alt">Intercambiar</option>
                <!-- Agrega más opciones según sea necesario -->
            </select>
            <i id="cambioIconPreview" class="icon-preview fa-solid fa-arrow-right"></i><br />

            <label for="operacionesIconInput">Icono Operaciones:</label>
            <select id="operacionesIconInput" onchange="updateIconPreview('operacionesIconPreview', this.value)">
                <option value="fa-solid fa-cogs">Operaciones</option>
                <option value="fa-solid fa-tools">Herramientas</option>
                <option value="fa-solid fa-clipboard-list">Lista</option>
                <!-- Agrega más opciones según sea necesario -->
            </select>
            <i id="operacionesIconPreview" class="icon-preview fa-solid fa-cogs"></i><br />

            <label for="homeIconInput">Icono Home:</label>
            <select id="homeIconInput" onchange="updateIconPreview('homeIconPreview', this.value)">
                <option value="fa-solid fa-house">Home</option>
                <option value="fa-solid fa-home">Inicio</option>
                <option value="fa-solid fa-hotel">Hotel</option>
                <!-- Agrega más opciones según sea necesario -->
            </select>
            <i id="homeIconPreview" class="icon-preview fa-solid fa-house"></i><br />

            <label for="configIconInput">Icono Configuración:</label>
            <select id="configIconInput" onchange="updateIconPreview('configIconPreview', this.value)">
                <option value="fa-solid fa-cog">Configuración</option>
                <option value="fa-solid fa-sliders-h">Ajustes</option>
                <option value="fa-solid fa-cogs">Rueda dentada</option>
                <!-- Agrega más opciones según sea necesario -->
            </select>
            <i id="configIconPreview" class="icon-preview fa-solid fa-cog"></i><br />

            <br>
            <hr>
            <br>

            <label for="logoInput" style="display: none;">URL del Logo:</label>
            <input type="text" id="logoInput" style="display: none;"/><br />


            <br>
            <hr>
            <br>
            <label for="logoFileInput">Seleccionar Logo:</label>
            <input type="file" id="logoFileInput" accept="image/*" /><br />
            <br>
            <div class="center-image-container">
                <img id="logoPreview" src="" alt="Logo Preview">
            </div>

            <button onclick="guardarConfiguracion()">Guardar Cambios</button>
        </div>
    </main>

    <div id="footer-bar" class="footer-bar-6">
        <a href="index.php" data-script="js/app.js"><i id="homeIcon"></i><span id="home"></span></a>
        <a href="TipoCambio.php" data-script="js/TipoCambio.js"><i id="tpcambioIcon"></i><span id="tpcambio"></span></a>
        <a href="Operaciones.php" data-script="js/Operaciones.js"><i id="operacionesIcon"></i><span id="operaciones"></span></a>
        <a href="Cuenta.php" data-script="js/Configuracion.js"><i id="configuIcon"></i><span id="configu"></span></a>
    </div>

    <!-- Asegúrate de que tu archivo de JavaScript se llame "Configuracion.js" -->
    <script src="js/Configuracion.js"></script>
</body>

</html>