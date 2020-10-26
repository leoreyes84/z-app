package com.portfolio.restdemo.controller;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.restdemo.dto.PortfolioDto;
import com.portfolio.restdemo.model.Portfolio;
import com.portfolio.restdemo.service.PortfolioService;

import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
@RequestMapping("/portfolio")
public class PortfolioController {

	@Autowired
	private PortfolioService portfolioService;
	
	@Autowired
    private ModelMapper modelMapper;

	@GetMapping("/{idPortfolio}")
	public ResponseEntity<Portfolio> getPortfolio(@PathVariable String idPortfolio) {
		log.info("Getting portfolio id: {}", idPortfolio);

		final Optional<Portfolio> portfolio = portfolioService.getPortfolio(idPortfolio);

		return new ResponseEntity<>(portfolio.orElse(null), HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<Portfolio> updatePortfolio(@RequestBody PortfolioDto portfolio) {
		log.info("Updating portfolio: {}", portfolio);

		return new ResponseEntity<>(portfolioService.updatePortfolio(convert(portfolio)), HttpStatus.OK);
	}
	
	private Portfolio convert(PortfolioDto customer) {
        return modelMapper.map(customer, Portfolio.class);
    }

}
