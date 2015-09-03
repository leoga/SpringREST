/**
 * 
 */

$(document).ready(function() {
	
});

function check(v)
{
	 if(v==1){
		 $.ajax({
	            url: "http://localhost:8080/spring/api/emp/1"
	        }).then(function(data) {
	        	var param = ["user", "name", "role"];
	        	pintarObjeto(data, param);
	        });
	 }
	 if (v==2){
	        $.ajax({
	            url: "http://localhost:8080/spring/api/emp"
	        }).then(function(data) {
	        	var param = ["user", "name", "role"];
	        	hacerTabla(data, param);
	        });
	 }if (v==3){		 
	        $.ajax({
	            url: "http://localhost:8080/spring/api/cust/1"
	        }).then(function(data) {
	        	var param = ["name", "email", "age", "gender", "birthday", "phone"];
	        	pintarObjeto(data, param)
	        });
	 } else if (v==4){
	        $.ajax({
	            url: "http://localhost:8080/spring/api/cust"
	        }).then(function(data) {
	        	var param = ["name", "email", "age", "gender", "birthday", "phone"];
	        	hacerTabla(data, param);
	
	        });
    }
	   else if(v==5){
		   
		   var page = "&page="+1;
		   var uri = "http://localhost:8080/spring/api/emp/1/customer/search?";
		   if( null != document.form.byname.value){
			   var byname = "&byname="+document.form.byname.value;
			   uri = uri + byname;
		   }if( null != document.form.byagelow.value && null != document.form.byagehigh.value){
			   var byagelow = "&byagelow="+document.form.byagelow.value;
			   var byagehigh = "&byagehigh="+document.form.byagehigh.value;
			   uri = uri + byagelow + byagehigh;
		   }if( null != document.form.bydatelow.value && null != document.form.bydatehigh.value){
			   var bydatelow = "&bydatelow="+document.form.bydatelow.value;
			   var bydatehigh = "&bydatehigh="+document.form.bydatehigh.value;
			   uri = uri + bydatelow + bydatehigh;
		   }
		   uri = uri + page;
		   $.ajax({
	            url: uri
	        }).then(function(data) {
	        	 for(var i=0; i<data.content.length; i++){
	        	  console.log("List: "+data.content[i].name);
	        	  //console.log("Page: "+data.pageInfo)
	        	 }
	        	 var param = ["name", "email", "age", "gender", "birthday", "phone"];
	        	  hacerTabla(data.content, param);
	        	  console.log("Antes: "+uri);
	        	  var lastindex = uri.lastIndexOf('&'); 
	        	  uri = uri.substring(0, lastindex);
	        	  console.log("Final: "+uri);
	    		  paginar(data.pageInfo, uri);
	    		  active(data.pageInfo)
	        });
		      
		      
		   
	   }
}

function pintarObjeto(o, param) {
	if(null != document.getElementById("resultTable")){
		$("#resultTable").remove();
	}
    var div = document.getElementById("respuesta");
	var tabla   = document.createElement("table");
	var tblBody = document.createElement("tbody");
	var tblHead = document.createElement("thead");
	var thilera = document.createElement("tr");
	
	for (var key in o) {
		for(var j = 0; j<param.length; j++){
			if(key==param[j]){
				if (o.hasOwnProperty(key)) {
					//if(key=="idemployee"){
					var thkey = document.createElement("th");
					var textkey = document.createTextNode(key);
					thkey.appendChild(textkey);
					thilera.appendChild(thkey);	
				}
			}
		}
	} 

	var hilera = document.createElement("tr");
	for (var key in o){
		for(var j = 0; j<param.length; j++){
			console.log("size: "+param.length);
			if(key==param[j]){
				if(o.hasOwnProperty(key)){
					var datatd = document.createElement("td");
					var textdata = document.createTextNode(o[key]);
					datatd.appendChild(textdata);
				}	
				hilera.appendChild(datatd);
			}
			
		}
		
	}	
	tblBody.appendChild(hilera);
	
	tblHead.appendChild(thilera);
	tabla.appendChild(tblHead);
	tabla.appendChild(tblBody);
	div.appendChild(tabla);
	tabla.setAttribute("id", "resultTable");
	tabla.setAttribute("border", "2");
	tabla.setAttribute("class", "table table-bordered table-hover table-condensed tablesorter");
	$("#resultTable").tablesorter();
	
}
function hacerTabla(data, param){

	if(null != document.getElementById("resultTable")){
		$("#resultTable").remove();
	}
    var div = document.getElementById("respuesta");
	var tabla   = document.createElement("table");
	var tblBody = document.createElement("tbody");
	var tblHead = document.createElement("thead");
	var thilera = document.createElement("tr");

		
	//Pintar Cabeceras
	
	for(var i = 0; i<1; i++){
		var o = data[i];
		// function pintarObjeto(o) {
		for (var key in o) {
			for(var j = 0; j<param.length; j++){
				if(key==param[j]){
					if (o.hasOwnProperty(key)) {
						//if(key=="idemployee"){
						var thkey = document.createElement("th");
						var textkey = document.createTextNode(key);
						thkey.appendChild(textkey);
						thilera.appendChild(thkey);	
					}
				}
			}
		} 
		// fin function pintarObjeto
	}
	
	//Pintar Datos
	for(var i=0; i<data.length; i++){
		var hilera = document.createElement("tr");
		var o = data[i];
		for (var key in o){
			for(var j = 0; j<param.length; j++){
				console.log("size: "+param.length);
				if(key==param[j]){
					if(o.hasOwnProperty(key)){
						var datatd = document.createElement("td");
						var textdata = document.createTextNode(o[key]);
						datatd.appendChild(textdata);
					}	
					hilera.appendChild(datatd);
				}
				
			}
			
		}	
		tblBody.appendChild(hilera);
	}
	
	tblHead.appendChild(thilera);
	tabla.appendChild(tblHead);
	tabla.appendChild(tblBody);
	div.appendChild(tabla);
	tabla.setAttribute("id", "resultTable");
	tabla.setAttribute("border", "2");
	tabla.setAttribute("class", "table table-bordered table-hover table-condensed tablesorter");
	$("#resultTable").tablesorter();
	
}

function active(pageInfo){
	
    if(pageInfo.pageNumber>=3 && pageInfo.pageNumber==pageInfo.numberOfPages){
    	pageNumber = 3;
    }else if(pageInfo.pageNumber>=3){
    	pageNumber = 2;
    }else{
    	pageNumber = pageInfo.pageNumber;
    }
	var liactive = document.getElementsByTagName("li")[pageNumber]
	liactive.setAttribute("class", "active");
}

function paginar(pageInfo, uri){
	
	var count = 0;
	var o = pageInfo;
	
	var pageNumber       = pageInfo.pageNumber;
	var numberOfPages    = pageInfo.numberOfPages;
	var numberOfElements = pageInfo.numberOfElements;
	console.log(pageNumber+" "+numberOfPages+" "+numberOfElements);
	  
	
	if(null != document.getElementById("paginator")){
		var paginator = document.getElementById("paginator");
		$(paginator).remove();
	}
	var div = document.getElementById("paginador");
	var nav = document.createElement("nav");
	nav.setAttribute("id", "paginator")
	var ul   = document.createElement("ul");
	ul.setAttribute("class", "pagination pagination-default");
	var li   = document.createElement("li");
	var a    = document.createElement("a");
	var span = document.createElement("span")
	uriFirst = uri + "&page="+1;
	a.setAttribute("onClick", 'actualizarDatos("'+uriFirst+'")');
	a.setAttribute("aria-label", "First");
	span.setAttribute("aria-hidden", "true")
	var before = document.createTextNode("<<");
	span.appendChild(before);
	a.appendChild(span);
	li.appendChild(a);
	ul.appendChild(li);
	
	if(numberOfPages==1){
		var li = document.createElement("li");
		var a = document.createElement("a");
		uri = uri + "&page="+1;
		a.setAttribute("onClick", 'actualizarDatos("'+uri+'")');
  	    var lastindex = uri.lastIndexOf('&'); 
	    uri = uri.substring(0, lastindex);
		var atext = document.createTextNode(1);
		a.appendChild(atext);
		li.appendChild(a);
		ul.appendChild(li);
	}else{
		for(var i =1; i<4; i++){
			if(pageNumber < 3){
				var li = document.createElement("li");
				var a = document.createElement("a");
				uri = uri + "&page="+i;
				a.setAttribute("onClick", 'actualizarDatos("'+uri+'")');
		  	    var lastindex = uri.lastIndexOf('&'); 
			    uri = uri.substring(0, lastindex);
				var atext = document.createTextNode(i);
				a.appendChild(atext);
				li.appendChild(a);
				ul.appendChild(li);
			}else if(pageNumber >=3){
				var li = document.createElement("li");
				var a = document.createElement("a");
				if(i==1){
					if(pageNumber==numberOfPages){
						var j = numberOfPages-2;
					}else{
						var j = pageNumber-1;
					}
					uri = uri + "&page="+(j);
					a.setAttribute("onClick", 'actualizarDatos("'+uri+'")');
			  	    var lastindex = uri.lastIndexOf('&'); 
				    uri = uri.substring(0, lastindex);
					var atext = document.createTextNode(j);
					a.appendChild(atext);
					li.appendChild(a);
					ul.appendChild(li);
				}if (i==2){
					if(pageNumber==numberOfPages){
						var j = numberOfPages-1;
					}else{
						var j = pageNumber;			
					}
					uri = uri + "&page="+j;
					a.setAttribute("onClick", 'actualizarDatos("'+uri+'")');
			  	    var lastindex = uri.lastIndexOf('&'); 
				    uri = uri.substring(0, lastindex);
					var atext = document.createTextNode(j);
					a.appendChild(atext);
					li.appendChild(a);
					ul.appendChild(li);
				}if(i==3){
					if(pageNumber==numberOfPages){
						var j = numberOfPages;
					}else{
						var j = pageNumber+1;
					}
					uri = uri + "&page="+j;
					a.setAttribute("onClick", 'actualizarDatos("'+uri+'")');
			  	    var lastindex = uri.lastIndexOf('&'); 
				    uri = uri.substring(0, lastindex);
					var atext = document.createTextNode(j);
					a.appendChild(atext);
					li.appendChild(a);
					ul.appendChild(li);
				}
			}

		}
	}
	
	var lilast   = document.createElement("li");
	var alast    = document.createElement("a");
	var spanlast = document.createElement("span")
	uriLast = uri + "&page="+numberOfPages;
	alast.setAttribute("onClick", "actualizarDatos('"+uriLast+"')");
	alast.setAttribute("aria-label", "Last");
	spanlast.setAttribute("aria-hidden", "true")
	var after = document.createTextNode(">>");
	spanlast.appendChild(after);
	alast.appendChild(spanlast);
	lilast.appendChild(alast);
	ul.appendChild(lilast);
	nav.appendChild(ul);
	div.appendChild(nav);
	
}

function actualizarDatos(uri){

	console.log("ActualizarDatos inicial: "+uri);
	$.ajax({
        url: uri
    }).then(function(data) {
    	
    	var param = ["name", "email", "age", "gender", "birthday", "phone"];
  	    hacerTabla(data.content, param);
  	    var lastindex = uri.lastIndexOf('&'); 
  	    uri = uri.substring(0, lastindex);
	    console.log("ActualizarDatos final: "+uri);

  	    paginar(data.pageInfo, uri);
  	    active(data.pageInfo);
    });
}