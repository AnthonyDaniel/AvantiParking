package com.avantiparking.model;

import java.sql.Date;
import java.sql.Time;
import java.time.Instant;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "reserve_detail")
public class Reserve_detail {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id_reserve_detail ;
	@Column(name = "date", nullable = false)
	private Date date;	
	@Column(name = "start_time", nullable = false)
	private String start_time;
	@Column(name = "end_time", nullable = false)
	private String end_time;
	@Column(name = "reserve_state", nullable = false)
	private Integer reserve_state;
	@Column(name = "end_date_extend", nullable = true)
	private Date end_date_extend;
	@ManyToOne
	@JoinColumn(name="space")
	private Space space;
	@ManyToOne
	@JoinColumn(name="reserve")
	private Reserve reserve;	
	
	public Reserve_detail() {		
		
	}
	
	public Long getId_reserve_detail() {
		return id_reserve_detail;
	}
	public void setId_reserve_detail(Long id_reserve_detail) {
		this.id_reserve_detail = id_reserve_detail;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getStart_time() {
		return start_time;
	}
	public void setStart_time(String start_time) {
		this.start_time = start_time;
	}
	public String getEnd_time() {
		return end_time;
	}
	public void setEnd_time(String end_time) {
		this.end_time = end_time;
	}
	public Integer isReserve_state() {
		return reserve_state;
	}
	public void setReserve_state(Integer reserve_state) {
		this.reserve_state = reserve_state;
	}
	public Date getEnd_date_extend() {
		return end_date_extend;
	}
	public void setEnd_date_extend(Date end_date_extend) {
		this.end_date_extend = end_date_extend;
	}
	public Space getSpace() {
		return space;
	}
	public void setSpace(Space space) {
		this.space = space;
	}
	public Reserve getReserve() {
		return reserve;
	}
	public void setReserve(Reserve reserve) {
		this.reserve = reserve;
	}

	@Override
	public String toString() {
		return "Reserve_detail [id_reserve_detail=" + id_reserve_detail + ", date=" + date + ", start_time="
				+ start_time + ", end_time=" + end_time + ", reserve_state=" + reserve_state + ", end_date_extend="
				+ end_date_extend + ", space=" + space + ", reserve=" + reserve + "]";
	}
	
}
