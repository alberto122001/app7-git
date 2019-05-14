//JavaScript 

$(document).ready(function(e){
    document.addEventListener("deviceready",function(){
	
$('#izquierda').on("swipeleft",function(){
	navigator.notification.alert("Dezlizo a la izquierda",function(){"Aplicacion","Aceptar"});
});

$('#derecha').on("swiperight",function(){
	navigator.notification.confirm("¿Que quieres hacer?",function(opt){
		switch(opt)
		{
			case 1:
			navigator.notification.beep(2)
			break;
			
			case 2:
			navigator.notification.vibrate(2000);
			break;
		}
	},"Aplicacion","Beep,Vibrar,Cancelar");
	
	});
	},false);
});
