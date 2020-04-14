package com.avantiparking.model;

import java.sql.Date;
import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "reserve_detail")
public class Reserve_detail {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id_reserve_detail ;
	@Column(name = "date", nullable = false)
	private Date date;
	@Column(name = "start_time", nullable = false)
	private Time start_time;
	@Column(name = "end_time", nullable = false)
	private Time end_time;
	@Column(name = "reserve_state", nullable = false)
	private boolean reserve_state;
	@Column(name = "end_date_extend", nullable = true)
	private Date end_date_extend;
	@ManyToOne
	@JoinColumn(name="space")
	private Space space;
;
	
}
