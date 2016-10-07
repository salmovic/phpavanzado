function goLogin()
{
	//declaracion de variables.
	var connect, form, response, result;
	// variables de formulario
	var user,pass,sesion;
	user = __('user_login').value;
	pass = __('pass_login').value;
	sesion = __('session_login').value;
	
	// ejemplo
	form = 'variable=contenido';
	connect = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	connect.onreadystatechange = function()
	{
		// verificando el estado de la conexion
		if (connect.readyState==4 && connect.status == 200)
		{
			//
			if(connect.responseText == '1')
			{
				// Mensaje de exito
				result = '<div class="alert alert-dismissible alert-success">';
				result +=	'<button type="button" class="close" data-dismiss="alert"><font><font>&times;</font></font></button>';
				result +=	'<h4><font><font>¡Connectado!</font></font></h4>';
				result +=	'<p><strong>Te estamos redireccionando...</strong></p>';
				result +=	'</div>';
							__('_AJAX_LOGIN_').innerHTML= result;
							// recarga la pagina
							location.reload();
			}
			else
			{
				// mensaje de error ... php
				__('_AJAX_LOGIN_').innerHTML= connect.responseText;
			}
			console.log(connect.responseText);
		}
		else if (connect.readyState != 4)
		{
			// procesando datos espera..
			result = '<div class="alert alert-dismissible alert-warning">';
			result +=	'<button type="button" class="close" data-dismiss="alert"><font><font>&times;</font></font></button>';
			result +=	'<h4><font><font>¡Connectado!</font></font></h4>';
			result +=	'<p><strong>Te estamos redireccionando...</strong></p>';
			result +=	'</div>';

			__('_AJAX_LOGIN_').innerHTML= result;
		}
	}
	connect.open('POST','ajax.php?mode=login',true);
	connect.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	connect.send(form);
}
function runScriptLogin( e )
{
	//boton enter
	// window.console.log( e.getKeyCode );
	if( e.keyCode == 13 )
	{
		goLogin();
	}
}
