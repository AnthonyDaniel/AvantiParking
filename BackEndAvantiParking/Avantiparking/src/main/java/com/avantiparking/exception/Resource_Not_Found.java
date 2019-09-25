package com.avantiparking.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class Resource_Not_Found extends Exception{

	private static final long serialVersionUID = 1L;

	public Resource_Not_Found(String message){
    	super(message);
    }
}
