package com.avantiparking.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "vehicle")
public class Vehicle {
	
	@Id
	@Column(name = "license_plate", nullable = false)
	private String license_plate;
	@Column(name = "brand", nullable = false)
	private String brand;
	@Column(name = "model", nullable = false)
	private String model;
	@ManyToOne
	@JoinColumn(name="user")
	private User user;
	
	public Vehicle() {
	}

	public Vehicle(String license_plate, String brand, String model, User user) {
		this.license_plate = license_plate;
		this.brand = brand;
		this.model = model;
		this.user = user;
	}

	public String getLicense_plate() {
		return license_plate;
	}

	public void setLicense_plate(String license_plate) {
		this.license_plate = license_plate;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Vehicle [license_plate=" + license_plate + ", brand=" + brand + ", model=" + model + ", user=" + user
				+ "]";
	}	
}
