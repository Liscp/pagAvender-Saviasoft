<?php

    if (!isset($_POST["nombre"])) {
        header("Location: http://www.a-vender.com/tmp/nv/");
    }else{
        $response = $_POST["g-recaptcha-response"];

        if (!empty($response)) {
            $secret = "6LeMaN4UAAAAAOQPfEPikNw8o38WVplrod28khb0";
            $ip = $_SERVER['REMOTE_ADDR'];
            $respuestaValidacion = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$response&remoteip=$ip");
            var_dump($respuestaValidacion);
            $jsonResponde = json_decode($respuestaValidacion);
            if ($jsonResponde->success) {
                $remitente = $_POST['email'];
                
                
                if (!$_POST || !$totalmente_falso= "0324655847"){

                }else {
                    require('envio.js');
                    exit();
                }
                exit();
            }
        }else {
            exit();
        }
    }
    exit();
?>