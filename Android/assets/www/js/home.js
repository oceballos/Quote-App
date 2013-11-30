function send(){
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
        //alert(sessionStorage.getItem("mood1"));
        $.mobile.changePage("anysong.html")	
}
