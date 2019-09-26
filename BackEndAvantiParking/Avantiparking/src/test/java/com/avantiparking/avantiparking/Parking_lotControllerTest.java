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
import com.avantiparking.model.Headquarter;
import com.avantiparking.model.Parking_lot;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Avantiparking_Application.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class Parking_lotControllerTest {
	@Autowired
	private TestRestTemplate restTemplate;
	
	@LocalServerPort
	private int port;

	private String getRootUrl() {
		return "http://localhost:" + port;
	}
	
	@Test
	public void testGetAllParkinglot() {
		HttpHeaders headers = new HttpHeaders();
		HttpEntity<String> entity = new HttpEntity<String>(null, headers);

		ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/parking_lot",
				HttpMethod.GET, entity, String.class);
		assertNotNull(response.getBody());
	}
	@Test
	public void testGetParkinglotById() {
		Parking_lot parking = restTemplate.getForObject(getRootUrl() + "/parking_lot/2", Parking_lot.class);
		assertNotNull(parking);
	}
	
	@Test
	public void testCreateParkinglot() {
		Parking_lot parking = new Parking_lot();
		Headquarter prueba = new Headquarter();
		prueba.setId_headquarter(1L);
		prueba.setName("AvantiCañas");
		prueba.setCity("Cañas");
		prueba.setCountry("CR");
		
		parking.setName("AvantiBagaces");
		parking.setHeadquarter(prueba);
		
		ResponseEntity<Parking_lot> postResponse = restTemplate.postForEntity(getRootUrl() + "/parking_lot", parking, Parking_lot.class);
		assertNotNull(postResponse);
		assertNotNull(postResponse.getBody());
	}
	
	@Test
	public void testUpdateParkinglot() {
		Parking_lot parking = restTemplate.getForObject(getRootUrl() + "/parking_lot/1", Parking_lot.class);
		parking.setName("AvantiTila");

		restTemplate.put(getRootUrl() + "/parking_lot/1", parking);

		Parking_lot updatedParking_lot = restTemplate.getForObject(getRootUrl() + "/parking_lot/1", Parking_lot.class);
		assertNotNull(updatedParking_lot);
	}

	@Test
	public void testDeleteParkinglot() {
		int id = 2;
		Parking_lot parking = restTemplate.getForObject(getRootUrl() + "/parking_lot/" + id, Parking_lot.class);
		assertNotNull(parking);
		restTemplate.delete(getRootUrl() + "/parking_lot/" + id);
		try {
			parking = restTemplate.getForObject(getRootUrl() + "/parking_lot/" + id, Parking_lot.class);
		} catch (final HttpClientErrorException e) {
			assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
		}
	}
}
