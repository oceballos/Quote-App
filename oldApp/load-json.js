$(document).ready(function(){
	var output = $('#output');

	$.ajax({
		url: 'http://culzapps.com/conex.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		success: function(data, status){
			$.each(data, function(i,item){
				var landmark = '<li class="ui-li-has-thumb ui-btn ui-btn-icon-right ui-li ui-btn-down-c ui-btn-up-c"><div class="ui-btn-inner"><a href="#page2" class="ui-link-inherit"><div class="ui-btn-text"><h3>'+item.frase+'</h3>'
				+ '<p class="ui-li-desc">'+item.nombre+'</p><div></a><span class="ui-icon ui-icon-arrow-r"></span></li>';

				output.append(landmark);
			});
		},
		error: function(){
			output.text('no funco :(');
		}
	});
});