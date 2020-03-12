package com.avantiparking.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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
import com.avantiparking.model.Space;
import com.avantiparking.model.User;
import com.avantiparking.model.Vehicle;
import com.avantiparking.repository.Vehicle_Repository;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,
		RequestMethod.DELETE})
@RequestMapping("/api")
public class Vehicle_Controller {
	
	@Autowired
	public Vehicle_Repository vehicle_repository;
		
	@GetMapping("/vehicle")
	public List<Vehicle> getAllVehicles() {
		return vehicle_repository.findAll();
	}

	@GetMapping("/vehicle/{plate}")
	public ResponseEntity<Vehicle> getVehicleByPlate(@PathVariable(value = "plate") String plate_vehicle)
			throws ResourceNotFoundException {
		Vehicle vehicle = vehicle_repository.findVehicle(plate_vehicle)
				.orElseThrow(() -> new ResourceNotFoundException("Vehicle not found for this plate : " + plate_vehicle));
		return ResponseEntity.ok().body(vehicle);
	}
	/*****************************************************************/
	 //   necesaria???
	@GetMapping("/vehicle/u/{user}")
	public List<Vehicle> getUserVehicles(@PathVariable(value = "user") Long user_id) {
		return vehicle_repository.findVehiclesByUser(user_id);
	} 
	/*****************************************************************/
	@PostMapping("/vehicle")
	public Vehicle saveVehicle(@Valid @RequestBody Vehicle _vehicle) { //se revisa que no este registrado, devueleve un vehiculo vacio si encontro coincidencia
		Optional<Vehicle> exists= vehicle_repository.findVehicle(_vehicle.getLicense_plate());
		if(!exists.isPresent()) {
			return vehicle_repository.save(_vehicle);
		}
		return new Vehicle(null,null,null,null);
	}

	@PutMapping("/vehicle/{plate}")
	public ResponseEntity<Vehicle> updateVehicle(@PathVariable(value = "plate") String plate_vehicle,
			@Valid @RequestBody Vehicle _vehicle) throws ResourceNotFoundException {
		Vehicle vehicle = vehicle_repository.findVehicle(plate_vehicle)
				.orElseThrow(() -> new ResourceNotFoundException("Vehicle not found for this plate : " + plate_vehicle));
		vehicle.setLicense_plate(_vehicle.getLicense_plate());
		vehicle.setBrand(_vehicle.getBrand());
		vehicle.setModel(_vehicle.getModel());
		vehicle.setUser(_vehicle.getUser());;
		final Vehicle updatedVehicle = vehicle_repository.save(vehicle);
		return ResponseEntity.ok(updatedVehicle);
	}

	@DeleteMapping("/vehicle/{plate}")
	public Map<String, Boolean> deleteVehicle(@PathVariable(value = "plate") String plate_vehicle)
			throws ResourceNotFoundException {
		Vehicle space = vehicle_repository.findVehicle(plate_vehicle)
				.orElseThrow(() -> new ResourceNotFoundException("Vehicle not found for this plate : " + plate_vehicle));

		vehicle_repository.delete(space);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	
	

}
