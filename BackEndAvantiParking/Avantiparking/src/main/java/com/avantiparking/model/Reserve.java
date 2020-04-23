package com.avantiparking.model;

import java.util.Date;

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
	private Long id_reservation;	
	@Column(name = "created_at", nullable = false)
	private Date created_at;	
	@ManyToOne
	@JoinColumn(name="user")
	private User user;
	@ManyToOne
	@JoinColumn(name="vehicle")
	private Vehicle vehicle;	
	
	public Reserve() {
	}

	public Long getId_reservation() {
		return id_reservation;
	}


	public void setId_reservation(Long id_reservation) {
		this.id_reservation = id_reservation;
	}

	public Date getCreated_at() {
		return created_at;
	}


	public void setCreated_at(Date created_at) {
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

	@Override
	public String toString() {
		return "Reserve [id_reservation=" + id_reservation + ", created_at=" + created_at + ", user=" + user
				+ ", vehicle=" + vehicle + "]";
	}
	
	
}
