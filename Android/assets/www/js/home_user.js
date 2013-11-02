$(document).ready(function(){
	var output = $('#bienvenido_msg');
	var landmark = 'Bienvenido '+sessionStorage.getItem("nombre");
	output.append(landmark);
});
