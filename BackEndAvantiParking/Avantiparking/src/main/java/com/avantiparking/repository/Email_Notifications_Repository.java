package com.avantiparking.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.avantiparking.model.Email_Notifications;

@Repository
public interface Email_Notifications_Repository extends JpaRepository<Email_Notifications, Long> {

}