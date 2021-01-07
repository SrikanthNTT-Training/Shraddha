package com.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


public interface EmployeeRepo extends CrudRepository<Employee, Integer>{

}
