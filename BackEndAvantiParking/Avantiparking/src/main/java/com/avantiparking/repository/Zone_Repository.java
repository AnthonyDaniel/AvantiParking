package com.avantiparking.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.avantiparking.model.Zone;

@Repository
public interface Zone_Repository extends JpaRepository<Zone, Long> {
	
final String information = "select * from zone";
	
	@Query(value = information+" where name = ?1 and parking_lot = ?2", nativeQuery = true)
	Optional<Zone> findByNameAndParkingLot(String name, Long parking_lot);	

}
