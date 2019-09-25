package com.avantiparking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.avantiparking.model.Zone;

@Repository
public interface Zone_Repository extends JpaRepository<Zone, Long> {

}
