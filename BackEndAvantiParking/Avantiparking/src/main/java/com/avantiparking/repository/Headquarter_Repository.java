package com.avantiparking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.avantiparking.model.Headquarter;

@Repository
public interface Headquarter_Repository extends JpaRepository<Headquarter, Long> {

}
