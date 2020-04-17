package com.avantiparking.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.avantiparking.repository.Reserve_Repository;
import com.avantiparking.repository.Space_Repository;
import com.avantiparking.repository.UserRepository;

@Service
public class ReportService {

	@Autowired
	public Space_Repository space_repository;
	
    @Autowired
    private UserRepository user_repository;
    
    @Autowired
    private Reserve_Repository reserve_repository;
	
	public ReportService() {
		
	}
	
	public String generateReport(String date1,String date2) {
		
		Date _date1;
		Date _date2;

		try {
			DateFormat fecha1 = new SimpleDateFormat("yyyy-MM-dd");
			DateFormat fecha2 = new SimpleDateFormat("yyyy-MM-dd");
			_date1 = fecha1.parse(date1);
			_date2 = fecha2.parse(date2);

		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}
		return "";
	}
}
