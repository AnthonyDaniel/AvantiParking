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
public class VehicleController {
	@Autowired
	private TestRestTemplate restTemplate;
	
	@LocalServerPort
	private int port;

	private String getRootUrl() {
		return "http://localhost:" + port;
	}
	@Test
	public void getAllVehicles() {
		HttpHeaders headers = new HttpHeaders();
		HttpEntity<String> entity = new HttpEntity<String>(null, headers);

		ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/vehicle",
				HttpMethod.GET, entity, String.class);
		
		assertNotNull(response.getBody());
	}
	@Test
	public void getVehicleByPlate() {
		Vehicle vehicle = restTemplate.getForObject(getRootUrl() + "/vehicle/2", Vehicle.class);
		assertNotNull(vehicle);
	}
	
	@Test
	public void getUserVehicles() {
		Vehicle vehicle = restTemplate.getForObject(getRootUrl() + "/vehicle/u/2", Vehicle.class);
		assertNotNull(vehicle);
	}
	
	@Test
	public void updateVehicle() {
		String plate = "wqe";
		Vehicle v = restTemplate.getForObject(getRootUrl() + "/vehicle/" + plate, Vehicle.class);
		v.setModel("94");
	
		restTemplate.put(getRootUrl() + "/vehicle/" + plate, v);

		Vehicle updatedHeadquarter = restTemplate.getForObject(getRootUrl() + "/vehicle/" + plate, Vehicle.class);
		assertNotNull(updatedHeadquarter);
	}

	@Test
	public void deleteVehicle() {
		String plate = "wqe";
		Vehicle v = restTemplate.getForObject(getRootUrl() + "/vehicle/" + plate, Vehicle.class);
		assertNotNull(v);

		restTemplate.delete(getRootUrl() + "/vehicle/" + plate);

		try {
			v = restTemplate.getForObject(getRootUrl() + "/vehicle/" + plate, Vehicle.class);
		} catch (final HttpClientErrorException e) {
			assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
		}
	}

}
