
(window.onload = function(){

    if(window.libreria_dos == undefined){

    	//Redireccion del formulario de actualizacion
		(function(){

			var estado = "oculto";

			let buttonEdit = document.querySelectorAll(".buttonEdit");
			let textarea = document.querySelectorAll("div > form > textarea");
			let form = document.querySelectorAll("ul li div form");
			let date = document.querySelectorAll("ul li p:nth-child(2)");
			let hour = document.querySelectorAll("ul li p:nth-child(4)");

			for(let i=0;i<buttonEdit.length;i++){

				buttonEdit[i].addEventListener("click", function(e){

					if(estado == "visible"){

						buttonEdit[i].setAttribute("value","Editar");
						textarea[i].value = "";
						form[i].style.width = '0';
						form[i].style.height = '0';
						textarea[i].style.width = '0%';
						textarea[i].style.height = '0%';
						form[i].setAttribute("action","#");
						estado = "oculto";

					} else if(estado == "oculto") {
						buttonEdit[i].setAttribute("value","Ocultar");
						form[i].style.display = 'block';
						form[i].style.width = 'inherit';
						form[i].style.height = 'inherit';
						textarea[i].style.height = '50px';
						textarea[i].style.width = '100%';
						form[i].setAttribute("action",`php/main.php?type='update'&&date=${date[i].innerHTML}&&hour=${hour[i].innerHTML}`);
						estado = "visible";
					} else {
						alert("No tan rapido amigo...");
						estado = "oculto";
					}
				});
			}
	
		}());

		//Redireccion del formulario para borrar
		(function(){

			let buttonDele = document.querySelectorAll(".buttonDele");
			let date = document.querySelectorAll("ul li p:nth-child(2)");
			let hour = document.querySelectorAll("ul li p:nth-child(4)");
			let estado = false;

			for(let i=0;i<buttonDele.length;i++){
				buttonDele[i].addEventListener("click",()=>{
		    		estado = window.confirm("¿Seguro desea borrar la nota?");
		    		if(estado){
		    			window.location.href = `php/main.php?type='delete'&&date=${date[i].innerHTML}&&hour=${hour[i].innerHTML}`;
		    		} else {
		    			return false;
		    		}
				});
			}

		}());


		//Redireccion del formulario de insertar
		(function(){

			let form = document.getElementById("form1");
			let inputForm = document.getElementById("inputForm");
			inputForm.addEventListener("click", ()=>{
				form.setAttribute("action", "php/main.php?type='insert'");
			});

		}());

	} else {
        console.error("Ya existe la libreria redirect!");
    }
    window.libreria_dos = "Solo para evitar errores al volver a llamar el script"; 
 }());