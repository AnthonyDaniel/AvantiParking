package com.avantiparking;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.HttpClientErrorException;

import com.avantiparking.Avantiparking_Application;
import com.avantiparking.model.*;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Avantiparking_Application.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class Email_NotificationsControllerTest {
	@Autowired
	private TestRestTemplate restTemplate;
	
	@LocalServerPort
	private int port;

	private String getRootUrl() {
		return "http://localhost:" + port;
	}
	@Test
	public void sendEmail() {
		Email_Notifications email = new Email_Notifications();
		email.setTo("anthonymmarinbolivar@gmail.com");
		email.setSubject("Test");
		email.setText("Content Text");
		email.setViewed(false);
		User u=new User();
		u.setId((long) 1);
		email.setUser_id(u);

		ResponseEntity<Email_Notifications> postResponse = restTemplate.postForEntity(getRootUrl() + "/", email, Email_Notifications.class);
		assertNotNull(postResponse);
		assertNotNull(postResponse.getBody());
	}
	@Test
	public void userNotifications() {
		HttpHeaders Email_Notifications = new HttpHeaders();
		HttpEntity<String> entity = new HttpEntity<String>(null, Email_Notifications);

		ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/1",
				HttpMethod.GET, entity, String.class);
		
		assertNotNull(response.getBody());
	}
	
	@Test
	public void changeViewed() {
		int id = 1;
		Email_Notifications e = restTemplate.getForObject(getRootUrl() + "/" + id, Email_Notifications.class);
		e.setViewed(true);

		restTemplate.put(getRootUrl() + "/" + id, e);

		Email_Notifications updated = restTemplate.getForObject(getRootUrl() + "/" + id, Email_Notifications.class);
		assertNotNull(updated);
	}
	
	@Test
	public void deleteNotification() {
		int id = 2;
		Email_Notifications email = restTemplate.getForObject(getRootUrl() + "/" + id, Email_Notifications.class);
		assertNotNull(email);

		restTemplate.delete(getRootUrl() + "/" + id);

		try {
			email = restTemplate.getForObject(getRootUrl() + "/" + id, Email_Notifications.class);
		} catch (final HttpClientErrorException e) {
			assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
		}
	}
}
