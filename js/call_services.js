 /*PRimera forma de llamar otra pagina con JQUERY 


$(document).ready(function(){
	$('#estetico').on('click', function(){
		$('#vista-resultado').load('serv-relojes/estetico.html');
	});

	$('#basico').on('click', function(){
		$('#vista-resultado').load('serv-relojes/basico.html');
	});

	$('#completo').on('click', function(){
		$('#vista-resultado').load('serv-relojes/completo.html');
	});

	$('#limpieza').on('click', function(){
		$('#vista-resultado').load('serv-relojes/limpieza.html');
	});

	$('#reparar').on('click', function(){
		$('#vista-resultado').load('serv-relojes/reparacion.html');
	});

	/*$('#transform').on('click', function(){
		$('#vista-resultado').load('serv-relojes/.html');
	});*/

//});



/* Otra variante 

$(document).ready(function(){
	$('#estetico').on('click', function(){
		$('#vista').attr('href', 'serv-relojes/estetico.html');
	});

	$('#basico').on('click', function(){
		$('#contenido').attr('href', 'pagina2.html');
	});

	$('#completo').on('click', function(){
		$('#contenido').attr('href', 'pagina3.html');
	});

	$('#limpieza').on('click', function(){
		$('#contenido').attr('href', 'pagina1.html');
	});

	$('#reparar').on('click', function(){
		$('#contenido').attr('href', 'pagina2.html');
	});

	$('#transform').on('click', function(){
		$('#contenido').attr('href', 'pagina3.html');
	});


});
*/

/* ========== Lammar paginas con AJAX  =====*/
$(document).ready(function() {
	$.ajax({
		type: "POST",
		url: "serv-relojes/estetico.html",
	    success: function(a) {
                $('#vista-resultado').html(a);
	    }
	});

   $('#estetico').click(function(){
      $.ajax({
	    type: "POST",
	    url: "serv-relojes/estetico.html",
	    success: function(a) {
                $('#vista-resultado').html(a);
	    }
       });
   });

     $('#basico').click(function(){
      $.ajax({
	    type: "POST",
	    url: "serv-relojes/basico.html",
	    success: function(a) {
                $('#vista-resultado').html(a);
	    }
       });
  });

      $('#completo').click(function(){
      $.ajax({
	    type: "POST",
	    url: "serv-relojes/completo.html",
	    success: function(a) {
                $('#vista-resultado').html(a);
	    }
       });
   	});

     $('#limpieza').click(function(){
      $.ajax({
	    type: "POST",
	    url: "serv-joyeria/limpieza.html",
	    success: function(a) {
                $('#vista-resultado').html(a);
	    }
       });
   });

     $('#reparar').click(function(){
      $.ajax({
	    type: "POST",
	    url: "serv-joyeria/reparacion.html",
	    success: function(a) {
                $('#vista-resultado').html(a);
	    }
       });
  });

      /*$('#transform').click(function(){
      $.ajax({
	    type: "POST",
	    url: "hola3.php",
	    success: function(a) {
                $('#div-results').html(a);
	    }
       });
   	}); */

});
