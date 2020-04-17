package com.avantiparking.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.avantiparking.exception.ResourceNotFoundException;
import com.avantiparking.model.Headquarter;
import com.avantiparking.model.Parking_lot;
import com.avantiparking.model.Reserve;
import com.avantiparking.repository.Headquarter_Repository;
import com.avantiparking.repository.Reserve_Repository;
import com.avantiparking.repository.Reserve_detail_Repository;
import com.avantiparking.repository.Space_Repository;
import com.avantiparking.repository.UserRepository;
import com.avantiparking.repository.Vehicle_Repository;
import com.avantiparking.repository.Zone_Repository;
import com.avantiparking.service.EmailService;
import com.avantiparking.service.ReportService;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
		RequestMethod.DELETE })
@RequestMapping("/api")
public class Reports_Controller {
	
	@Autowired
	private Reserve_Repository reserveRepository;

    @Autowired
    private ReportService reportService;

	@GetMapping("/reservations")
	public List<Reserve> getAllParking_lot() {
		return reserveRepository.findAll();
	}

	@GetMapping("/generate/report/{date}/{date2}")
	public String genereReport(@PathVariable(value = "date") String date, @PathVariable(value = "date2") String date2) {
		return reportService.generateReport(date, date2);
	}

}
