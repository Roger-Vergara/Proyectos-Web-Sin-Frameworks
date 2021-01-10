var time;
var transparency = 0;
var bandera = 0;


window.onload = function(){

	/*Advertencia: Esta operacion es solo con fines didacticos
	no es recomendable realizar este efecto pues afecta el seo
	y el posicionamiento de un sitio web*/
	setInterval(cambiarImagen, 10000);
	
}

function cambiarImagen(){
	if(bandera == 0){
		document.getElementById("img1").src="assets/image/fondo2.jpg";
		time = setInterval('fadeIn()',5);
  		transparency = 0;
  		bandera += 1;
	} else if(bandera == 1) {	
		document.getElementById("img1").src="assets/image/fondo3.jpg";
		time = setInterval('fadeIn()',5);
  		transparency = 0;
  		bandera += 1;
	} else if(bandera == 2){
		document.getElementById("img1").src="assets/image/fondo4.jpg";
		time = setInterval('fadeIn()',5);
  		transparency = 0;
  		bandera += 1;
	} else {
		document.getElementById("img1").src="assets/image/fondo1.jpg";
		time = setInterval('fadeIn()',5);
  		transparency = 0;
  		bandera = 0;
	}
}

function fadeIn() {

  transparency += 5; 

  transparency = (transparency == 100) ? clearInterval(time) : transparency;
  
  obj = document.getElementById('fading');
 
  if (document.all){ 
    
    obj.style.filter = 'alpha(opacity='+transparency+')';
  }else{
 
    obj.style.opacity = transparency /100;
    
    obj.style.MozOpacity = transparency /100;
    
  }

}
