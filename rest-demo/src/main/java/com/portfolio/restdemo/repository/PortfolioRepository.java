package com.portfolio.restdemo.repository;

import org.springframework.stereotype.Repository;

import com.portfolio.restdemo.model.Portfolio;

import org.springframework.data.repository.CrudRepository;

@Repository
public interface PortfolioRepository extends CrudRepository<Portfolio, Integer>{

}
