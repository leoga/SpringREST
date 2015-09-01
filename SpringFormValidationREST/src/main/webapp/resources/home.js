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
	        	hacerTabla(data, 2);
	        });
	 }
	 if (v==2){
	        $.ajax({
	            url: "http://localhost:8080/spring/api/emp"
	        }).then(function(data) {
	        	hacerTabla(data, 2);
	        });
	 }if (v==3){		 
	        $.ajax({
	            url: "http://localhost:8080/spring/api/cust/1"
	        }).then(function(data) {
	        	  hacerTabla(data, 1)
	        });
	    } else if (v==4){
        $.ajax({
            url: "http://localhost:8080/spring/api/cust"
        }).then(function(data) {
        	  hacerTabla(data, 1);

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
	        	  hacerTabla(data[1],3);
	        	  console.log("Antes: "+uri);
	        	  var lastindex = uri.lastIndexOf('&'); 
	        	  uri = uri.substring(0, lastindex);
	        	  console.log("Final: "+uri);
	    		  paginar(data[0][0], data[0][1], data[0][2], uri);
	        });
		      
		      
		   
	   }
}

function paginar(start, pages, ncustomers, uri){
	
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
	
	
	if(pages==1){
		var li1   = document.createElement("li");
		li1.setAttribute("class", "active");
		var a1   = document.createElement("a");
		uri = uri + "&page="+1;
		a1.setAttribute("onClick", 'actualizarDatos('+uri+')')
		var atext1 = document.createTextNode("1");
		a1.appendChild(atext1);
		li1.appendChild(a1);
		ul.appendChild(li1);
	}else if(pages==2){
		if(start==1){
			var li1 = document.createElement("li");
			li1.setAttribute("class", "active");
			var a1  = document.createElement("a");
			uri1 = uri + "&page="+start;
			a1.setAttribute("onClick", 'actualizarDatos('+uri1+')');

			var atext1 = document.createTextNode(start);
			a1.appendChild(atext1);
			li1.appendChild(a1);
			ul.appendChild(li1);
			var li2 = document.createElement("li");
			li2.setAttribute("class", "inactive");
			var a2  = document.createElement("a");
			uri2 = uri + "&page="+(start+1);
			a2.setAttribute("onClick", 'actualizarDatos("'+uri2+'")');

			var atext2  = document.createTextNode(start+1);
			a2.appendChild(atext2);
			li2.appendChild(a2);
			ul.appendChild(li2);
		}else{
			var li1 = document.createElement("li");
			li1.setAttribute("class", "inactive");
			var a1  = document.createElement("a");
			uri1 = uri + "&page="+(start-1);
			a1.setAttribute("onClick", 'actualizarDatos("'+uri1+'")');
			var atext1 = document.createTextNode(start-1);
			a1.appendChild(atext1);
			li1.appendChild(a1);
			ul.appendChild(li1);
			var li2 = document.createElement("li");
			li2.setAttribute("class", "active");
			var a2  = document.createElement("a");
			uri2 = uri + "&page="+start;
			a2.setAttribute("onClick", 'actualizarDatos("'+uri2+'")');
			
			var atext2  = document.createTextNode(start);
			a2.appendChild(atext2);
			li2.appendChild(a2);
			ul.appendChild(li2);
		}
	}else if(pages>=3){
		if(start==1){
			var li1 = document.createElement("li");
			li1.setAttribute("class", "active");
			var a1  = document.createElement("a");
			uri1 = uri + "&page="+start;
			a1.setAttribute("onClick", 'actualizarDatos("'+uri1+'")');
			var atext1 = document.createTextNode(start);
			a1.appendChild(atext1);
			li1.appendChild(a1);
			ul.appendChild(li1);
			var li2 = document.createElement("li");
			li2.setAttribute("class", "inactive");
			var a2  = document.createElement("a");
			uri2 = uri + "&page="+(start+1);
			a2.setAttribute("onClick", 'actualizarDatos("'+uri2+'")');
			var atext2  = document.createTextNode(start+1);
			a2.appendChild(atext2);
			li2.appendChild(a2);
			ul.appendChild(li2);
			var li3 = document.createElement("li");
			li3.setAttribute("class", "inactive");
			var a3  = document.createElement("a");
			uri3 = uri + "&page="+(start+2);
			a3.setAttribute("onClick", 'actualizarDatos("'+uri3+'")');
			var atext3  = document.createTextNode(start+2);
			a3.appendChild(atext3);
			li3.appendChild(a3);
			ul.appendChild(li3);
		}else if(start==pages){
			var li1 = document.createElement("li");
			li1.setAttribute("class", "inactive");
			var a1  = document.createElement("a");
			uri1 = uri + "&page="+(start-2);
			a1.setAttribute("onClick", 'actualizarDatos("'+uri1+'")');
			var atext1 = document.createTextNode(start-2);
			a1.appendChild(atext1);
			li1.appendChild(a1);
			ul.appendChild(li1);
			var li2 = document.createElement("li");
			li2.setAttribute("class", "inactive");
			var a2  = document.createElement("a");
			uri2 = uri + "&page="+(start-1);
			a2.setAttribute("onClick", 'actualizarDatos("'+uri2+'")');
			var atext2  = document.createTextNode(start-1);
			a2.appendChild(atext2);
			li2.appendChild(a2);
			ul.appendChild(li2);
			var li3 = document.createElement("li");
			li3.setAttribute("class", "active");
			var a3  = document.createElement("a");
			uri3 = uri + "&page="+start;
			a3.setAttribute("onClick", 'actualizarDatos("'+uri3+'")');
			var atext3  = document.createTextNode(start);
			a3.appendChild(atext3);
			li3.appendChild(a3);
			ul.appendChild(li3);
		}else{
			var li1 = document.createElement("li");
			li1.setAttribute("class", "inactive");
			var a1  = document.createElement("a");
			uri1 = uri + "&page="+(start-1);
			a1.setAttribute("onClick", 'actualizarDatos("'+uri1+'")');
			var atext1 = document.createTextNode(start-1);
			a1.appendChild(atext1);
			li1.appendChild(a1);
			ul.appendChild(li1);
			var li2 = document.createElement("li");
			li2.setAttribute("class", "active");
			var a2  = document.createElement("a");
			uri2 = uri + "&page="+start;
			a2.setAttribute("onClick", 'actualizarDatos("'+uri2+'")');
			var atext2  = document.createTextNode(start);
			a2.appendChild(atext2);
			li2.appendChild(a2);
			ul.appendChild(li2);
			var li3 = document.createElement("li");
			li1.setAttribute("class", "inactive");
			var a3  = document.createElement("a");
			uri3 = uri + "&page="+(start+1);
			a3.setAttribute("onClick", 'actualizarDatos("'+uri3+'")');
			var atext3  = document.createTextNode((start+1));
			a3.appendChild(atext3);
			li3.appendChild(a3);
			ul.appendChild(li3);
		}
	}
	
	var lilast   = document.createElement("li");
	var alast    = document.createElement("a");
	var spanlast = document.createElement("span")
	uriLast = uri + "&page="+pages;
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

function hacerTabla(data, type){

	if(type==1){
				 
		  var div = document.getElementById("respuesta");
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
		  if(data.length>1){
			  
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
				tblBody.appendChild(hilera);
			}
		  }
			
		}else{
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
				tblBody.appendChild(hilera);
			}
		}
		 
		  tabla.appendChild(tblHead);
		  tabla.appendChild(tblBody);

		  div.appendChild(tabla);

		  tabla.setAttribute("id", "customerstable");
		  tabla.setAttribute("border", "2");
		  tabla.setAttribute("class", "table table-bordered table-hover table-condensed tablesorter");
		  $("#customerstable").tablesorter();
	}if (type==2){
		  var div = document.getElementById("respuesta");
 		 
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
		  if(data.length>1){
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
					tblBody.appendChild(hilera);
				}
			  }
		  }else{
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
				tblBody.appendChild(hilera);
			}
		  }
				
		  tabla.appendChild(tblHead)
		  tabla.appendChild(tblBody);

		  div.appendChild(tabla);
		  tabla.setAttribute("id", "employeestable");
		  tabla.setAttribute("border", "2");
		  tabla.setAttribute("class", "table table-bordered table-hover table-condensed tablesorter");
		  $("#employeestable").tablesorter();
	}
	if(type==3){
		 var div = document.getElementById("respuesta");
		 

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
		 

		  tabla.appendChild(tblHead)
		  tabla.appendChild(tblBody);

		  div.appendChild(tabla);

		  tabla.setAttribute("id", "customerstablesearch");
		  tabla.setAttribute("border", "2");
		  tabla.setAttribute("class", "table table-bordered table-hover table-condensed tablesorter");
		  $("#customerstablesearch").tablesorter();
	}

}


function actualizarDatos(uri){

	console.log("Paginador: "+uri);
	$.ajax({
        url: uri
    }).then(function(data) {

	  for (var i = 0; i < data.length; i++) {
  		  //var hilera = document.createElement("tr");
		      var nombre = document.createTextNode(data[1][i].name);
		      var email = document.createTextNode(data[1][i].email);
		      var age = document.createTextNode(data[1][i].age);
		      var gender = document.createTextNode(data[1][i].gender);
		      var birthday = document.createTextNode(data[1][i].birthday);
		      var phone = document.createTextNode(data[1][i].phone);
		    // Crea las hileras de la tabla
			for(var j = 0; j < 6; j++){
				var index;
				if(i==0){
					index = j; 
				}else{
					index = j+6; 
				}
				if(j==0){
  		        var tdnombreN = document.createElement("td");
  		        tdnombreN.appendChild(nombre);
  		        var tdnombre = document.body.getElementsByTagName("td")[index];
  		        tdnombre.parentNode.replaceChild(tdnombreN, tdnombre);
				}else if(j==1){
					var tdemailN = document.createElement("td");
					tdemailN.appendChild(email);
					var tdemail = document.body.getElementsByTagName("td")[index];
					tdemail.parentNode.replaceChild(tdemailN, tdemail);
				}else if(j==2){
					var tdageN = document.createElement("td");
					tdageN.appendChild(age);
					var tdage = document.body.getElementsByTagName("td")[index]; 
					tdage.parentNode.replaceChild(tdageN, tdage);
				}else if(j==3){
					var tdgenderN = document.createElement("td");
					tdgenderN.appendChild(gender);
					var tdgender = document.body.getElementsByTagName("td")[index];
					tdgender.parentNode.replaceChild(tdgenderN, tdgender);
				}else if(j==4){
					var tdbirthdayN = document.createElement("td");
					tdbirthdayN.appendChild(birthday);
					var tdbirthday = document.body.getElementsByTagName("td")[index];
					tdbirthday.parentNode.replaceChild(tdbirthdayN, tdbirthday);
				}else if(j==5){
					var tdphoneN = document.createElement("td");
					tdphoneN.appendChild(phone);
					var tdphone = document.body.getElementsByTagName("td")[index];
					tdphone.parentNode.replaceChild(tdphoneN, tdphone);
				}
			}
		}

	  var lastindex = uri.lastIndexOf('&'); 
  	  uri = uri.substring(0, lastindex);
	  console.log("Paginador: "+uri);
	  paginar(data[0][0], data[0][1], data[0][2], uri);
    });
}