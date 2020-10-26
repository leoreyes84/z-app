package com.portfolio.restdemo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "portfolio")
public class Portfolio {
	
	@Id
	@Column(name = "idportfolio", nullable = false, unique = true)
	private int id;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "image_url")
	private String imageUrl;
	
	@Column(name = "twitter_user_name")
	private String twitterUserName;
	
	@Column(name = "title")
	private String title;
	

}
