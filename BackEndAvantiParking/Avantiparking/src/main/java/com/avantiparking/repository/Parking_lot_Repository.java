package com.avantiparking.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.avantiparking.model.Parking_lot;

@Repository
public interface Parking_lot_Repository extends JpaRepository<Parking_lot, Long> {
	
final String information = "select * from parking_lot";
	
	@Query(value = information+" where name = ?1 and headquarter = ?2", nativeQuery = true)
	Optional<Parking_lot> finByNameAndHQ(String name, Long headquarter);	

}

