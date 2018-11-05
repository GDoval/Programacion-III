<?php

class Usuario
{
    public function verificar($request, $response, $next)
    {
        
        if($request->isGet())
        {
            $response = $next($request, $response);
        }else
        {
            if($_POST['usuario'] == 'admin')
            {
                $response->getBody()->write("<h3>" . $_POST['usuario'] . " Bienvenido!</h3>\n");
                $response = $next($request, $response);
            }else
            {
                $response->getBody()->write("<h2>" . $_POST['usuario'] . " Juira!</h2>\n");
            }
        }
        return $response;
    }
}

?>