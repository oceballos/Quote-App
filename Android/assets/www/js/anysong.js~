$(document).ready(function(){
	var output = $('#anysong_msg');

	var mood1 = sessionStorage.getItem('mood1');
	var mood2 = sessionStorage.getItem('mood2');
	var mood3 = sessionStorage.getItem('mood3');
	var mood4 = sessionStorage.getItem('mood4');
	var mood5 = sessionStorage.getItem('mood5');

	url = "http://culzapps.com:5000/songs"
	data = {mood_1:mood1, mood_2:mood2, mood_3:mood3, mood_4:mood4, mood_5:mood5}
	$.ajax({
		url: url,
		dataType: 'json',
		type : 'get',
		data:data,
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
