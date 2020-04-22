function getInputValue()
{
	var nro1=document.getElementById('user').value;
	var nro2=document.getElementById('pass').value;
	alert(nro1 + "  " + nro2);
	$.ajax({
	cache: false,
	// puede ser GET, POST
	type: "POST",  							
	// Tipo de retorno
	dataType: "html",
	// pagina que recibe la llamada
	url: "http://72.14.183.67:8181/Login",  							
	// datos, ej: $_POST['data']
	data:{
		user:nro1,
		password:nro2					
	},
	beforeSend: function(){  
        alert("procesando")
		},
		// acciones cuando me retorna algo el PHP
		success: function(msg){
			alert(msg);
            
		},							
		// acciones cuando hay error en comunicacion el el php
		error: function(xhr, status,msg2 ){
			//alert('4');			
			alert("error");
		}
	});//fin ajax
	}//fin else
		