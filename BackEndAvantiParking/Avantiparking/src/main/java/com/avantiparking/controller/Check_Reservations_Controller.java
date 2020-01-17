package com.avantiparking.controller;

import org.springframework.beans.factory.annotation.Autowired;

import com.avantiparking.repository.Reserve_Repository;
import com.avantiparking.repository.Space_Repository;
import com.avantiparking.repository.UserRepository;
import com.avantiparking.repository.Vehicle_Repository;

public class Check_Reservations_Controller {
	@Autowired
	public Vehicle_Repository vehicle_repository;
	
	@Autowired
	public Space_Repository space_repository;
	
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private Reserve_Repository reserveRepository;
}
