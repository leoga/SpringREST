package com.journaldev.spring.form.search;
import java.util.List;
import com.journaldev.spring.form.model.Customer;


public class Page {
	
	PageInfo pageInfo;
	List<Customer> content;
	
	public Page() {
		// TODO Auto-generated constructor stub
	}
	
	
	public Page(final PageInfo pageInfo, final List<Customer> content) {
		// TODO Auto-generated constructor stub
		this.pageInfo = pageInfo;
		this.content  = content;
	}
	
	public void setPageInfo(PageInfo pageInfo) {
		this.pageInfo = pageInfo;
	}
	
	public void setContent(List<Customer> content) {
		this.content = content;
	}
	
	public PageInfo getPageInfo() {
		return pageInfo;
	}
	
	public List<Customer> getContent() {
		return content;
	}
	
}
