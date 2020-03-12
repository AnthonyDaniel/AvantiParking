package com.avantiparking.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.avantiparking.model.Reserve;
import com.avantiparking.model.Vehicle;

@Repository
public interface Reserve_Repository extends JpaRepository<Reserve, Long> {
	
	final String information = "id_reservation, date, start_time, end_time, created_at, user, vehicle, space";
	
	@Query(value = "select "+information+" from reserve where user = ?1", nativeQuery = true)
	List<Reserve> findReservationsByUser(Long user_id);
	
}
