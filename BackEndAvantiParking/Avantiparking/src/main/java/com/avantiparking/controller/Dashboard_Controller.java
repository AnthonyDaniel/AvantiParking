package com.avantiparking.controller;

import java.lang.reflect.Array;
import java.sql.Time;
import java.time.Duration;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

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
	public ResponseEntity<HashMap<Long,ArrayList<Integer[][]>>> getAvailableTimesForSpace(@PathVariable(value = "id") Long zone_id, @PathVariable(value = "date") String date){
    	HashMap<Long,ArrayList<Integer[][]>> container = null;
		List<Space> spaces = space_repository.findByZone(zone_id);
		if(spaces.size() > 0 ) {
			container = new HashMap<>();
			boolean flag = false;
			for(int i = 0; i < spaces.size(); i++) {	
				if(spaces.get(i).getUser() == null) {
					int available = 0;
					List<Reserve_detail> details = reserve_detail_repository.findByDateAndSpace(date, spaces.get(i).getId_space());
					ArrayList<Integer[][]> rangeContainer = new ArrayList<>();
					Integer range[][];
					if(details.size() == 0){
						range = new Integer[1][2];
						range[0][0]=6;
						range[0][1]=20;
						rangeContainer.add(range);
						container.put(spaces.get(i).getId_space(),rangeContainer);
					}else if(details.size() > 0) {
						for(int j = 0; j <details.size();j++) {
							range = new Integer[1][2];
							if(j == 0) {
								available = getBase("06:00:00", "20:00:00", details.get(j).getStart_time());
							}else {
								available = getBase(details.get(j-1).getEnd_time(), "20:00:00", details.get(j).getStart_time());
							}
							if(available != 0) {
								if(available == -1) {
									if(details.size() == 1) {
										Time end = Time.valueOf(details.get(j).getEnd_time());
										Time max = Time.valueOf("20:00:00");
										if(end.before(max)) {
											flag = true;
											range[0][0]=timeToInt(details.get(j).getEnd_time());
											range[0][1]=20;
											rangeContainer.add(range);
										}	
									}									
								}else {
									flag = true;
									range[0][0]=available;
									range[0][1]=timeToInt(details.get(j).getStart_time());
									rangeContainer.add(range);
									if(j == details.size()-1) {
										if(timeToInt(details.get(j).getEnd_time()) < 20) {
											range = new Integer[1][2];
											range[0][0] = timeToInt(details.get(j).getEnd_time());								
											range[0][1] = 20;
											rangeContainer.add(range);
										}							
									}
								}								
							}
						}
						if(flag) {
							container.put(spaces.get(i).getId_space(),rangeContainer);
							flag = false;
						}
					}
				}			
			}			
		}
		return ResponseEntity.ok().body(container);
	}
    
    private int getBase(String initial, String _final, String reserve_start_time) {
    	Time hour1 = Time.valueOf(initial);
    	Time hour2 = Time.valueOf(_final);
    	Time hour3 = Time.valueOf(reserve_start_time);
    	int hour = timeToInt(initial);
    	if(hour3.equals(Time.valueOf("06:00:00"))) {
    		return -1;
    	}
    	if(hour1.before(hour3)) {
    		return timeToInt(initial);
    	}
    	if(hour1.equals(hour2)) {
    		return 0;
    	}    	
    	hour++;
    	if(hour< 10) {
    		initial = "0"+String.valueOf(hour)+":00:00";
    	}else {
    		initial = String.valueOf(hour)+":00:00";
    	}
    	return getBase(initial, _final, reserve_start_time);
    }
    
    private int timeToInt(String time) {
    	if(time.charAt(0) == '0') {
    		return time.charAt(1) - '0';
    	}else {
    		return Integer.parseInt(time.substring(0,2));
    	}    	
    }
    
}
