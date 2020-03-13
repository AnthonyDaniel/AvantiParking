package com.avantiparking.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "email_notifications")
public class Email_Notifications {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "to_email")
	private String to;
	
	@Column(name = "subject")
	private String subject;
	
	@Column(name = "text")
	private String text;
	
	@Column(name = "date")
	private String date;
	
	@Column(name = "viewed")
	private boolean viewed;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private User user_id;
	
	public Email_Notifications() {
		
	}
	
	public Email_Notifications(String to,String subject, String html) {
		this.to = to;
		this.subject = subject;
	}
	
	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public boolean isViewed() {
		return viewed;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public void setViewed(boolean viewed) {
		this.viewed = viewed;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getUser_id() {
		return user_id;
	}

	public void setUser_id(User user_id) {
		this.user_id = user_id;
	}
	public String getTo() {
		return to;
	}
	public void setTo(String to) {
		this.to = to;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
}
