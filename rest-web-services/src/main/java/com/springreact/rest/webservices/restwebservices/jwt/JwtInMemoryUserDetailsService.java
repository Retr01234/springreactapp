package com.springreact.rest.webservices.restwebservices.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

  static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

  static {
    inMemoryUserList.add(new JwtUserDetails(1L, "babyyoda",
        "$2a$10$UmN6PUFXlRKFMnv0WX0qauVBQmE.t90.O70pfWL73vG/kDfebM45i", "ROLE_USER_2"));
    
    inMemoryUserList.add(new JwtUserDetails(2L, "obiwan", 
    	"$2a$10$BxR0zQeJiEa8s5ClMY10getQCFer7tARBXPVsrbjTHFVxnJCilBzK\r\n", "ROLE_USER_2"));
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
        .filter(user -> user.getUsername().equals(username)).findFirst();

    if (!findFirst.isPresent()) {
      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
    }

    return findFirst.get();
  }

}


