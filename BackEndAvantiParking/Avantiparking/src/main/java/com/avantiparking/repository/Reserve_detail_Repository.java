package com.avantiparking.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.avantiparking.model.Reserve;
import com.avantiparking.model.Reserve_detail;

@Repository
public interface Reserve_detail_Repository extends JpaRepository<Reserve_detail,Long>  {
	
	final String information = "select * from reserve_detail";
	
	/*@Query(value = information+" where date = ?1 and space = ?2 and reserve = ?3 order by start_time asc", nativeQuery = true)
	List<Reserve_detail> findDetailByDateSpaceReserve(Date date, Long space_id, Long reserve_id);*/
	
	@Query(value = information+" where date = ?1 and space = ?2 order by start_time asc", nativeQuery = true)
	List<Reserve_detail> findByDateAndSpace(String date, Long space_id);

}
