/*
function like(){
	
	url = "http://culzapps.com:5000/like"
	data =  {id_user:5,id_item:5}
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
*/
function l_send(){
        var pvse = $("#pvse").val()
        var tvsf = $("#tvsf").val()
        var pvsf = $("#pvsf").val()
        var fvsc = $("#fvsc").val()
        var dvse = $("#dvse").val()
        /*Guardo las variables del mood en la sesion del usuario 'usuario invitado' */
        //sessionStorage.removeItem("mood1");
		window.sessionStorage.setItem("mood1", pvse);
        //global
        //localStorage['test']=pvse;
        sessionStorage.setItem("mood2", tvsf);
        sessionStorage.setItem("mood3", pvsf);
        sessionStorage.setItem("mood4", fvsc);
        sessionStorage.setItem("mood5", dvse);
        sessionStorage.setItem("cont", 1);
        sessionStorage.setItem("max", 20);
        //alert(sessionStorage.getItem("mood1"));
        $.mobile.changePage("song_user.html")
}
