package com.avantiparking.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

import com.avantiparking.exception.ResourceNotFoundException;
import com.avantiparking.model.Headquarter;
import com.avantiparking.repository.Headquarter_Repository;


@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,
		RequestMethod.DELETE})
@RequestMapping("/api")
public class Headquarter_Controller {
	@Autowired
	private Headquarter_Repository headquarter_repository;
	
	
	@GetMapping("/headquarter")
	public List<Headquarter> getAllHeadquarter() {
		return headquarter_repository.findAll();
	}

	@GetMapping("/headquarter/{id}")
	public ResponseEntity<Headquarter> getHeadquarterById(@PathVariable(value = "id") Long id_headquarter)
			throws ResourceNotFoundException{
		Headquarter headquarter = headquarter_repository.findById(id_headquarter)
				.orElseThrow(() -> new ResourceNotFoundException("Headquarter not found for this id :: " + id_headquarter));
		return ResponseEntity.ok().body(headquarter);
	}

	@PostMapping("/headquarter")
	public Headquarter createHeadquarter(@Valid @RequestBody Headquarter headquarter) {
		return headquarter_repository.save(headquarter);
	}

	@PutMapping("/headquarter/{id_headquarter}")
	public ResponseEntity<Headquarter> updateHeadquarter(@PathVariable(value = "id_headquarter") Long id_headquarter,
			@Valid @RequestBody Headquarter headq) throws ResourceNotFoundException {
		Headquarter headquarter = headquarter_repository.findById(id_headquarter)
				.orElseThrow(() -> new ResourceNotFoundException("Headquarter not found for this id :: " + id_headquarter));

		headquarter.setName(headq.getName());
		headquarter.setCity(headq.getCity());
		headquarter.setCountry(headq.getCountry());
		final Headquarter updatedheadquarter = headquarter_repository.save(headquarter);
		return ResponseEntity.ok(updatedheadquarter);
	}

	@DeleteMapping("/headquarter/{id_headquarter}")
	public Map<String, Boolean> deleteHeadquarter(@PathVariable(value = "id_headquarter") Long id_headquarter)
			throws ResourceNotFoundException {
		Headquarter headquarter = headquarter_repository.findById(id_headquarter)
				.orElseThrow(() -> new ResourceNotFoundException("Headquarter not found for this id :: " + id_headquarter));

		headquarter_repository.delete(headquarter);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}


