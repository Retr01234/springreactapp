package com.springreact.rest.webservices.restwebservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncoderTest {

	public static void main(String[] args) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(); // Encoded Password Generator
		
		for (int i = 1; i < 10; i++) {
			String encodedString = encoder.encode("password@!23@#!");
			System.out.println(encodedString);
		}
	}
}
