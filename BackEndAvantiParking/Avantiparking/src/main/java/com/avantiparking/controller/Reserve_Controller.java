package com.avantiparking.controller;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
//import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.sound.sampled.ReverbType;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.avantiparking.exception.ResourceNotFoundException;
import com.avantiparking.model.Reserve;
import com.avantiparking.model.Reserve_detail;
import com.avantiparking.model.Space;
import com.avantiparking.model.User;
import com.avantiparking.model.Vehicle;
import com.avantiparking.repository.Reserve_Repository;
import com.avantiparking.repository.Reserve_detail_Repository;
import com.avantiparking.repository.Space_Repository;
import com.avantiparking.repository.UserRepository;
import com.avantiparking.repository.Vehicle_Repository;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,
		RequestMethod.DELETE})
@RequestMapping("/api")
public class Reserve_Controller {
	@Autowired
	public Vehicle_Repository vehicle_repository;
	
	@Autowired
	public Space_Repository space_repository;
	
    @Autowired
    private UserRepository user_Repository;
    
    @Autowired
    private Reserve_Repository reserve_Repository;
    
    @Autowired
    private Reserve_detail_Repository reserve_detail_Repository;
    
    @GetMapping("/reserves/user/{user}")
	public ResponseEntity<List<Reserve>> getAllReservationsForUser(@PathVariable(value = "user")Long user_id) {		 
		return ResponseEntity.ok().body(reserve_Repository.findAllUserReservations(user_id));
	}  
	
	@GetMapping("/reserves/valid/{reserve}")
	public ResponseEntity<List<Reserve_detail>> getAllValidReservationsForUser(@PathVariable(value = "reserve")Long reserve_id) {
		return ResponseEntity.ok().body(reserve_detail_Repository.findAllValidByReserve(reserve_id));
	}
	
	@GetMapping("/reserves/unvalid/{reserve}")
	public ResponseEntity<List<Reserve_detail>> getAllUnValidReservationsForUser(@PathVariable(value = "reserve")Long reserve_id) {
		return ResponseEntity.ok().body(reserve_detail_Repository.findAllUnValidByReserve(reserve_id));
	}
	
	@DeleteMapping("/reserves/{id}")
	public Map<String, Boolean> deleteDetail(@PathVariable(value = "id") Long detail_id)
			throws ResourceNotFoundException {
		Reserve_detail detail = reserve_detail_Repository.findById(detail_id)
				.orElseThrow(() -> new ResourceNotFoundException("Reserve detail not found for this id : " + detail_id));
		Long reserve_id = detail.getReserve().getId_reservation();
		reserve_detail_Repository.delete(detail);
		List<Reserve_detail> list = reserve_detail_Repository.findAllByReserve(reserve_id);
		if(list.size() == 0) {
			reserve_Repository.deleteById(reserve_id);
		}
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	
	/*@PostMapping("/reserves")
	public Reserve_detail addReservation(@Valid @RequestBody Reserve_detail _detail) {
		if(!spaceTaken(_detail, false)) {
			Optional<Reserve> exists;
			if(_detail.getReserve().getVehicle().getIncrement() == null) {
				exists = reserve_Repository.findReservationNullVehicle(_detail.getReserve().getUser().getId(), _detail.getReserve().getCreated_at());
			}else {
				exists = reserve_Repository.findReservation(_detail.getReserve().getUser().getId(), _detail.getReserve().getCreated_at(), 
						_detail.getReserve().getVehicle().getIncrement());
			}
			if(!exists.isPresent()) {
				Reserve reserve = _detail.getReserve();
				if(_detail.getReserve().getVehicle().getIncrement() == null) {
					reserve.setVehicle(null);
				}
				reserve = reserve_Repository.save(reserve);
				_detail.setReserve(reserve);
			}else {
				_detail.setReserve(exists.get());
			}
			return reserve_detail_Repository.save(_detail);
		}
		return new Reserve_detail();
	}*/
	
	@PostMapping("/reserves/extended")
	public ResponseEntity<HashMap<String,Boolean>> addExtendedReservation(@Valid @RequestBody Reserve_detail detail) {
		HashMap<String, Boolean> response = new HashMap<>();
		List<Date> dates = reserveExtended(detail);
		LocalDate auxDate;
		if(detail.getReserve().getVehicle().getIncrement() == null) {
			detail.getReserve().setVehicle(null);
		}else {
			List<Reserve_detail> detailsForCar = reserve_detail_Repository.findByCarAndDate(detail.getDate(), detail.getReserve().getVehicle().getIncrement());
			//System.out.println("*****"+detailsForCar);
			if(detailsForCar.size() > 0) {
				for(int i=0;i<detailsForCar.size();i++) {
					//System.out.println("Existente"+detailsForCar.get(i).getStart_time());
					//System.out.println("Nueva"+detail.getStart_time());
					if(detailsForCar.get(i).getStart_time().equals(detail.getStart_time())) {
						//System.out.println("yeeeeeeeeeeeeeeeeeeeeeeeeeesd");
						response.put("car", false);	
						return ResponseEntity.ok(response);
					}
				}
				/*detailsForCar.forEach((detailC) ->{
					if(detailC.getStart_time() == detail.getStart_time()) {
						response.put("car", false);	
						
					}
				});*/
				/*if(response.size() > 0) {
					return ResponseEntity.ok(response);
				}*/
				/*for(int i = 0; i < detailsForCar.size();i++) {
					
				}	*/			
			}
		}
		Reserve reserve = reserve_Repository.save(detail.getReserve());
		for(int i = 0; i< dates.size();i++) {
			Reserve_detail aux = new Reserve_detail();
			aux.setDate(dates.get(i));
			aux.setEnd_date_extend(detail.getEnd_date_extend());
			aux.setEnd_time(detail.getEnd_time());
			aux.setReserve(detail.getReserve());
			aux.setReserve_state(detail.isReserve_state());
			aux.setSpace(detail.getSpace());
			aux.setStart_time(detail.getStart_time());
			aux.setReserve(reserve);
			//System.out.println("jijiji"+aux.getDate()+ "aaaa"+aux.getId_reserve_detail());
			if(!spaceTaken(aux, false)) {				
				 reserve_detail_Repository.save(aux);
				 auxDate = aux.getDate().toLocalDate();
				 response.put(auxDate.toString(), true);
			}else {
				response.put(aux.getDate().toLocalDate().toString(), false);
			}
			/*if(addReserve(aux,false).getId_reserve_detail() != null) {
				auxDate = aux.getDate().toLocalDate();
				response.put(auxDate.toString(), true);
			}else {
				response.put(aux.getDate().toLocalDate().toString(), false);
			}*/
		}		
		return ResponseEntity.ok(response);
	}
	
	private Reserve_detail addReserve(Reserve_detail _detail, boolean flag) {
		if(!spaceTaken(_detail, flag)) {
			//if(_detail.getReserve().getId_reservation() == null) {
				/*Optional<Reserve> exists;
				if(_detail.getReserve().getVehicle().getIncrement() == null) {
					exists = reserve_Repository.findReservationNullVehicle(_detail.getReserve().getUser().getId(), _detail.getReserve().getCreated_at());
				}else {
					exists = reserve_Repository.findReservation(_detail.getReserve().getUser().getId(), _detail.getReserve().getCreated_at(), 
							_detail.getReserve().getVehicle().getIncrement());
				}
				if(!exists.isPresent()) {
					Reserve reserve = _detail.getReserve();
					if(_detail.getReserve().getVehicle().getIncrement() == null) {
						reserve.setVehicle(null);
					}
					reserve = reserve_Repository.save(reserve);
					_detail.setReserve(reserve);
				}else {
					_detail.setReserve(exists.get());
				}*/
				
			//}
			if(_detail.getReserve().getVehicle().getIncrement() == null) {
				_detail.getReserve().setVehicle(null);
			}
			Reserve reserve = reserve_Repository.saveAndFlush(_detail.getReserve());
			_detail.setReserve(reserve);
			return reserve_detail_Repository.save(_detail);
		}
		return new Reserve_detail();
	}
	
	private List<Date> reserveExtended(Reserve_detail _detail) {
		List<Date> daysList = new ArrayList<>();
		LocalDate startDate = _detail.getDate().toLocalDate();
		startDate = startDate.plusDays(1);//locale le quita un dia
		LocalDate auxDate = startDate;
		daysList.add(java.sql.Date.valueOf(auxDate));
		if(_detail.getEnd_date_extend() != null) {
			LocalDate endDate = _detail.getEnd_date_extend().toLocalDate();
			//startDate = startDate.plusDays(1);//locale le quita un dia
			endDate = endDate.plusDays(1);//locale le quita un dia
			//int startDay, endDay;
			//LocalDate auxDate = startDate;
			//startDay =startDate.getDayOfMonth();
			//endDay = endDate.getDayOfMonth();
			//System.out.println("startdate - "+ startDate+ "  enddate - "+ endDate);
			//System.out.println("startday - "+ startDay+ "  endday - "+ endDay);
			//daysList.add(java.sql.Date.valueOf(auxDate));
			do {
				auxDate = auxDate.plusDays(7);			
				daysList.add(java.sql.Date.valueOf(auxDate));
				//System.out.println("Adding - "+ auxDate);	
									
			}while(!auxDate.equals(endDate));	
		}			
		return daysList;
	}
	
	private boolean spaceTaken(Reserve_detail _detail, boolean flag){
		LocalDate date = _detail.getDate().toLocalDate();
		String month;
		if(date.getMonthValue() < 10) {
			month = "0"+date.getMonthValue();
		}else {
			month = String.valueOf(date.getMonthValue());
		}
		String dateS;// se suma uno porque devuelve uno menos
		if(flag) {
			dateS = date.getYear()+"-"+month+"-"+ (date.getDayOfMonth()+1);// se suma uno porque devuelve uno menos
		}else {
			dateS = date.getYear()+"-"+month+"-"+ (date.getDayOfMonth());// se suma uno porque devuelve uno menos
		}
		
		//System.out.println("*****************************"+dateS);
		int start = timeToInt(_detail.getStart_time());
		int end = timeToInt(_detail.getEnd_time());
		List<Reserve_detail> details = reserve_detail_Repository.findByDateAndSpace(dateS, _detail.getSpace().getId_space());
		for(int i=0; i<details.size();i++) {
			int startOld = timeToInt(details.get(i).getStart_time());
			int endOld = timeToInt(details.get(i).getEnd_time());
			if(end < start) {
				return true;
			}
			if(startOld == start || endOld == end) {
				return true;
			}
			if((startOld < start) && (start < endOld)){
				return true;
			}
			if((start < startOld) && (startOld < end)){
				return true;
			}
			if((start < startOld) && (endOld < end)){
				return true;
			}
		}		
		return false;
	}
	
	private int timeToInt(String time) {
    	if(time.charAt(0) == '0') {
    		return time.charAt(1) - '0';
    	}else {
    		return Integer.parseInt(time.substring(0,2));
    	}    	
    }
	/*@GetMapping("/reserves/completed/user/{user}")
	public List<Reserve> reservationsCompletedByUser(@PathVariable(value = "user")Long user_id) {		
		return reserve_Repository.findCompletedReservationsByUser(user_id);
	}*/
	
	/*@GetMapping("/currentReservations/{id}")
	public List<Reserve> currentReservations() {
		return null;
	}*/
    /******************************************
	@PostMapping("/reserve")//list?
	public List<Reserve> addReservation(@Valid @RequestBody Reserve reserve) {
		return null;
	}
	**********************************/
	/*@PostMapping("/reserve")
	public Reserve  addReservation(@Valid @RequestBody Reserve reserve) {
		//Reserve reserve = reserveRepository.fin
		return reserve_Repository.save(reserve);
	}
	
	@PostMapping("/reserve/detail")
	public Reserve_detail  addReservation(@Valid @RequestBody Reserve_detail reserve_detail) {
		//Reserve reserve = reserveRepository.fin
		return reserve_detail_Repository.save(reserve_detail);
	}*/
	
	/*@PutMapping("/reserve")
	public List<Reserve> modifyReservation() {
		return null;
	}*/
    
}
