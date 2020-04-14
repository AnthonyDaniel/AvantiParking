package com.avantiparking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.avantiparking.model.Reserve;

@Repository
public interface Reserve_detail_Repository extends JpaRepository<Reserve,Long>  {
	
	final String information = "select * from reserve_detail";

}
