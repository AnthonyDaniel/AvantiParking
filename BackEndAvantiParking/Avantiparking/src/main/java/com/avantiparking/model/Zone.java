package com.avantiparking.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "zone")
public class Zone {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id_zone;
	@Column(name = "name", nullable = false)
	private String name;
	@Column(name = "parking_lot", nullable = false)
	private int parking_lot;

	public Zone() {

	}

	public Zone(String name, int parking_lot) {
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

	public int getParking_lot() {
		return parking_lot;
	}

	public void setParking_lot(int parking_lot) {
		this.parking_lot = parking_lot;
	}

	@Override
	public String toString() {
		return "Zone [id_zone=" + id_zone + ", name=" + name + ", parking_lot=" 
				+ parking_lot + "]";
	}

}
