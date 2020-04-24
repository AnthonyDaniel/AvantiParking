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
import com.avantiparking.repository.Space_Repository;

import springfox.documentation.spring.web.json.Json;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,
		RequestMethod.DELETE})
@RequestMapping("/api")
public class Space_Controller {
	@Autowired
	public Space_Repository space_repository;

	@GetMapping("/space")
	public List<Space> getAllSpaces() {
		
		return space_repository.findAll();
	}

	@GetMapping("/space/{id}")
	public ResponseEntity<Space> getSpaceById(@PathVariable(value = "id") Long id_Space)
			throws ResourceNotFoundException {
		Space space = space_repository.findById(id_Space)
				.orElseThrow(() -> new ResourceNotFoundException("Space not found for this id : " + id_Space));
		return ResponseEntity.ok().body(space);
	}
	
	@GetMapping("/space/zone/{id}")
	public ResponseEntity<List<Space>> getSpaceByZone(@PathVariable(value = "id") Long zone) {
		List<Space> spaces = space_repository.findByZone(zone);
		System.out.println(spaces.size());
		return ResponseEntity.ok().body(spaces);
	}

	@PostMapping("/space")
	public Space createSpace(@Valid @RequestBody Space space) {
		Optional<Space> exists= space_repository.findByNameAndZone(space.getName(), space.getZone().getId_zone());
		if(!exists.isPresent()) {
			return space_repository.save(space);
		}
		return new Space(null, null, false, null, null);
	}

	@PutMapping("/space/{id}")
	public ResponseEntity<Space> updateSpace(@PathVariable(value = "id") Long id_Space,
			@Valid @RequestBody Space _space) throws ResourceNotFoundException {
		Space space = space_repository.findById(id_Space)
				.orElseThrow(() -> new ResourceNotFoundException("Space not found for this id : " + id_Space));

		space.setName(_space.getName());
		space.setState(_space.getState());
		space.setType(_space.getType());
		System.out.print(space.getUser());
		space.setUser(_space.getUser());
		space.setZone(_space.getZone());
		final Space updatedSpace = space_repository.save(space);
		return ResponseEntity.ok(updatedSpace);
	}

	@DeleteMapping("/space/{id}")
	public Map<String, Boolean> deleteSpace(@PathVariable(value = "id") Long id_Space)
			throws ResourceNotFoundException {
		Space space = space_repository.findById(id_Space)
				.orElseThrow(() -> new ResourceNotFoundException("Space not found for this id : " + id_Space));

		space_repository.delete(space);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	
	@DeleteMapping("/space/{zone}/all")//delete all spaces for a zone | response is json
	public ResponseEntity<String> deleteAllSpacesByZone(@PathVariable(value = "zone") Long zone) {
		space_repository.deleteAllByZone(zone);
		return ResponseEntity.ok().body("{\"status\":\"Sucess\",\"message\":\"Deleted All\"}");
	}
}
