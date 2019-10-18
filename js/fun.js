var sin= function(numerodedias,preciodedia){
	var numerodedias=parseFloat(document.getElementById("numerodedias").value);
	var preciodedia=parseFloat(document.getElementById("preciodedia").value);
	var resultado=numerodedias*preciodedia;
	document.getElementById('lbResultado').innerHTML = resultado;
	return resultado;

}

var con= function(numerodedias,preciodedia){
	var numerodedias=parseFloat(document.getElementById("numerodedias").value);
	var preciodedia=parseFloat(document.getElementById("preciodedia").value);
	var resultado=(numerodedias*preciodedia)+97032;
	document.getElementById('lbResultado').innerHTML = resultado;
	return resultado;

}

var vaciar= function(numerodedias,preciodedia){
	var numerodedias=0;
	var preciodedia=0;
	var resultado=0;
	document.getElementById('lbResultado').innerHTML = resultado;
	return resultado;

}