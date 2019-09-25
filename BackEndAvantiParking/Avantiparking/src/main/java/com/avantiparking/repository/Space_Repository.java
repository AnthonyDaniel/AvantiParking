package com.avantiparking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.avantiparking.model.Space;

@Repository
public interface Space_Repository extends JpaRepository<Space, Long> {

}
