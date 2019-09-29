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

import com.avantiparking.exception.Resource_Not_Found;
import com.avantiparking.model.Zone;
import com.avantiparking.repository.Zone_Repository;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,
		RequestMethod.DELETE})
@RequestMapping("/api")
public class Zone_Controller {
	@Autowired
	public Zone_Repository zone_repository;

	@GetMapping("/zone")
	public List<Zone> getAllZones() {
		return zone_repository.findAll();
	}

	@GetMapping("/zone/{id}")
	public ResponseEntity<Zone> getZone_lotById(@PathVariable(value = "id") Long id_Zone)
			throws Resource_Not_Found {
		Zone zone = zone_repository.findById(id_Zone)
				.orElseThrow(() -> new Resource_Not_Found("Zone not found for this id :: " + id_Zone));
		return ResponseEntity.ok().body(zone);
	}

	@PostMapping("/zone")
	public Zone createZone(@Valid @RequestBody Zone zone) {
		return zone_repository.save(zone);
	}

	@PutMapping("/zone/{id}")
	public ResponseEntity<Zone> updateZone(@PathVariable(value = "id") Long id_Zone,
			@Valid @RequestBody Zone _zone) throws Resource_Not_Found {
		Zone zone = zone_repository.findById(id_Zone)
				.orElseThrow(() -> new Resource_Not_Found("Zone not found for this id :: " + id_Zone));

		zone.setName(_zone.getName());
		zone.setParking_lot(_zone.getParking_lot());
		final Zone updatedZone = zone_repository.save(zone);
		return ResponseEntity.ok(updatedZone);
	}

	@DeleteMapping("/zone/{id}")
	public Map<String, Boolean> deleteZone(@PathVariable(value = "id") Long id_Zone)
			throws Resource_Not_Found {
		Zone zone = zone_repository.findById(id_Zone)
				.orElseThrow(() -> new Resource_Not_Found("Zone not found for this id : " + id_Zone));

		zone_repository.delete(zone);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
