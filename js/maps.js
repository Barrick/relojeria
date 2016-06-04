$(document).on('ready', function(){
	init();
});

function init(){
google.maps.event.addDomListener(window,'load', drawMap);
function drawMap(){
	var mapa;
	var opcionesMapa = {
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	//creamos el constructor del mapa, se encarga de generar o crear el mapa
	mapa = new google.maps.Map(document.getElementById('content-left3'), opcionesMapa);
	//geolocalizacion 
	navigator.geolocation.getCurrentPosition(function(posicion){
		//console.log(posicion);
		var geolocalizacion = new google.maps.LatLng(posicion.coords.latitude, posicion.coords.longitude);
		//colocar un marcador en el mapa
		var marcador = new google.maps.Marker({
			map: mapa,
			draggable: true,
			position: geolocalizacion,
			visible: true
		});
		//titulo del marcador
		marcador.setTitle("Direccion del usuario");
		mapa.setCenter(geolocalizacion);
		//calcular la ruta
		calcRoute(geolocalizacion,mapa);
	});
}
function calcRoute(inicioRuta, mapa){
	//objetos para que funcione el servicio de rutas de google maps
	var directionsService = new google.maps.DirectionsService();
	var directionsRenderer = new google.maps.DirectionsRenderer();
	//colocamos  el mapa donde va a pintar la ruta
	directionsRenderer.setMap(mapa); 
	//coordenadas de la relojeria
	var posicionHotel = new google.maps.LatLng(19.3138227,-99.0704148);
	//colocamos el marcador
		var marcador = new google.maps.Marker({
			map: mapa,
			draggable: true,
			position: posicionHotel,
			visible: true
		});
		marcador.setTitle("Ubicacion del hotel");
		//informacion necesaria para que se trace la ruta
		var request = {
			origin: inicioRuta,
			destination: posicionHotel,
			travelMode: google.maps.DirectionsTravelMode.DRIVING
		}
		//para trazar la ruta preguntamos a google si es uuna ruta correcto
		directionsService.route(request, function(response, status){
			if(status == google.maps.DirectionsStatus.OK){
				directionsRenderer.setDirections(response);
			}
		});
}
}