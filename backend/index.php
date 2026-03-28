<?php
header("Access-Control-Allow-Origin: *"); // 開発用のCORS許可
header("Content-Type: application/json");

$host = 'db'; // docker-composeのサービス名
$dbname = 'my_database';
$user = 'root';
$pass = 'root_password';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $stmt = $pdo->query("SELECT 'Hello from PHP & MySQL' as message");
    echo json_encode($stmt->fetch(PDO::FETCH_ASSOC));
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}