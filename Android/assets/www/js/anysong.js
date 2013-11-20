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
			var landmark = '<li class="ui-li-has-thumb ui-btn ui-btn-icon-right ui-li ui-btn-down-c ui-btn-up-c"><div class="ui-btn-inner"><a href="#anysong" class="ui-link-inherit"><div class="ui-btn-text"><h3>'+result.frase+'</h3>'
				+ '<p class="ui-li-desc"><h5>'+result.nombre+'</h5></p> '+'<p class="ui-li-desc"><h6>'+result.banda+'</h6></p><div></a><span class="ui-icon ui-icon-arrow-r"></span></li>';
				output.append(landmark);
	    },
		error: function( req, status, err ) {
		    console.log( 'something went wrong', status, err );
		}
	});

});
