
let parrafo = document.querySelectorAll("div > input")[0];

  	parrafo.addEventListener('dragenter', handleDragEnter, false); //Entrada a otro objeto
  	parrafo.addEventListener('dragleave', handleDragLeave, false);
  	parrafo.addEventListener('drop', handleDrop, false);
  	parrafo.addEventListener('change', changeTextAndImage, false);
	
	//Cuando entra por primera ves en otro objeto
	function handleDragEnter(e) { 
  		document.getElementsByTagName("div")[0].classList.add('handleDragEnterDiv'); 
	}

	//Para el elemento de destino anterior (Cuando se arrastra y sale de un elemento)
	function handleDragLeave(e) { 
  		document.getElementsByTagName("div")[0].classList.remove('handleDragEnterDiv');  
	}


	//Cuando se suelta el objeto arrastrado en otro
	function handleDrop(e) {
 		if (e.stopPropagation) {
    		e.stopPropagation(); //Impide la redirección de algunos navegadores
  		}
  		//...		
  		document.getElementsByTagName("div")[0].classList.remove('handleDragEnterDiv'); 

  		return false;
	}

	//El cambio del texto se debe realizar una vez se cambio algo en el input
	//del formulario
	function changeTextAndImage(e){

		let text = document.getElementsByTagName("input")[0];
		let img = document.getElementsByTagName("img")[0];
			
		setTimeout(function(){
			img.style.opacity = '1';
		},650);

		try {

			img.src = URL.createObjectURL(text.files[0]);
			img.width = 100; //Le da un tamaño
			img.height = 56; //Un alto
			img.style.opacity = '0';
			document.getElementsByTagName("p")[0].textContent = text.files[0].name;

		} catch(e) {
			img.src = "#";
			setTimeout(function(){
				img.style.opacity = '0';
			},660);
			document.getElementsByTagName("p")[0].textContent = "Drop files here";
		}			
			
	}	