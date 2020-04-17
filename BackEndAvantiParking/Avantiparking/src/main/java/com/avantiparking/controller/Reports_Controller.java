package com.avantiparking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.avantiparking.model.Parking_lot;
import com.avantiparking.model.Reserve;
import com.avantiparking.repository.Headquarter_Repository;
import com.avantiparking.repository.Reserve_Repository;
import com.avantiparking.repository.Reserve_detail_Repository;
import com.avantiparking.repository.Space_Repository;
import com.avantiparking.repository.UserRepository;
import com.avantiparking.repository.Vehicle_Repository;
import com.avantiparking.repository.Zone_Repository;
@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,
		RequestMethod.DELETE})
@RequestMapping("/api")
public class Reports_Controller {
	@Autowired
	public Vehicle_Repository vehicle_repository;
	
	@Autowired
	public Space_Repository space_repository;
	
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private Reserve_Repository reserveRepository;
	
    @Autowired
	private Headquarter_Repository headquarter_repository;
    
	@Autowired
	public Zone_Repository zone_repository;
	
    @Autowired
    private Reserve_detail_Repository reserve_detail_Repository;
    
	@GetMapping("/reservations")
	public List<Reserve> getAllParking_lot() {
		return reserveRepository.findAll();
	}
	
	
}
