package com.journaldev.spring.form.controllers;

public class RestURIConstants {
	
	/*EMPLOYEES*/
	
	public static final String DUMMY_EMP = "/api/emp/dummy";
	public static final String GET_EMP = "/api/emp/{id}";
	public static final String GET_CUSTOMERS_EMP = "/api/emp/{id}/customer";
	public static final String CREATE_CUSTOMER_EMP = "/api/emp/{id}/customer";
	public static final String EDIT_CUSTOMER_EMP = "/api/emp/{id}/customer/{idcust}";
	public static final String GET_CUSTOMER_EMP = "/api/emp/{id}/customer/{idcust}";
	public static final String DELETE_CUSTOMER_EMP = "/api/emp/{id}/customer/{idcust}";
	public static final String GET_ALL_EMP = "/api/emp";
	public static final String GET_SEARCH_CUST = "/api/emp/{id}/customer/search";
	public static final String CREATE_EMP = "/api/emp";
	public static final String EDIT_EMP   = "/api/emp/{id}";
	public static final String DELETE_EMP = "/api/emp/{id}";
	
	/*CUSTOMERS*/
	
	public static final String CREATE_CUST = "/api/cust";
	public static final String GET_CUST    = "/api/cust/{id}";
	public static final String EDIT_CUST    = "/api/cust/{id}";
	public static final String GET_ALL_CUST = "/api/cust";
}
