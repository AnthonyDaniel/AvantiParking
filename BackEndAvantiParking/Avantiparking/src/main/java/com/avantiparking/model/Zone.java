package com.avantiparking.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "zone")
public class Zone {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_zone;
	@Column(name = "name", nullable = false)
	private String name;
	@ManyToOne
	@JoinColumn(name="parking_lot")
	private Parking_lot parking_lot;

	public Zone() {

	}

	public Zone(String name, Parking_lot parking_lot) {
		this.name = name;
		this.parking_lot = parking_lot;
	}

	public Long getId_zone() {
		return id_zone;
	}

	public void setId_zone(Long id_zone) {
		this.id_zone = id_zone;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Parking_lot getParking_lot() {
		return parking_lot;
	}

	public void setParking_lot(Parking_lot parking_lot) {
		this.parking_lot = parking_lot;
	}

	@Override
	public String toString() {
		return "Zone [id_zone=" + id_zone + ", name=" + name + ", parking_lot=" 
				+ parking_lot + "]";
	}

}
