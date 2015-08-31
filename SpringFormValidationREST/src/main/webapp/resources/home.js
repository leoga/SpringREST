/**
 * 
 */

$(document).ready(function() {
	
});

function search(){
	/*var uri = "http://localhost:8080/spring/api/emp/1";
	if(null != form.byname.value){
		var byname = form.byname.value;
	}
	if(null != form.byagelow.value){
		var byagelow = form.byagelow.value;
	}if(null != form.byagehigh.value){
		var byagehigh= form.byagehigh.value;
	}if(null != form.bydatelow.value & null != form.bydatehigh.value){
		var bydatelow= form.bydatelow.value;
		var bydatehigh=form.bydatehigh.value;
	}*/
	//document.form.byname.value;
	//document.form.submit();
	
	
	$('.respuesta').append(document.form.byname.value);
	$('.respuesta').append(document.form.byagelow.value);
	$('.respuesta').append(document.form.byagehigh.value);
	$('.respuesta').append(document.form.bydatelow.value);
	$('.respuesta').append(document.form.bydatehigh.value);
}




function check(v)
{
	 if(v==1){
		 $.ajax({
	            url: "http://localhost:8080/spring/api/emp/1"
	        }).then(function(data) {
	    		  // Obtener la referencia del elemento body
	    		  //var body = document.getElementsById("respuesta");
	    		  var div = document.getElementById("respuesta");
	    		 
	    		  // Crea un elemento <table> y un elemento <tbody>
	    		  var tabla   = document.createElement("table");
	    		  var tblBody = document.createElement("tbody");
	    		  var tblHead = document.createElement("thead");
	    		  var thilera = document.createElement("tr");
	    		  
	    		  var user  = document.createElement("th");
	    		  var name  = document.createElement("th");
	    		  var role  = document.createElement("th");
	    		  
	    		  
	  		      var textname = document.createTextNode("Name");
			      var textrole = document.createTextNode("Role");
			      var textuser = document.createTextNode("User");
			      
			    // Crea las hileras de la tabla
			      
			      user.appendChild(textuser);
	    		  name.appendChild(textname);
	    		  role.appendChild(textrole);
	    		  
	    		  thilera.appendChild(user);
	    		  thilera.appendChild(name);
	    		  thilera.appendChild(role);

	    		  tblHead.appendChild(thilera);
	    		  // Crea las celdas
		    		  var hilera = document.createElement("tr");
		    		  var user = document.createTextNode(data.user);
		  		      var name = document.createTextNode(data.name);
				      var role = document.createTextNode(data.role);

	    		    // Crea las hileras de la tabla
	    			for(var j = 0; j < 4; j++){
	    				if(j==0){
		    		        var tduser = document.createElement("td");  
		    		        tduser.appendChild(user);
		    		        hilera.appendChild(tduser);
	    				}else if(j==1){
	    					var tdname = document.createElement("td");  
	    					tdname.appendChild(name);
	    					hilera.appendChild(tdname);
	    				}else if(j==2){
	    					var tdrole = document.createElement("td");  
	    					tdrole.appendChild(role);
	    					hilera.appendChild(tdrole);
	    				}
	    			}
	    				
	    			tblBody.appendChild(hilera);
	    		 
	    		    // agrega la hilera al final de la tabla (al final del elemento tblbody)
	    		    //tblBody.appendChild(hilera);
	    		 
	    		  // posiciona el <tbody> debajo del elemento <table>
	    		  tabla.appendChild(tblHead)
	    		  tabla.appendChild(tblBody);
	    		  // appends <table> into <body>
	    		  div.appendChild(tabla);
	    		  // modifica el atributo "border" de la tabla y lo fija a "2";
	    		  tabla.setAttribute("border", "2");
	    		  tabla.setAttribute("class", "table table-bordered table-hover table-condensed tablesorter");
	        });
	 }
	 if (v==2){
	        $.ajax({
	            url: "http://localhost:8080/spring/api/emp"
	        }).then(function(data) {
	    		  // Obtener la referencia del elemento body
	    		  //var body = document.getElementsById("respuesta");
	    		  var div = document.getElementById("respuesta");
	    		 
	    		  // Crea un elemento <table> y un elemento <tbody>
	    		  var tabla   = document.createElement("table");
	    		  var tblBody = document.createElement("tbody");
	    		  var tblHead = document.createElement("thead");
	    		  var thilera = document.createElement("tr");
	    		  
	    		  var user  = document.createElement("th");
	    		  var name  = document.createElement("th");
	    		  var role  = document.createElement("th");
	    		  
	    		  
	  		      var textname = document.createTextNode("Name");
			      var textrole = document.createTextNode("Role");
			      var textuser = document.createTextNode("User");
			      
			    // Crea las hileras de la tabla
			      
			      user.appendChild(textuser);
	    		  name.appendChild(textname);
	    		  role.appendChild(textrole);
	    		  
	    		  thilera.appendChild(user);
	    		  thilera.appendChild(name);
	    		  thilera.appendChild(role);

	    		  tblHead.appendChild(thilera);
	    		  // Crea las celdas
	    		  for (var i = 0; i < data.length; i++) {
		    		  var hilera = document.createElement("tr");
		    		  var user = document.createTextNode(data[i].user);
		  		      var name = document.createTextNode(data[i].name);
				      var role = document.createTextNode(data[i].role);

	    		    // Crea las hileras de la tabla
	    			for(var j = 0; j < 4; j++){
	    				if(j==0){
		    		        var tduser = document.createElement("td");  
		    		        tduser.appendChild(user);
		    		        hilera.appendChild(tduser);
	    				}else if(j==1){
	    					var tdname = document.createElement("td");  
	    					tdname.appendChild(name);
	    					hilera.appendChild(tdname);
	    				}else if(j==2){
	    					var tdrole = document.createElement("td");  
	    					tdrole.appendChild(role);
	    					hilera.appendChild(tdrole);
	    				}
	    			}
	    				
	    			tblBody.appendChild(hilera);
	    		}
	    		 
	    		    // agrega la hilera al final de la tabla (al final del elemento tblbody)
	    		    //tblBody.appendChild(hilera);
	    		 
	    		  // posiciona el <tbody> debajo del elemento <table>
	    		  tabla.appendChild(tblHead)
	    		  tabla.appendChild(tblBody);
	    		  // appends <table> into <body>
	    		  div.appendChild(tabla);
	    		  // modifica el atributo "border" de la tabla y lo fija a "2";
	    		  tabla.setAttribute("id", "employeestable");
	    		  tabla.setAttribute("border", "2");
	    		  tabla.setAttribute("class", "table table-bordered table-hover table-condensed tablesorter");
	    		  $("#employeestable").tablesorter();
	        });
	 }if (v==3){		 
	        $.ajax({
	            url: "http://localhost:8080/spring/api/cust/1"
	        }).then(function(data) {
	    		  // Obtener la referencia del elemento body
	    		  //var body = document.getElementsById("respuesta");
	    		  var div = document.getElementById("respuesta");
	    		 
	    		  // Crea un elemento <table> y un elemento <tbody>
	    		  var tabla   = document.createElement("table");
	    		  var tblBody = document.createElement("tbody");
	    		  var tblHead = document.createElement("thead");
	    		  var thilera = document.createElement("tr");
	    		  
	    		  var name  = document.createElement("th");
	    		  var email  = document.createElement("th");
	    		  var age  = document.createElement("th");
	    		  var gender  = document.createElement("th");
	    		  var birthday  = document.createElement("th");
	    		  var phone  = document.createElement("th");
	    		  
	  		      var textname = document.createTextNode("Name");
			      var textemail = document.createTextNode("Email");
			      var textage = document.createTextNode("Age");
			      var textgender = document.createTextNode("Gender");
			      var textbirthday = document.createTextNode("Birthday");
			      var textphone = document.createTextNode("Phone");
			      
			    // Crea las hileras de la tabla
			      
	    		  name.appendChild(textname);
	    		  email.appendChild(textemail);
	    		  age.appendChild(textage);
	    		  gender.appendChild(textgender);
	    		  birthday.appendChild(textbirthday);
	    		  phone.appendChild(textphone);
	    		  thilera.appendChild(name);
	    		  thilera.appendChild(email);
	    		  thilera.appendChild(age);
	    		  thilera.appendChild(gender);
	    		  thilera.appendChild(birthday);
	    		  thilera.appendChild(phone);
	    		  tblHead.appendChild(thilera);
	    		  // Crea las celdas
		    		  var hilera = document.createElement("tr");
		  		      var nombre = document.createTextNode(data.name);
				      var email = document.createTextNode(data.email);
				      var age = document.createTextNode(data.age);
				      var gender = document.createTextNode(data.gender);
				      var birthday = document.createTextNode(data.birthday);
				      var phone = document.createTextNode(data.phone);
	    		    // Crea las hileras de la tabla
	    			for(var j = 0; j < 6; j++){
	    				if(j==0){
		    		        var tdnombre = document.createElement("td");  
		    		        tdnombre.appendChild(nombre);
		    		        hilera.appendChild(tdnombre);
	    				}else if(j==1){
	    					var tdemail = document.createElement("td");  
	    					tdemail.appendChild(email);
	    					hilera.appendChild(tdemail);
	    				}else if(j==2){
	    					var tdage = document.createElement("td");  
	    					tdage.appendChild(age);
	    					hilera.appendChild(tdage);
	    				}else if(j==3){
	    					var tdgender = document.createElement("td");  
	    					tdgender.appendChild(gender);
	    					hilera.appendChild(tdgender);
	    				}else if(j==4){
	    					var tdbirthday = document.createElement("td");  
	    					tdbirthday.appendChild(birthday);
	    					hilera.appendChild(tdbirthday);
	    				}else if(j==5){
	    					var tdphone = document.createElement("td");
	    					tdphone.appendChild(phone);
	    					hilera.appendChild(tdphone);
	    				}
	    			}
	    			tblBody.appendChild(hilera);
	    		 
	    		    // agrega la hilera al final de la tabla (al final del elemento tblbody)
	    		    //tblBody.appendChild(hilera);
	    		 
	    		  // posiciona el <tbody> debajo del elemento <table>
	    		  tabla.appendChild(tblHead)
	    		  tabla.appendChild(tblBody);
	    		  // appends <table> into <body>
	    		  div.appendChild(tabla);
	    		  // modifica el atributo "border" de la tabla y lo fija a "2";
	    		  tabla.setAttribute("border", "2");
	    		  tabla.setAttribute("class", "table table-bordered table-hover table-condensed tablesorter");

	        });
	    } else if (v==4){
        $.ajax({
            url: "http://localhost:8080/spring/api/cust"
        }).then(function(data) {
    		  // Obtener la referencia del elemento body
    		  //var body = document.getElementsById("respuesta");
    		  var div = document.getElementById("respuesta");
    		 
    		  // Crea un elemento <table> y un elemento <tbody>
    		  var tabla   = document.createElement("table");
    		  var tblBody = document.createElement("tbody");
    		  var tblHead = document.createElement("thead");
    		  var thilera = document.createElement("tr");
    		  
    		  var name  = document.createElement("th");
    		  var email  = document.createElement("th");
    		  var age  = document.createElement("th");
    		  var gender  = document.createElement("th");
    		  var birthday  = document.createElement("th");
    		  var phone  = document.createElement("th");
    		  
  		      var textname = document.createTextNode("Name");
		      var textemail = document.createTextNode("Email");
		      var textage = document.createTextNode("Age");
		      var textgender = document.createTextNode("Gender");
		      var textbirthday = document.createTextNode("Birthday");
		      var textphone = document.createTextNode("Phone");
		      
		    // Crea las hileras de la tabla
		      
    		  name.appendChild(textname);
    		  email.appendChild(textemail);
    		  age.appendChild(textage);
    		  gender.appendChild(textgender);
    		  birthday.appendChild(textbirthday);
    		  phone.appendChild(textphone);
    		  thilera.appendChild(name);
    		  thilera.appendChild(email);
    		  thilera.appendChild(age);
    		  thilera.appendChild(gender);
    		  thilera.appendChild(birthday);
    		  thilera.appendChild(phone);
    		  tblHead.appendChild(thilera);
    		  // Crea las celdas
    		  for (var i = 0; i < data.length; i++) {
	    		  var hilera = document.createElement("tr");
	  		      var nombre = document.createTextNode(data[i].name);
			      var email = document.createTextNode(data[i].email);
			      var age = document.createTextNode(data[i].age);
			      var gender = document.createTextNode(data[i].gender);
			      var birthday = document.createTextNode(data[i].birthday);
			      var phone = document.createTextNode(data[i].phone);
    		    // Crea las hileras de la tabla
    			for(var j = 0; j < 6; j++){
    				if(j==0){
	    		        var tdnombre = document.createElement("td");  
	    		        tdnombre.appendChild(nombre);
	    		        hilera.appendChild(tdnombre);
    				}else if(j==1){
    					var tdemail = document.createElement("td");  
    					tdemail.appendChild(email);
    					hilera.appendChild(tdemail);
    				}else if(j==2){
    					var tdage = document.createElement("td");  
    					tdage.appendChild(age);
    					hilera.appendChild(tdage);
    				}else if(j==3){
    					var tdgender = document.createElement("td");  
    					tdgender.appendChild(gender);
    					hilera.appendChild(tdgender);
    				}else if(j==4){
    					var tdbirthday = document.createElement("td");  
    					tdbirthday.appendChild(birthday);
    					hilera.appendChild(tdbirthday);
    				}else if(j==5){
    					var tdphone = document.createElement("td");
    					tdphone.appendChild(phone);
    					hilera.appendChild(tdphone);
    				}
    			}
    			tblBody.appendChild(hilera);
    		}
    		 
    		    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    		    //tblBody.appendChild(hilera);
    		 
    		  // posiciona el <tbody> debajo del elemento <table>
    		  tabla.appendChild(tblHead)
    		  tabla.appendChild(tblBody);
    		  // appends <table> into <body>
    		  div.appendChild(tabla);
    		  // modifica el atributo "border" de la tabla y lo fija a "2";
    		  tabla.setAttribute("id", "customerstable");
    		  tabla.setAttribute("border", "2");
    		  tabla.setAttribute("class", "table table-bordered table-hover table-condensed tablesorter");
    		  $("#customerstable").tablesorter();
        });
    }
	   else if(v==5){
		   
		   var page = document.form.page.value;
		   var uri = "http://localhost:8080/spring/api/emp/1/customer/search?page="+page;
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
		   $.ajax({
	            url: uri
	        }).then(function(data) {
	    		  // Obtener la referencia del elemento body
	    		  //var body = document.getElementsById("respuesta");
	    		  var div = document.getElementById("respuesta");
	    		 
	    		  // Crea un elemento <table> y un elemento <tbody>
	    		  var tabla   = document.createElement("table");
	    		  var tblBody = document.createElement("tbody");
	    		  var tblHead = document.createElement("thead");
	    		  var thilera = document.createElement("tr");
	    		  
	    		  var name  = document.createElement("th");
	    		  var email  = document.createElement("th");
	    		  var age  = document.createElement("th");
	    		  var gender  = document.createElement("th");
	    		  var birthday  = document.createElement("th");
	    		  var phone  = document.createElement("th");
	    		  
	  		      var textname = document.createTextNode("Name");
			      var textemail = document.createTextNode("Email");
			      var textage = document.createTextNode("Age");
			      var textgender = document.createTextNode("Gender");
			      var textbirthday = document.createTextNode("Birthday");
			      var textphone = document.createTextNode("Phone");
			      
			    // Crea las hileras de la tabla
			      
	    		  name.appendChild(textname);
	    		  email.appendChild(textemail);
	    		  age.appendChild(textage);
	    		  gender.appendChild(textgender);
	    		  birthday.appendChild(textbirthday);
	    		  phone.appendChild(textphone);
	    		  thilera.appendChild(name);
	    		  thilera.appendChild(email);
	    		  thilera.appendChild(age);
	    		  thilera.appendChild(gender);
	    		  thilera.appendChild(birthday);
	    		  thilera.appendChild(phone);
	    		  tblHead.appendChild(thilera);
	    		  // Crea las celdas
	    		  for (var i = 0; i < data.length; i++) {
		    		  var hilera = document.createElement("tr");
		  		      var nombre = document.createTextNode(data[i].name);
				      var email = document.createTextNode(data[i].email);
				      var age = document.createTextNode(data[i].age);
				      var gender = document.createTextNode(data[i].gender);
				      var birthday = document.createTextNode(data[i].birthday);
				      var phone = document.createTextNode(data[i].phone);
	    		    // Crea las hileras de la tabla
	    			for(var j = 0; j < 6; j++){
	    				if(j==0){
		    		        var tdnombre = document.createElement("td");  
		    		        tdnombre.appendChild(nombre);
		    		        hilera.appendChild(tdnombre);
	    				}else if(j==1){
	    					var tdemail = document.createElement("td");  
	    					tdemail.appendChild(email);
	    					hilera.appendChild(tdemail);
	    				}else if(j==2){
	    					var tdage = document.createElement("td");  
	    					tdage.appendChild(age);
	    					hilera.appendChild(tdage);
	    				}else if(j==3){
	    					var tdgender = document.createElement("td");  
	    					tdgender.appendChild(gender);
	    					hilera.appendChild(tdgender);
	    				}else if(j==4){
	    					var tdbirthday = document.createElement("td");  
	    					tdbirthday.appendChild(birthday);
	    					hilera.appendChild(tdbirthday);
	    				}else if(j==5){
	    					var tdphone = document.createElement("td");
	    					tdphone.appendChild(phone);
	    					hilera.appendChild(tdphone);
	    				}
	    			}
	    			tblBody.appendChild(hilera);
	    		}
	    		 
	    		    // agrega la hilera al final de la tabla (al final del elemento tblbody)
	    		    //tblBody.appendChild(hilera);
	    		 
	    		  // posiciona el <tbody> debajo del elemento <table>
	    		  tabla.appendChild(tblHead)
	    		  tabla.appendChild(tblBody);
	    		  // appends <table> into <body>
	    		  div.appendChild(tabla);
	    		  // modifica el atributo "border" de la tabla y lo fija a "2";
	    		  tabla.setAttribute("id", "customerstablesearch");
	    		  tabla.setAttribute("border", "2");
	    		  tabla.setAttribute("class", "table table-bordered table-hover table-condensed tablesorter");
	    		  $("#customerstablesearch").tablesorter();
	        });
		      
		      
		   
	   }
}