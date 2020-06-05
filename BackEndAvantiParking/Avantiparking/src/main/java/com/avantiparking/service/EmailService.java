package com.avantiparking.service;
import java.io.File;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    private JavaMailSender javaMailSender;

    public EmailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendMail(String toEmail, String subject, String _message) {

		try {

			MimeMessage message = javaMailSender.createMimeMessage();
			
			MimeMessageHelper helper;
			helper = new MimeMessageHelper(message, true);
			helper.setFrom("anthony.marin@decimoinc.com");
			helper.setTo(toEmail);
			helper.setSubject(subject);
			helper.setText(_message,true);
			     
			        //FileSystemResource file 
			//  = new FileSystemResource(new File(""));
			//helper.addAttachment("Invoice", file);
			
			SimpleMailMessage mailMessage = new SimpleMailMessage();
			
			mailMessage.setTo(toEmail);
			mailMessage.setSubject(subject);
			mailMessage.setText(_message);
				
			mailMessage.setFrom("anthony.marin@decimoinc.com");
			
			//javaMailSender.send(mailMessage);
			javaMailSender.send(message);
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
         
   
             

    }
}
