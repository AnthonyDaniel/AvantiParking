package com.avantiparking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.avantiparking.model.Space;
import com.avantiparking.repository.Reserve_Repository;
import com.avantiparking.repository.Space_Repository;
import com.avantiparking.repository.UserRepository;
import com.avantiparking.repository.Vehicle_Repository;

public class Dashboard_Controller {
	@Autowired
	public Vehicle_Repository vehicle_repository;
	
	@Autowired
	public Space_Repository space_repository;
	
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private Reserve_Repository reserveRepository;
    
   /* @GetMapping("/dashboard/{id}")
	public ResponseEntity<String> getAvailableTimes(@PathVariable(value = "id") Long zone) {
		
		return ResponseEntity.ok().body(spaces);
	}*/
}
