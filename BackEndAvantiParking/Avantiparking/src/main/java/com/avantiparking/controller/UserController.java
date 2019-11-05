package com.avantiparking.controller;

import com.avantiparking.exception.ResourceNotFoundException;
import com.avantiparking.model.Headquarter;
import com.avantiparking.model.User;
import com.avantiparking.repository.UserRepository;
import com.avantiparking.security.CurrentUser;
import com.avantiparking.security.UserPrincipal;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
	@GetMapping("/user")
	public List<User> getAllUser() {
		return userRepository.findAll();
	}
	@PostMapping("/user")
	public User createUser(@Valid @RequestBody User user) {
		return userRepository.save(user);
	}
}
