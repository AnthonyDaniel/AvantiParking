package com.avantiparking.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.avantiparking.model.Headquarter;

@Repository
public interface Headquarter_Repository extends JpaRepository<Headquarter, Long> {
	
	final String information = "select * from headquarter";
	
	@Query(value = information+" where name = ?1", nativeQuery = true)
	Optional<Headquarter> findByName(String name);

}
