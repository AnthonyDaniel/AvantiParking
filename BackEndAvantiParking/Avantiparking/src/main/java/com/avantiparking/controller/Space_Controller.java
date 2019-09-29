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
import com.avantiparking.model.Space;
import com.avantiparking.repository.Space_Repository;

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
			throws Resource_Not_Found {
		Space space = space_repository.findById(id_Space)
				.orElseThrow(() -> new Resource_Not_Found("Space not found for this id : " + id_Space));
		return ResponseEntity.ok().body(space);
	}

	@PostMapping("/space")
	public Space createSpace(@Valid @RequestBody Space space) {
		return space_repository.save(space);
	}

	@PutMapping("/space/{id}")
	public ResponseEntity<Space> updateSpace(@PathVariable(value = "id") Long id_Space,
			@Valid @RequestBody Space _space) throws Resource_Not_Found {
		Space space = space_repository.findById(id_Space)
				.orElseThrow(() -> new Resource_Not_Found("Space not found for this id : " + id_Space));

		space.setName(_space.getName());
		space.setState(_space.getState());
		space.setType(_space.getType());
		space.setUser(_space.getUser());
		space.setZone(_space.getZone());
		final Space updatedSpace = space_repository.save(space);
		return ResponseEntity.ok(updatedSpace);
	}

	@DeleteMapping("/space/{id}")
	public Map<String, Boolean> deleteSpace(@PathVariable(value = "id") Long id_Space)
			throws Resource_Not_Found {
		Space space = space_repository.findById(id_Space)
				.orElseThrow(() -> new Resource_Not_Found("Space not found for this id : " + id_Space));

		space_repository.delete(space);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
