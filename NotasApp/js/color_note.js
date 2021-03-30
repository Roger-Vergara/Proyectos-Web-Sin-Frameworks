 
 (window.onload = function(){

    //Cambiar los colores de las notas
    if(window.libreria == undefined){
    
        let elemLi = document.getElementsByTagName("li");
        let h2 = document.querySelectorAll("li > h2");
        let p1 = document.querySelectorAll(".f");
        let p2 = document.querySelectorAll(".p");
        let p3 = document.querySelectorAll(".h");
        
        window.addEventListener("click",()=>{

            let colorF = document.getElementById("color").value;
            let colorL = document.getElementById("color_letra").value;
          
            for(let i=0;i<elemLi.length;i++){
                
                elemLi[i].style.transition = "all 180ms ease 0s";
                elemLi[i].style.backgroundColor=colorF;
                h2[i].style.transition="color 180ms ease 0s";
                p1[i].style.transition="color 180ms ease 0s";
                p2[i].style.transition="color 180ms ease 0s";
                p3[i].style.transition="color 180ms ease 0s";
                h2[i].style.color=colorL;
                p1[i].style.color=colorL;
                p2[i].style.color=colorL;
                p3[i].style.color=colorL;
                
            }

        },false);
       
    } else {
        console.error("Ya existe la libreria color_note!");
    }
    window.libreria = "Solo para evitar errores al volver a llamar el script";
 }());