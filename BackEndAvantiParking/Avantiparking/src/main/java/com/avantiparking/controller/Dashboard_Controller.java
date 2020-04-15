package com.avantiparking.controller;

import java.lang.reflect.Array;
import java.sql.Time;
import java.time.Duration;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.avantiparking.model.Reserve;
import com.avantiparking.model.Reserve_detail;
import com.avantiparking.model.Space;
import com.avantiparking.model.Zone;
import com.avantiparking.repository.Reserve_Repository;
import com.avantiparking.repository.Reserve_detail_Repository;
import com.avantiparking.repository.Space_Repository;
import com.avantiparking.repository.UserRepository;
import com.avantiparking.repository.Vehicle_Repository;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,
		RequestMethod.DELETE})
@RequestMapping("/api")
public class Dashboard_Controller {
	
	
	
	@Autowired
	public Space_Repository space_repository;
	
    @Autowired
    private UserRepository user_repository;
    
    @Autowired
    private Reserve_Repository reserve_repository;
    
    @Autowired
    private Reserve_detail_Repository reserve_detail_repository;
    
    @GetMapping("/dashboard/{id}/{date}")
	public ResponseEntity<String> getAvailableTimesForSpace(@PathVariable(value = "id") Long zone_id, @PathVariable(value = "date") String date){
    	String availableTimes = "{\"";
    	HashMap<Long,Integer[][]> container = null;
		List<Space> spaces = space_repository.findByZone(zone_id);
		if(spaces.size() > 0 ) {
			for(int i = 0; i < spaces.size(); i++) {				
				int firstAvailable = 0;
				System.out.println("***************************xxxxxxxx"+date+"---------"+spaces.get(i).getId_space());
				System.out.println("XAXAXAXXXAXAXAXAXAXXAXXAX");
				List<Reserve_detail> details = reserve_detail_repository.findByDateAndSpace(date, spaces.get(i).getId_space());
				System.out.println("-------------------------------------");
				System.out.println("***************************oooo"+details.size());
				System.out.println("***************************xxxxxxxx"+details.get(0));
				if(details.size() > 0) {
					firstAvailable = getBase(6,20, details.get(0).getStart_time());
					System.out.println("***************************"+firstAvailable);
					if(firstAvailable != 0) {
						Integer range[][] = null;						
						for(int j = 0; j < details.size(); j++) {							
							if(j == 0) {
								range[j][0] = firstAvailable;
								range[j][1] = details.get(j).getStart_time().getHours();
							}else {
								range[j][0] = details.get(j-1).getEnd_time().getHours();
								range[j][1] = details.get(j).getStart_time().getHours();
							}
						}
						System.out.println(range.length);
						container.put(spaces.get(i).getId_space(), range);
					}	
				}
				/*if(firstAvailable != null) {
					container.put(spaces.get(i).getId_space(), value)
				}*/
			}			
		}
		availableTimes = availableTimes+"\"}";
		System.out.println("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
		System.out.println(container.get(33));
		return ResponseEntity.ok().body(null);
	}
    
    private int getBase(int initial, int _final, Time reserve_start_time) {
    	Time hour1 = null;
    	if(initial < 10) {
    		hour1 = Time.valueOf("0"+String.valueOf(initial)+":00:00");
    	}else {
    		hour1 = Time.valueOf(String.valueOf(initial)+":00:00");
    	}    	
    	Time hour2 = Time.valueOf(String.valueOf(_final)+":00:00");
    	if(hour1.before(hour2)) {
    		return initial;
    	} else if(hour1 == hour2) {
    		return 0;
    	}
    	return getBase(initial+1, _final, reserve_start_time);
    }
    
    /*private Integer[][] getRange(int _initial, int _final, List<Reserve_detail> _details, int i, int y){
    	Integer[][] hoursContainer = null;
    	Time hour1 = null;
    	if(_initial < 10) {
    		hour1 = Time.valueOf("0"+String.valueOf(_initial)+":00:00");
    	}else {
    		hour1 = Time.valueOf(String.valueOf(_initial)+":00:00");
    	}    	
    	Time hour2 = Time.valueOf(String.valueOf(_final)+":00:00");
    	if(hour1.before(_details.get(i).getStart_time())) {
    		hoursContainer[i][y] = _initial;
    		return hoursContainer;
    	}
    	 return getRange(_initial+1, _final, _details, i+1);
    }*/
}
