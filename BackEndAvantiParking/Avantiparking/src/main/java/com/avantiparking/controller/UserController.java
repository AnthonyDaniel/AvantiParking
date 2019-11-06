package com.avantiparking.controller;

import com.avantiparking.exception.ResourceNotFoundException;
import com.avantiparking.model.AuthProvider;
import com.avantiparking.model.Headquarter;
import com.avantiparking.model.User;
import com.avantiparking.repository.UserRepository;
import com.avantiparking.security.CurrentUser;
import com.avantiparking.security.UserPrincipal;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }
	@GetMapping("/users")
	public List<User> getAllUser() {
		return userRepository.findAll();
	}
	@PutMapping("/user/{id}")
	public ResponseEntity<User> updateHeadquarter(@PathVariable(value = "id") Long id,
			@Valid @RequestBody User headq) throws ResourceNotFoundException {
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not found for this id : " + id));
		user.setRole(headq.isRole());
		user.setHeadquarter(headq.getHeadquarter());
		final User updatedUser= userRepository.save(user);
		return ResponseEntity.ok(updatedUser);
	}

}
