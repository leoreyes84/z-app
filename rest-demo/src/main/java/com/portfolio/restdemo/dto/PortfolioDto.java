package com.portfolio.restdemo.dto;

import lombok.Data;

@Data
public class PortfolioDto {
	
	private int id;
	private String description;
	private String imageUrl;
	private String twitterUserName;
	private String title;

}
