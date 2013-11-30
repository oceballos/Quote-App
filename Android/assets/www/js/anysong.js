$(document).ready(function(){
	var output = $('#anysong_msg');
	url = "http://culzapps.com:5000/songs/"
	$.ajax({
		url: url,
		dataType: 'json',
		crossDomain: true,
		complete: function(xhr, statusText){  
			console.log(xhr.responseText);
		},
	    success: function(result) {
            if(sessionStorage.getItem("mood1") != null){
		var landmark = '<h3>'+result.frase+'</h3>'+'<h4> <b>Canción : </b>'+result.nombre+'</h4>'+'<h5> <b>Por : </b>'+result.banda+'</h5>'
				output.append(landmark);
            }
            else{
                output.append('Error al camptudad sessionStorage!');
            }
	    },
		error: function( req, status, err ) {
		    console.log( 'something went wrong', status, err );
		}
	});

});
