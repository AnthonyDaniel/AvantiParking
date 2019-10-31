package com.avantiparking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.avantiparking.config.AppProperties;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class Avantiparking_Application {

	public static void main(String[] args) {
		SpringApplication.run(Avantiparking_Application.class, args);
	}
}
