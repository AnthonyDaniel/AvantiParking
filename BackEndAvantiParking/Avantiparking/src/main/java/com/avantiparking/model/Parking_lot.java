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
@Table(name = "parking_lot")
public class Parking_lot {
	
	  	@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private Long id_parking_lot;
		@Column(name = "name", nullable = false)
		private String name;
		@ManyToOne
		@JoinColumn(name="headquarter")
		private Headquarter headquarter;
		
		public Parking_lot() {
			
		}
		
		public Parking_lot(String name, Headquarter headquarter) {
			this.name = name;
			this.headquarter = headquarter;
		}
		

		public Long getId_parking_lot() {
			return id_parking_lot;
		}

		public void setId_parking_lot(Long id_parking_lot) {
			this.id_parking_lot = id_parking_lot;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public Headquarter getHeadquarter() {
			return headquarter;
		}

		public void setHeadquarter(Headquarter headquarter) {
			this.headquarter = headquarter;
		}

		@Override
		public String toString() {
			return "Parking_lot [id_parking_lot=" + id_parking_lot 
					+ ", name=" + name + ", headquarter=" + headquarter.getName() + "]";
		}
		
}
