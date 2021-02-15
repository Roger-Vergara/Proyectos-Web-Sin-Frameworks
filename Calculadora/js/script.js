
window.onload = function(){

	evento_boton(0);

	var operador;
	var valor_uno;
	var valor_dos;
	var resultado;

	var cer = document.getElementById("cer");
	var uno = document.getElementById("uno");
	var dos = document.getElementById("dos");
	var tre = document.getElementById("tre");
	var cua = document.getElementById("cua");
	var cin = document.getElementById("cin");
	var sei = document.getElementById("sei");
	var sie = document.getElementById("sie");
	var och = document.getElementById("och");
	var nue = document.getElementById("nue");
	var pun = document.getElementById("pun");

	//Botones especiales
	var con_botonM = document.getElementById("con_botonM");
	var btn_b = document.getElementById("btn_b");

	//Botones Operaciones
	var btn_mas = document.getElementById("btn_mas");
	var btn_men = document.getElementById("btn_men");
	var btn_div = document.getElementById("btn_div");
	var btn_por = document.getElementById("btn_por");
	var btn_masOmenos = document.getElementById("btn_masOmenos");
	var igual = document.getElementById("igual");

	cer.onclick = (function(){
		evento_boton(0);
	});

	uno.onclick = (function(){
		evento_boton(1);
	});

	dos.onclick = (function(){
		evento_boton(2);
	});

	tre.onclick = (function(){
		evento_boton(3);
	});

	cua.onclick = (function(){
		evento_boton(4);
	});

	cin.onclick = (function(){
		evento_boton(5);
	});

	sei.onclick = (function(){
		evento_boton(6);
	});

	sie.onclick = (function(){
		evento_boton(7);
	});

	och.onclick = (function(){
		evento_boton(8);
	});
	
	nue.onclick = (function(){
		evento_boton(9);
	});

	pun.onclick = (function(){
		evento_boton(".");
	});

	//Botones especiales
	con_botonM.onclick = (function(){
		var pantalla_peq = document.getElementById("pantalla_peq");
		pantalla_peq.innerHTML = "<b>"+0+"</b>";
		var pantalla_gra = document.getElementById("pantalla_gra");
		pantalla_gra.innerHTML = "<b>"+0+"</b>";

		valor_uno = 0;
		valor_dos = 0;
	});

	btn_b.onclick = (function(){

		var pq_texto = document.getElementById("pantalla_peq").innerText;
		var pg_texto = document.getElementById("pantalla_gra").innerText;
		var pq = document.getElementById("pantalla_peq");
		var pg = document.getElementById("pantalla_gra");
		var aux = pq_texto.substring(0, pq_texto.length-1); //Elimina el ultimo caracter
		pq.innerHTML = "<b>"+aux+"</b>";
		pg.innerHTML = "<b>"+aux+"</b>"; 
		

	});

	btn_b.onmouseover = (function(){
	     document.getElementById("img-btn-borrar").src = "assets/boton-borrar-hover.png";
	});

	btn_b.onmouseout = (function(){
	     document.getElementById("img-btn-borrar").src = "assets/boton-borrar.png";
	});

	btn_masOmenos.onclick = (function(){
		var pq_numero = Number(document.getElementById("pantalla_peq").innerText);
		var cam_signo;

		if(pq_numero > 0){
			cam_signo = pq_numero * -1;
			document.getElementById("pantalla_peq").innerHTML = "<b>"+cam_signo+"</b>";
			document.getElementById("pantalla_gra").innerHTML = "<b>"+cam_signo+"</b>";;
		} else {
			cam_signo = pq_numero * -1;
			document.getElementById("pantalla_peq").innerHTML = "<b>"+cam_signo+"</b>";;
			document.getElementById("pantalla_gra").innerHTML = "<b>"+cam_signo+"</b>";;
		}

	});

	//Operaciones
	btn_mas.onclick = (function(){

		operador = "+";
		valor_uno = Number(operaciones(valor_uno));
	
	});

	btn_men.onclick = (function(){

		operador = "-";
		valor_uno = Number(operaciones(valor_uno));
	
	});

	btn_div.onclick = (function(){

		operador = "/";
		valor_uno = Number(operaciones(valor_uno));
	
	});

	btn_por.onclick = (function(){

		operador = "*";
		valor_uno = Number(operaciones(valor_uno));
	
	});

	igual.onclick = (function(){

		valor_dos = Number(document.getElementById("pantalla_peq").innerText);

		switch(operador){
			case "+":
				resultado = Number(valor_uno + valor_dos);
			break;

			case "-":
				resultado = Number(valor_uno - valor_dos);
			break;

			case "/":
				resultado = Number(valor_uno / valor_dos);
			break;

			case "*":
				resultado = Number(valor_uno * valor_dos);
			break;
		}
		
		if(resultado % 2 == 0.0){
			document.getElementById("pantalla_peq").innerHTML = "<b>" + parseInt(resultado) + "</b>";
			document.getElementById("pantalla_gra").innerHTML ="<b>" + parseInt(resultado) + "</b>";
		} else {
			document.getElementById("pantalla_peq").innerHTML = "<b>" + resultado.toFixed(4) + "</b>";
			document.getElementById("pantalla_gra").innerHTML ="<b>" + resultado.toFixed(4) + "</b>";
		}
		

		//Por si lo ingresado es erroneo
		if(isNaN(resultado)){
			document.getElementById("pantalla_peq").innerHTML = "<b>" +  0  + "</b>";
			document.getElementById("pantalla_gra").innerHTML = "<b>" +  0  + "</b>";
			valor_uno = 0;
			valor_dos = 0;
		}	

	});
		
}

function evento_boton(numero){
	var pantalla_peq = document.getElementById("pantalla_peq");
	var pantalla_peq1 = document.getElementById("pantalla_peq").innerText;
	var pantalla_gra = document.getElementById("pantalla_gra");
	var pantalla_gra1 = document.getElementById("pantalla_gra").innerText;

	if(pantalla_peq1.length <= 13){
		pantalla_peq1 = eliminar_cero(pantalla_peq1);
		pantalla_gra1 = eliminar_cero(pantalla_gra1);
		pantalla_peq.innerHTML = "<b>" + pantalla_peq1 + numero + "</b>";
		pantalla_gra.innerHTML = "<b>" + pantalla_gra1 + numero + "</b>";  
	}
	
}

function eliminar_cero(cadena){
 
	if(cadena == "0"){
		cadena = "";
	}

	return cadena;

}

function operaciones(valor){

	var pantalla_peq = document.getElementById("pantalla_peq");
	var pantalla_peq_texto = document.getElementById("pantalla_peq").innerText;
	var pantalla_gra = document.getElementById("pantalla_gra");

	valor = pantalla_peq_texto;

	pantalla_peq.innerHTML = "<b>" +  0  + "</b>";
	pantalla_gra.innerHTML = "<b>" +  0  + "</b>";

	return valor;

}



