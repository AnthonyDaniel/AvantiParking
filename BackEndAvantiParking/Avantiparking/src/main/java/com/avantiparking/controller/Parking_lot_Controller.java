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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.avantiparking.exception.ResourceNotFoundException;
import com.avantiparking.model.Parking_lot;
import com.avantiparking.repository.Parking_lot_Repository;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,
		RequestMethod.DELETE})
@RequestMapping("/api")
public class Parking_lot_Controller {
	@Autowired
	public Parking_lot_Repository parking_lot_repository;

	@GetMapping("/parking_lot")
	public List<Parking_lot> getAllParking_lot() {
		return parking_lot_repository.findAll();
	}

	@GetMapping("/parking_lot/{id}")
	public ResponseEntity<Parking_lot> getParking_lotById(@PathVariable(value = "id") Long id_parking_lot)
			throws ResourceNotFoundException {
		Parking_lot parking_lot = parking_lot_repository.findById(id_parking_lot)
				.orElseThrow(() -> new ResourceNotFoundException("Id_parking_lot not found for this id :: " + id_parking_lot));
		return ResponseEntity.ok().body(parking_lot);
	}

	@PostMapping("/parking_lot")
	public Parking_lot createParking_lot(@Valid @RequestBody Parking_lot parking_lot) {
		return parking_lot_repository.save(parking_lot);
	}

	@PutMapping("/parking_lot/{id}")
	public ResponseEntity<Parking_lot> updateParking_lot(@PathVariable(value = "id") Long id_parking_lot,
			@Valid @RequestBody Parking_lot park) throws ResourceNotFoundException {
		Parking_lot parking_lot = parking_lot_repository.findById(id_parking_lot)
				.orElseThrow(() -> new ResourceNotFoundException("Parking lot not found for this id :: " + id_parking_lot));

		parking_lot.setName(park.getName());
		parking_lot.setHeadquarter(park.getHeadquarter());
		final Parking_lot updatedParking = parking_lot_repository.save(parking_lot);
		return ResponseEntity.ok(updatedParking);
	}

	@DeleteMapping("/parking_lot/{id_parking_lot}")
	public Map<String, Boolean> deleteParking_lot(@PathVariable(value = "id_parking_lot") Long id_parking_lot)
			throws ResourceNotFoundException {
		Parking_lot parking_lot = parking_lot_repository.findById(id_parking_lot)
				.orElseThrow(() -> new ResourceNotFoundException("Parking_lot not found for this id : " + id_parking_lot));

		parking_lot_repository.delete(parking_lot);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
