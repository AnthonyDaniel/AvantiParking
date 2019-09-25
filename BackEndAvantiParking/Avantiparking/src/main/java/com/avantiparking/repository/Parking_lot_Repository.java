package com.avantiparking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.avantiparking.model.Parking_lot;

@Repository
public interface Parking_lot_Repository extends JpaRepository<Parking_lot, Long> {

}

