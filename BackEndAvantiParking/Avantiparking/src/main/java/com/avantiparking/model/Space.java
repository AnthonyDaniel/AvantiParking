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
@Table(name = "space")
public class Space {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id_space;
	@Column(name = "name", nullable = false)
	private String name;
	@Column(name = "type", nullable = false)
	private String type;
	@Column(name = "state", nullable = false)
	private boolean state;
	@Column(name = "user", nullable = true)
	private String user;
	@ManyToOne
	@JoinColumn(name="zone")
	private Zone zone;

	public Space() {

	}

	public Space(String name, String type, boolean state, String user, Zone zone) {
		this.name = name;
		this.type = type;
		this.state = state;
		this.user = user;
		this.zone = zone;
	}


	public Long getId_space() {
		return id_space;
	}

	public void setId_space(Long id_space) {
		this.id_space = id_space;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public boolean getState() {
		return state;
	}

	public void setState(boolean state) {
		this.state = state;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public Zone getZone() {
		return zone;
	}

	public void setZone(Zone zone) {
		this.zone = zone;
	}

	@Override
	public String toString() {
		return "Space [id_space=" + id_space + ", name=" + name +
				", type=" + type +
				", state=" + state +
				", user=" + user +
				", zone=" + zone +"]";
	}

}
