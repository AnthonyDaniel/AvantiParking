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
import com.avantiparking.model.Space;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Avantiparking_Application.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SpaceControllerTest {
	@Autowired
	private TestRestTemplate restTemplate;
	
	@LocalServerPort
	private int port;

	private String getRootUrl() {
		return "http://localhost:" + port;
	}
	
	@Test
	public void testGetAllSpaces() {
		HttpHeaders headers = new HttpHeaders();
		HttpEntity<String> entity = new HttpEntity<String>(null, headers);

		ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/space",
				HttpMethod.GET, entity, String.class);
		assertNotNull(response.getBody());
	}
	@Test
	public void testGetSpaceById() {
		Space space = restTemplate.getForObject(getRootUrl() + "/space/1", Space.class);
		assertNotNull(space);
	}
	
	@Test
	public void testCreateSpace() {
		Parking_lot parking = new Parking_lot();
		Headquarter sede = new Headquarter();
		Zone zone = new Zone();
		Space space = new Space();
		
		sede.setId_headquarter(1L);
		sede.setName("AvantiCañas");
		sede.setCity("Cañas");
		sede.setCountry("CR");
		
		parking.setName("AvantiBagaces");
		parking.setHeadquarter(sede);
		
		zone.setName("Zona A");
		zone.setParking_lot(parking);
		
		space.setName("02");
		space.setType("Regular");
		space.setState(false);
		space.setZone(zone);
		
		ResponseEntity<Space> postResponse = restTemplate.postForEntity(getRootUrl() + "/space", space, Space.class);
		assertNotNull(postResponse);
		assertNotNull(postResponse.getBody());
	}
	
	@Test
	public void testUpdateSpace() {
		Space space = restTemplate.getForObject(getRootUrl() + "/space/1", Space.class);
		space.setName("Zona B");

		restTemplate.put(getRootUrl() + "/space/1", space);

		Space updatedSpace = restTemplate.getForObject(getRootUrl() + "/space/1", Space.class);
		assertNotNull(updatedSpace);
	}

	@Test
	public void testDeleteSpace() {
		int id = 2;
		Space space = restTemplate.getForObject(getRootUrl() + "/space/" + id, Space.class);
		assertNotNull(space);
		restTemplate.delete(getRootUrl() + "/space/" + id);
		try {
			space = restTemplate.getForObject(getRootUrl() + "/space/" + id, Space.class);
		} catch (final HttpClientErrorException e) {
			assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
		}
	}
}
