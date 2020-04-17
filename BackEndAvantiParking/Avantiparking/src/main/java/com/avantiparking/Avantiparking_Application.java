package com.avantiparking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.avantiparking.config.AppProperties;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
@EnableSwagger2
public class Avantiparking_Application {

	public static void main(String[] args) {
		SpringApplication.run(Avantiparking_Application.class, args);
	}
}
