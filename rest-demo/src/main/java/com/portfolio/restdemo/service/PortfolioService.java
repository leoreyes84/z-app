package com.portfolio.restdemo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portfolio.restdemo.model.Portfolio;
import com.portfolio.restdemo.repository.PortfolioRepository;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Service
public class PortfolioService {
	
	
	private final PortfolioRepository portfolioRepository;
	
	@Autowired
	public PortfolioService(PortfolioRepository portfolioRepository) {
		this.portfolioRepository = portfolioRepository;
	}
	
	public Optional<Portfolio> getPortfolio(final String idPortfolio) {
		try {
			
			return portfolioRepository.findById(Integer.parseInt(idPortfolio));
		} catch (Exception e) {
			log.error("Error getting portfolio: cause {}", e.getMessage());
			
			return Optional.empty();
		}
		
	}
	
	public Portfolio updatePortfolio(final Portfolio portfolio) {
		try {
			
			return portfolioRepository.save(portfolio);
		} catch (Exception e) {
			log.error("Error updating portfolio: cause {}", e.getMessage());
			
			return null;
		}
	}

}
