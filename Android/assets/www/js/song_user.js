var id_song=0;

$(document).ready(function(){
	var mood1 = sessionStorage.getItem('mood1');
	var mood2 = sessionStorage.getItem('mood2');
	var mood3 = sessionStorage.getItem('mood3');
	var mood4 = sessionStorage.getItem('mood4');
	var mood5 = sessionStorage.getItem('mood5');
    var id_user = sessionStorage.getItem('id');
    var cont = sessionStorage.getItem('cont');
    //var oli = 1;
	var output = $('#songuser');
    //var cont =1;
    
	url = "http://culzapps.com:5000/usongs";
    
    data = {mood_1:mood1, mood_2:mood2, mood_3:mood3, mood_4:mood4, mood_5:mood5, id:id_user, cont:cont}
	$.ajax({
		url: url,
		dataType: 'json',
        type : 'get',
        data : data,
		crossDomain: true,
		complete: function(xhr, statusText){  
			console.log(xhr.responseText);
		},
	    success: function(result) {
            id_song = result.id; //NO BORAR , variable usada por el like
            if(Number(cont) < 20){
                cont=Number(cont)+1;
            }
            else{
                sessionStorage.removeItem("cont");
                cont=1;

            }
            sessionStorage.setItem("cont", cont);
            var landmark = '<h3>'+result.frase+'</h3>'+'<h4> <b>Canción : </b>'+result.nombre+'</h4>'+'<h5> <b>Por : </b>'+result.banda+'</h5>'
            output.append(landmark);
	    },
		error: function( req, status, err ) {
		    console.log( 'something went wrong', status, err );
		}
	});

});

function like(){
	//var id = $("#id_song).val()
	url = "http://culzapps.com:5000/like"
	data =  {id_user:sessionStorage.getItem("id"),id_item:id_song}
	// jax
		$.ajax({
		url: url,
	//	dataType: 'json',
		type : "post",
		data:data,
		crossDomain: true,
		complete: function(xhr, statusText){  
			console.log(xhr.responseText);
		},
	    success: function(result) {
                alert('Like done');
			},
		error: function( req, status, err ) {
		    alert('Error establecer conecxión');
		}
	});
	return false;
		
	}
