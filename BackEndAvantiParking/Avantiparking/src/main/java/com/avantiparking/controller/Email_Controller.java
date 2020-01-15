package com.avantiparking.controller;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.avantiparking.model.Email_Notifications;
import com.avantiparking.repository.Email_Notifications_Repository;
import com.avantiparking.service.EmailService;


@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,
		RequestMethod.DELETE})
@RequestMapping("/api")
public class Email_Controller {
    @Autowired
    private EmailService emailService;
	@Autowired
	public Email_Notifications_Repository emailRepository;
	@PostMapping("/email")
    public  Map<String, Boolean> sendmail(@Valid @RequestBody Email_Notifications email) {

        emailService.sendMail(email.getTo(),email.getSubject(),email.getHtml());
	
        emailRepository.save(email);
        
        Map<String, Boolean> response = new HashMap<>();
		
        response.put("Send", Boolean.TRUE);
		return response;
    }
	
    @GetMapping("/notifications/{id}")
    public  List<Email_Notifications> UserNotifications(@PathVariable(value = "id") Long id) {
    	List<Email_Notifications> i = emailRepository.findAll();
    	List<Email_Notifications> result = new LinkedList<Email_Notifications>();
    	
    	for (Email_Notifications e: i) {
			if(e.getUser_id().getId() == id) {
				result.add(e);
			}
		}
    	
		return  result;
    }
    
    @PutMapping("/notification_viewed/{id}")
    public Map<String, Boolean> ChangeViewed(@PathVariable(value = "id") Long id) {
    	
    	Optional<Email_Notifications> email = emailRepository.findById(id);
    	email.get().setViewed(true);
        emailRepository.save(email.get());
        Map<String, Boolean> response = new HashMap<>();
        
		if(email.get() != null) {
			   response.put("ok", Boolean.TRUE);
				return response;
		}else {
			response.put("bad", Boolean.FALSE);
			return response;
		}
    }
    
    @DeleteMapping("/notification/{id}")
    public Map<String, Boolean> DeleteNotification(@PathVariable(value = "id") Long id) {
    	
    	Optional<Email_Notifications> email = emailRepository.findById(id);

        emailRepository.delete(email.get());
        Map<String, Boolean> response = new HashMap<>();
        
		if(email.get() != null) {
			   response.put("ok", Boolean.TRUE);
				return response;
		}else {
			response.put("bad", Boolean.FALSE);
			return response;
		}
     
    }
}
