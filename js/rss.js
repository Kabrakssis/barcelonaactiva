var i=1;

//var paginabcn= "http://www.barcelonactiva.cat/barcelonactiva/es/activitatsRSS.do?portal=1&idioma=2&codiLinia=5&data=&mesN=7&disponibilitat=1";

document.getElementById("btn-next").addEventListener("click",llamadapag);


function llamadapag(){
    alert("asda");
    $.ajax({
        
        url:"http://www.barcelonactiva.cat/barcelonactiva/es/activitatsRSS.do?portal=1&idioma=2&codiLinia=5&data=&mesN=7&disponibilitat=1",
        success : function(result){alert(result);}
    });
    
}


/*document.getElementById("btn-next").onclick=function(){
    llamadacursos();
}
    function llamadacursos(){
        cursosdia(paginabcn,"cap_content",i);
    }

function cursosdia(url, id_contenedor, N){
    var paguina_requerida=false;
   
    paguina_requerida.onreadystatechange=function(){
        alert("funcion carga");
        cargarpagina(paguina_requerida,"cap_content",i);
    }
}*/

/*function cargarpagina(pagina_requerida, id_contenedor,N){
	if (pagina_requerida.readyState == 4 && (pagina_requerida.status==200 || window.location.href.indexOf("http")==-1)){
		//usamos la propiedad responseXML: devuelve datos por el servidor en forma de documento XML
		var xml = pagina_requerida.responseXML;
		//encontramos el total de items en el RSS
		var limit = xml.getElementsByTagName('item').length;
		var rss = "";
		//for de 2 ciclos, para mostrar 2 entradas a la vez
		for (var l=N;l<=N+1;l++){
			//cogemos el titulo del primer item, luego del segundo, y así...
			var title = xml.getElementsByTagName('title').item(l).firstChild.data;
			var url = xml.getElementsByTagName('link').item(l).firstChild.data;
			var description = xml.getElementsByTagName('description').item(l).firstChild.data;
			var pubguid = xml.getElementsByTagName('guid').item(l).firstChild.data;
			//esto es para cortar el +0000 de la fecha en WordPress
			var guid = pubguid.split(" +");
			//sumamos las variables a nuestro string
			rss = rss+"<fecha>"+guid[0]+"<fecha><br/><titulo>"+title+"</titulo><br/><descripcion>"+description+"</descripcion>";
			if (limit==l)
			//si nos pasamos del limite, la cortamos
				break;
		}
		//incrementamos la variable global
		i=i+1;
		//si nos pasamos del límite, volvemos a empezar
		if (i>limit)
			i=1;
		//metemos el string + el boton en el div-id que corresponde
		document.getElementById(id_contenedor).innerHTML=rss;
	//un pequeño mensaje para avisar que se está cargando la info
	}else if (pagina_requerida.readyState == 1)
		document.getElementById(id_contenedor).innerHTML="<load>Cargando...</load>"
}*/