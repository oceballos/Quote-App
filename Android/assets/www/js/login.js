$('#login').submit(function() {
	// recolecta los valores que inserto el usuario
	var datosUsuario = $("#user").val()
	var datosPassword = $("#passwd").val()
	url = "http://localhost:5000/login"
	data =  {user:datosUsuario,passwd:datosPassword}

	$.ajax({
		url: url,
		dataType: 'json',
		type : "post",
		data:data,
		crossDomain: true,
		complete: function(xhr, statusText){  
			console.log(xhr.responseText);
		},
	    success: function(result) {
			if (result.edo=="ok"){
				sessionStorage.setItem("nombre", result.user);
				sessionStorage.setItem("id", result.id);
				$.mobile.changePage("#home_user")
			}
			else if(result.edo=="no"){
				alert("Usuario o clave no valida");
			}
	    },
		error: function( req, status, err ) {
		    output.text('Error al capturar la frase');
		}
	});
	return false;
});
