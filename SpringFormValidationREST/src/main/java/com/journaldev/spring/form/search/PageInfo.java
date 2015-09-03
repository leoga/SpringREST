package com.journaldev.spring.form.search;

public class PageInfo {
	
	int pageNumber;
	int pageSize;
	int numberOfPages;
	int numberOfElements;
	
	public PageInfo() {
		// TODO Auto-generated constructor stub
	}
	
	public PageInfo(final int pageNumber, final int pageSize, final int numberOfPages, final int numberOfElements) {
		// TODO Auto-generated constructor stub
		this.pageNumber        = pageNumber;
		this.pageSize          = pageSize;
		this.numberOfPages     = numberOfPages;
		this.numberOfElements = numberOfElements;
	}
	
	
	public void setPageNumber(int pageNumber) {
		this.pageNumber = pageNumber;
	}
	
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	
	public void setNumberOfPages(int numberOfPages) {
		this.numberOfPages = numberOfPages;
	}
	
	public void setNumberOfElements(int numberOfElements) {
		this.numberOfElements = numberOfElements;
	}
	
	public int getPageNumber() {
		return pageNumber;
	}
	
	public int getPageSize() {
		return pageSize;
	}
	
	public int getNumberOfPages() {
		return numberOfPages;
	}
	
	public int getNumberOfElements() {
		return numberOfElements;
	}
	
	
}
