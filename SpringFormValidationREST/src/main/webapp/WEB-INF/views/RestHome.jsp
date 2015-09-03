<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=utf8" pageEncoding="utf8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="t" tagdir="/WEB-INF/tags" %>
<html>
	<head>

		  <title>Rest Home</title>
		  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		  <script type="text/javascript" src="<c:url value="/resources/home.js"/>"></script>
		  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
		  <script type="text/javascript" src="<c:url value="/resources/jquery-1.11.3.min.js"/>"></script>
		  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
		  <script type="text/javascript" src="<c:url value="/resources/jquery.tablesorter.min.js"/>"></script>
		  <link rel="stylesheet" href="<c:url value="/resources/blue/style.css"/>" type="text/css" media="print, projection, screen" />
		  <link rel="stylesheet" media="all" href="<c:url value="/resources/site.css"/>"> 	  
	</head>
	<body>
<%-- 	<form:form modelAttribute="Searchfields" name="form" action="deletes" method="post">
  	<form:input type="hidden" path="customers" />
	</form:form> --%>
	<form name="form">
	<div class="panel panel-default" id="custwrapp">
			<div class="panel heading" id="wrapp">
				<h5><fmt:message key="hello"/> <s></s> <fmt:message key="set.filters"/></h5>
			</div>
			<div class="form-inline" role="form">
<!-- 			<div class="form-group" id="wrapp">
		    	<label class="control-label">Page:</label> 
		    	<p></p>                
				<input name="page" type="number" class="formlarge form-control" path="page" /> 
		    </div> -->
			<div class="form-group" id="wrapp">
		    	<label class="control-label"><fmt:message key="search.name"/>:</label> 
		    	<p></p>                
				<input name="byname" type="text" class="formlarge form-control" path="byname" placeholder="Introduce your customer's name" /> 
		    </div>
		    <div class="form-group" id="wrapp">
		    	<label class="control-label"><fmt:message key="search.age"/>:</label>    
		    	<p></p>         
				<input name="byagelow" type="number" class="form-size form-control" path="byagelow" placeholder="Introduce your customer's age" />
		    	<input name="byagehigh" type="number" class="form-size form-control" path="byagehigh" placeholder="Introduce your customer's age" />
		    </div>
		    <div class="form-group" id="wrapp">
		    	<label class="control-label"><fmt:message key="search.date"/>:</label>    
		    	<p></p>   
		             
				<input name="bydatelow" type="date" class="form-size form-control" path="bydatelow"  value="${timelow}"/>
		    	<input name="bydatehigh" type="date" class="form-size form-control" path="bydatehigh"   value="${timehigh}"/>
		    </div>
		    </div>
		    <input  class="btn btn-primary" onClick="check(5)" value="<fmt:message key="search"/>" />

	</div>
	</form>
	<div class="panel panel-default" id="custwrapp">
	<div id = "respuesta"></div>
	<p></p>
	<p></p>
	<div class="col-md"></div>
	<div class="col-md" id="paginador" align="right"></div>
	<p></p>
	<p></p>
	<div  aling="center">	
	<table align="center"   width="50%">
		<tr>
	   		<td ><input class="btn btn-primary" type="button" onClick="check(1)" value="Get single Employee"></td>
			<td ><input class="btn btn-primary" type="button" onClick="check(2)" value="Get all Employees"></td>
			<td ><input class="btn btn-primary" type="button" onClick="check(3)" value="Get single Customer"></td>
			<td ><input class="btn btn-primary" type="button" onClick="check(4)"value="Get all Customers"></td> 
			<%-- <td ><input class="btn btn-primary" type="button" onClick="actualizarDatos('http://localhost:8080/spring/api/emp/1/customer/search?&byname=&byagelow=&byagehigh=&bydatelow=2015-08-01&bydatehigh=2015-09-01&page=2')" value="Actualizar tabla"></td> --%>
			<!-- <button class="btn btn-primary" onClick="check(1)" value="Listar Customers"></button> -->
		</tr>
	</table>
	</div>
	</div>
	</body>
</html>