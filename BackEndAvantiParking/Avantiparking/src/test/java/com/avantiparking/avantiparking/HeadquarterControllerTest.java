package com.avantiparking.avantiparking;

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
public class HeadquarterControllerTest {
	@Autowired
	private TestRestTemplate restTemplate;
	
	@LocalServerPort
	private int port;

	private String getRootUrl() {
		return "http://localhost:" + port;
	}
	@Test
	public void testGetAllHeadquarter() {
		HttpHeaders headers = new HttpHeaders();
		HttpEntity<String> entity = new HttpEntity<String>(null, headers);

		ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/headquarter",
				HttpMethod.GET, entity, String.class);
		
		assertNotNull(response.getBody());
	}
	@Test
	public void testGetHeadquarterById() {
		Headquarter headquarter = restTemplate.getForObject(getRootUrl() + "/headquarter/2", Headquarter.class);
		System.out.println(headquarter.getCountry());
		assertNotNull(headquarter);
	}
	
	@Test
	public void testCreateHeadquarter() {
		Headquarter headquarter = new Headquarter();
		headquarter.setName("AvantiBagaces");
		headquarter.setCity("Bagaces");
		headquarter.setCountry("CR");

		ResponseEntity<Headquarter> postResponse = restTemplate.postForEntity(getRootUrl() + "/headquarter", headquarter, Headquarter.class);
		assertNotNull(postResponse);
		assertNotNull(postResponse.getBody());
	}
	
	@Test
	public void testUpdateHeadquarter() {
		int id = 2;
		Headquarter headquarter = restTemplate.getForObject(getRootUrl() + "/headquarter/" + id, Headquarter.class);
		headquarter.setCity("Cañas");
		headquarter.setCountry("CR");

		restTemplate.put(getRootUrl() + "/headquarter/" + id, headquarter);

		Headquarter updatedHeadquarter = restTemplate.getForObject(getRootUrl() + "/headquarter/" + id, Headquarter.class);
		assertNotNull(updatedHeadquarter);
	}

	@Test
	public void testDeleteHeadquarter() {
		int id = 2;
		Headquarter headquarter = restTemplate.getForObject(getRootUrl() + "/headquarter/" + id, Headquarter.class);
		assertNotNull(headquarter);

		restTemplate.delete(getRootUrl() + "/headquarter/" + id);

		try {
			headquarter = restTemplate.getForObject(getRootUrl() + "/headquarter/" + id, Headquarter.class);
		} catch (final HttpClientErrorException e) {
			assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
		}
	}

}
