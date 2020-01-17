package com.avantiparking.model;

import java.sql.Date;
import java.sql.Time;

public class Reserve {
	
	public int id_reservation;
	public Date date;
	public Time start_time;
	public Time end_time;
	public Time created_at;
	
	public User user;
	public Vehicle vehicle;
	public Space space;
	
	
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
	
	
}
