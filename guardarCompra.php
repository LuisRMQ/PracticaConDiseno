<?php
$jsonFilePath = './jsons/compras.json';

$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    $currentData = file_exists($jsonFilePath) ? json_decode(file_get_contents($jsonFilePath), true) : [];

    $currentData[] = $data;

    file_put_contents($jsonFilePath, json_encode($currentData, JSON_PRETTY_PRINT));

    echo json_encode(["message" => "Compra guardada exitosamente."]);
} else {
    http_response_code(400);
    echo json_encode(["message" => "Datos inválidos."]);
}
?>
