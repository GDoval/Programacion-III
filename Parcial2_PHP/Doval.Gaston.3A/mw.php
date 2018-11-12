<?php

require_once 'accesoDatos.php';

class MW
{
    public static function esPropietario($request, $response, $next)
    {
        $campos = $request->getParsedBody();
        $asd = json_decode($campos['usuario']);
        if($asd->perfil == 'propietario')
        {
            $response = $next($request, $response);
            return $response;
        }else
        {
            return $response;
        }
    }
}