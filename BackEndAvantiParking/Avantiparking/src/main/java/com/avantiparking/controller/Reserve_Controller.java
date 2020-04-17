package com.avantiparking.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.avantiparking.model.Reserve;
import com.avantiparking.model.Reserve_detail;
import com.avantiparking.model.Space;
import com.avantiparking.repository.Reserve_Repository;
import com.avantiparking.repository.Reserve_detail_Repository;
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
    private UserRepository user_Repository;
    
    @Autowired
    private Reserve_Repository reserve_Repository;
    
    @Autowired
    private Reserve_detail_Repository reserve_detail_Repository;
    
    @GetMapping("/reserves/user/{user}")
	public ResponseEntity<List<Reserve>> getAllReservationsForUser(@PathVariable(value = "user")Long user_id) {		 
		return ResponseEntity.ok().body(reserve_Repository.findAllUserReservations(user_id));
	}  
	
	@GetMapping("/reserves/valid/{reserve}")
	public ResponseEntity<List<Reserve_detail>> getAllValidReservationsForUser(@PathVariable(value = "reserve")Long reserve_id) {
		System.out.println("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
		return ResponseEntity.ok().body(reserve_detail_Repository.findAllValidByReserve(reserve_id));
	}
	
	@GetMapping("/reserves/unvalid/{reserve}")
	public ResponseEntity<List<Reserve_detail>> getAllUnValidReservationsForUser(@PathVariable(value = "reserve")Long reserve_id) {
		return ResponseEntity.ok().body(reserve_detail_Repository.findAllUnValidByReserve(reserve_id));
	}
    
	/*@GetMapping("/reserves/completed/user/{user}")
	public List<Reserve> reservationsCompletedByUser(@PathVariable(value = "user")Long user_id) {		
		return reserve_Repository.findCompletedReservationsByUser(user_id);
	}*/
	
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
	public Reserve_detail  addReservation(@Valid @RequestBody Reserve_detail reserve_detail) {
		/*Reserve reserve = reserveRepository.fin*/
		return reserve_detail_Repository.save(reserve_detail);
	}
	
	@PutMapping("/reserve")
	public List<Reserve> modifyReservation() {
		return null;
	}
    
}
