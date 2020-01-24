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
@Table(name = "reserve")
public class Reserve {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id_reservation;
	@Column(name = "date", nullable = false)
	private Date date;
	@Column(name = "start_time", nullable = false)
	private Time start_time;
	@Column(name = "end_time", nullable = false)
	private Time end_time;
	@Column(name = "created_at", nullable = false)
	private Time created_at;
	
	@ManyToOne
	@JoinColumn(name="user")
	private User user;
	@ManyToOne
	@JoinColumn(name="vehicle")
	private Vehicle vehicle;
	@ManyToOne
	@JoinColumn(name="space")
	private Space space;
	
	
	public Reserve() {
	}


	public int getId_reservation() {
		return id_reservation;
	}


	public void setId_reservation(int id_reservation) {
		this.id_reservation = id_reservation;
	}


	public Date getDate() {
		return date;
	}


	public void setDate(Date date) {
		this.date = date;
	}


	public Time getStart_time() {
		return start_time;
	}


	public void setStart_time(Time start_time) {
		this.start_time = start_time;
	}


	public Time getEnd_time() {
		return end_time;
	}


	public void setEnd_time(Time end_time) {
		this.end_time = end_time;
	}


	public Time getCreated_at() {
		return created_at;
	}


	public void setCreated_at(Time created_at) {
		this.created_at = created_at;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public Vehicle getVehicle() {
		return vehicle;
	}


	public void setVehicle(Vehicle vehicle) {
		this.vehicle = vehicle;
	}


	public Space getSpace() {
		return space;
	}


	public void setSpace(Space space) {
		this.space = space;
	}


	@Override
	public String toString() {
		return "Reserve [id_reservation=" + id_reservation + ", date=" + date + ", start_time=" + start_time
				+ ", end_time=" + end_time + ", created_at=" + created_at + ", user=" + user + ", vehicle=" + vehicle
				+ ", space=" + space + "]";
	}
	
	
}
