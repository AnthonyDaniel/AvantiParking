package com.avantiparking.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.avantiparking.model.Reserve;
import com.avantiparking.model.Vehicle;

@Repository
public interface Reserve_Repository extends JpaRepository<Reserve, Long> {
	
	final String information = "select * from reserve";
	
	@Query(value = information+" where user = ?1", nativeQuery = true)
	List<Reserve> findReservationsByUser(Long user_id);
	
	@Query(value = information+" where date < current_date() and user=?1", nativeQuery = true)
	List<Reserve> findCompletedReservationsByUser(Long user_id);
	
}
