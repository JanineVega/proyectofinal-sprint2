function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

var mostrarcoders= function(){
	var divtext = document.getElementById(divtexte);
	if (divtext.style.display == "block" ) {
		divtext.style.display = "none";
	} else{
		divtext.style.display = "block";
	}
}
//----------Botones principales Sprint---------------------
var mostarOcultar = function(divtexte) {
	var divtext = document.getElementById(divtexte);
	if (divtext.style.display == "block" ) {
		divtext.style.display = "none";
	} else{
		divtext.style.display = "block";
	}
}

//-----------Evaluación de resultados--------------------------
var resultado=document.getElementById("resultado");
var preg1=document.getElementById("form1");
var res1=document.getElementById("q1");
var res2=document.getElementById("qq");
var res3=document.getElementById("qb");
var cont=0;
function resultadoQuiz(){
	if(res1.value==2){
		cont =cont+1;
	}else{
		cont =cont+0;
	}
	if (res2.value==1) {
		cont=cont+1;
	}else{
		cont=cont+0;
	}
	if(res3.value==2){
		cont=cont+1;
	}else{
		cont=cont+0;
	}
	console.log(cont);
}
