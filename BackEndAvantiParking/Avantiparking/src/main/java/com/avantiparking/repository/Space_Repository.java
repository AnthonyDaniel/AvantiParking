package com.avantiparking.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.avantiparking.model.Space;

@Repository
public interface Space_Repository extends JpaRepository<Space, Long> {
	
	final String information = "select * from space";
	
	@Query(value = information+" where name = ?1 and zone = ?2", nativeQuery = true)
	Optional<Space> findByNameAndZone(String name, Long zone);
	
	@Query(value = information+" where zone = ?1", nativeQuery = true)
	List<Space> findByZone(Long zone);
	
	//para poder modificar un registro con un custom query
	@Modifying
	@Transactional
	@Query(value = "delete from space where zone = ?1", nativeQuery = true)
	void deleteAllByZone(Long zone);
	

}
