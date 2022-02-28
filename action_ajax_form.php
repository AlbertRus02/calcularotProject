<?php

if (isset($_POST["material1"]) && isset($_POST["value1"]) && isset($_POST["material2"]) && isset($_POST["value2"]) ) { 

	// Формируем массив для JSON ответа
    $result = array(
    	'material1' => $_POST["material1"],
    	'value1' => $_POST["value1"],
        'material2' => $_POST["material2"],
    	'value2' => $_POST["value2"]
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 
}

?>