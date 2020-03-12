package com.avantiparking.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.avantiparking.model.Reserve;
import com.avantiparking.model.Space;
import com.avantiparking.repository.Reserve_Repository;
import com.avantiparking.repository.Space_Repository;
import com.avantiparking.repository.UserRepository;
import com.avantiparking.repository.Vehicle_Repository;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,
		RequestMethod.DELETE})
@RequestMapping("/api")
public class Reserve_Controller {
	@Autowired
	public Vehicle_Repository vehicle_repository;
	
	@Autowired
	public Space_Repository space_repository;
	
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private Reserve_Repository reserveRepository;
    
	@GetMapping("/reserves/u/{user}")
	public List<Reserve> getAllReservationsForUser() {
		//return reserveRepository.findReservationsByUser(user_id);
		return null;
	}
    
	@GetMapping("/reserves_completed_user/{id}")
	public List<Reserve> reservationsCompletedByUser() {
		return null;
	}
	
	@GetMapping("/currentReservations/{id}")
	public List<Reserve> currentReservations() {
		return null;
	}
    /******************************************
	@PostMapping("/reserve")//list?
	public List<Reserve> addReservation(@Valid @RequestBody Reserve reserve) {
		return null;
	}
	**********************************/
	@PostMapping("/reserve")
	public Reserve addReservation(@Valid @RequestBody Reserve reserve) {
		return reserveRepository.save(reserve);
	}
	
	@PutMapping("/reserve")
	public List<Reserve> modifyReservation() {
		return null;
	}
    
}
