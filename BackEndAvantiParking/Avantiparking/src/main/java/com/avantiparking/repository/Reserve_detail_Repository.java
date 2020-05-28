package com.avantiparking.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.avantiparking.model.Reserve;
import com.avantiparking.model.Reserve_detail;

@Repository
public interface Reserve_detail_Repository extends JpaRepository<Reserve_detail, Long>  {
	
	final String information = "select * from reserve_detail";
	
	@Query(value = information+" where date = ?1 and space = ?2 order by start_time asc", nativeQuery = true)
	List<Reserve_detail> findByDateAndSpace(String date, Long space_id);
	
	@Query(value = information+" where reserve = ?1", nativeQuery = true)
	List<Reserve_detail> findAllByReserve(Long reserve_id);
	
	@Query(value = information+" where reserve = ?1 and reserve_state = 0", nativeQuery = true)
	List<Reserve_detail> findAllValidByReserve(Long reserve_id);
	
	@Query(value = information+" where reserve = ?1 and reserve_state = 1", nativeQuery = true)
	List<Reserve_detail> findAllUnValidByReserve(Long reserve_id);
	
	@Query(value = "select reserve_detail.* from reserve_detail inner join reserve on reserve_detail.reserve = reserve.id_reservation where date = ?1 and vehicle = ?2 and reserve_state = 0", nativeQuery = true)
	List<Reserve_detail> findByCarAndDate(Date date, Long vehicle);

}
