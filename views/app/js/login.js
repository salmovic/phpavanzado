function runScriptLogin( e ) {
	//boton enter
	window.console.log(e.getKeyCode);
	if( e.keyCode == 13 ) {
		goLogin();
	}
}

function goLogin() {
	window.alert('Se presino ENTER');
}
