package com.avantiparking.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.avantiparking.model.Vehicle;

@Repository
public interface Vehicle_Repository extends JpaRepository<Vehicle, Long> {
	
	Optional<Vehicle> findVehicle(String license_plate);
	
	
	@Query(value = "select * from vehicle where user = ?1", nativeQuery = true)
	List<Vehicle> findVehiclesByUser(Long user_id);
}
