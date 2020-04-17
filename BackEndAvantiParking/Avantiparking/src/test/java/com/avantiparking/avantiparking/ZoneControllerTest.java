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
import com.avantiparking.model.Zone;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Avantiparking_Application.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ZoneControllerTest {
	@Autowired
	private TestRestTemplate restTemplate;
	
	@LocalServerPort
	private int port;

	private String getRootUrl() {
		return "http://localhost:" + port;
	}
	
	@Test
	public void testGetAllZones() {
		HttpHeaders headers = new HttpHeaders();
		HttpEntity<String> entity = new HttpEntity<String>(null, headers);

		ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/zone",
				HttpMethod.GET, entity, String.class);
		assertNotNull(response.getBody());
	}
	@Test
	public void testGetZoneById() {
		Zone zone = restTemplate.getForObject(getRootUrl() + "/zone/1", Zone.class);
		assertNotNull(zone);
	}
	
	@Test
	public void testCreateZone() {
		Parking_lot parking = new Parking_lot();
		Headquarter sede = new Headquarter();
		Zone zone = new Zone();
		sede.setId_headquarter(1L);
		sede.setName("AvantiCañas");
		sede.setCity("Cañas");
		sede.setCountry("CR");
		
		parking.setName("AvantiBagaces");
		parking.setHeadquarter(sede);
		
		zone.setName("Zona A");
		zone.setParking_lot(parking);
		
		ResponseEntity<Zone> postResponse = restTemplate.postForEntity(getRootUrl() + "/zone", parking, Zone.class);
		assertNotNull(postResponse);
		assertNotNull(postResponse.getBody());
	}
	
	@Test
	public void testUpdateZone() {
		Zone zone = restTemplate.getForObject(getRootUrl() + "/zone/1", Zone.class);
		zone.setName("Zona B");

		restTemplate.put(getRootUrl() + "/zone/1", zone);

		Zone updatedZone = restTemplate.getForObject(getRootUrl() + "/zone/1", Zone.class);
		assertNotNull(updatedZone);
	}

	@Test
	public void testDeleteZone() {
		int id = 2;
		Zone zone = restTemplate.getForObject(getRootUrl() + "/zone/" + id, Zone.class);
		assertNotNull(zone);
		restTemplate.delete(getRootUrl() + "/zone/" + id);
		try {
			zone = restTemplate.getForObject(getRootUrl() + "/zone/" + id, Zone.class);
		} catch (final HttpClientErrorException e) {
			assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
		}
	}
}
