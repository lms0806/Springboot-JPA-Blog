package com.cos.blog.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cos.blog.model.User;

//DAO
//자동으로 bean 등록이 된다.
//@Repository 생략 가능
public interface UserRepository extends JpaRepository<User, Integer>{
	
	//Select * from user where username=?;
	Optional<User> findByUsername(String username);
}
//	JPA Naming 쿼리
//	select * from user where username = ?1 and password = ?2
//	User findByUsernameAndPassword(String usrename, String password);

//	@Query(value = "select * from user where username = ? and password = ?", nativeQuery = true)
//	User login(String username, String password);
