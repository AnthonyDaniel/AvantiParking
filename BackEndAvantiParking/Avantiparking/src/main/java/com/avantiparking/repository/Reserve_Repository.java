package com.avantiparking.repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.avantiparking.model.Reserve;

@Repository
public interface Reserve_Repository extends JpaRepository<Reserve,Long> {
	
	final String information = "select * from reserve";
	
	@Query(value = information+" where user = ?1", nativeQuery = true)
	List<Reserve> findAllUserReservations(Long user_id);
	
	@Query(value = information+" where user = ?1 and created_at =?2 and vehicle=?3", nativeQuery = true)
	Optional<Reserve> findReservation(Long user_id, Date created_at, Long vehicle_increment);
	
	@Query(value = information+" where user = ?1 and created_at =?2 and vehicle is null", nativeQuery = true)
	Optional<Reserve> findReservationNullVehicle(Long user_id, Date created_at);
	
	/*@Query(value = information+" where created_at = ?1 and user = ?2 and vehicle = ?3", nativeQuery = true)
	List<Reserve> findAllUserReservations(String date, Long user_id, Long vehicle_id);*/
	
	/*@Query(value = information+" where date < current_date() and user=?1", nativeQuery = true)
	List<Reserve> findCompletedReservationsByUser(Long user_id);*/
	
}
