package com.avantiparking.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "headquarter")
public class Headquarter {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id_headquarter;
	@Column(name = "name", nullable = false)
	private String name;
	@Column(name = "city", nullable = false)
	private String city;
	@Column(name = "country", nullable = false)
	private String country;
	
	public Headquarter() {
		
	}
	
	public Headquarter(String name, String city, String country) {
		this.name = name;
		this.city = city;
		this.country = country;
	}
	
	public Long getId_headquarter() {
		return id_headquarter;
	}

	public void setId_headquarter(Long id_headquarter) {
		this.id_headquarter = id_headquarter;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	@Override
	public String toString() {
		return "Headquarter [id_headquarter=" + id_headquarter 
				+ ", name=" + name + ", city=" + city + ", country=" + country+ "]";
	}
	
}
