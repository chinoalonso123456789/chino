function validar()
{
	
 var resultado1="ninguno";
 var resultado2="ninguno";
 var resultado3="ninguno";
 var resultado4="ninguno";
 var resultado5="ninguno";
 
 var contador=0;

var respuesta1=document.getElementsByName("group1");
var respuesta2=document.getElementsByName("group2");
var respuesta3=document.getElementsByName("group3");
var respuesta4=document.getElementsByName("group4");
var respuesta5=document.getElementsByName("group5");
        // Recorremos todos los valores del radio button para encontrar el
        // seleccionado
        for(var i=0;i<respuesta1.length;i++)
        {
            if(respuesta1[i].checked)
                resultado1=respuesta1[i].value;
        }
		for(var i=0;i<respuesta2.length;i++)
        {
            if(respuesta2[i].checked)
                resultado2=respuesta2[i].value;
        }
		for(var i=0;i<respuesta3.length;i++)
        {
            if(respuesta3[i].checked)
                resultado3=respuesta3[i].value;
        }
		for(var i=0;i<respuesta4.length;i++)
        {
            if(respuesta4[i].checked)
                resultado4=respuesta4[i].value;
        }
		for(var i=0;i<respuesta5.length;i++)
        {
            if(respuesta5[i].checked)
                resultado5=respuesta5[i].value;
        }
 
	if(resultado1=="carmen"){
	    
        document.getElementById("p1").style.backgroundColor="lightgreen";
       contador=contador+1;
    }else{
		
    }
    if(resultado2=="martha"){
	    
        document.getElementById("p2").style.backgroundColor="lightgreen";
        contador=contador+1;
    }else{
		
    }
    if(resultado3=="html"){
	    
        document.getElementById("p3").style.backgroundColor="lightgreen";
        contador=contador+1;
    }else{
		
    }
    if(resultado4=="si"){
	    
        document.getElementById("p4").style.backgroundColor="lightgreen";
        contador=contador+1;
    }else{
		
    }
    if(resultado5=="dominio"){
	    
        document.getElementById("p5").style.backgroundColor="lightgreen";
        contador=contador+1;
    }else{
		
    }

    ganaste(contador);

    
}

function ganaste(num){

if(num==5){
alert("Ganaste amigo!!!!!!!!!!!!!!!!!!!!!!");
}else
alert("Tienes "+num+" respuestas bien");
}

