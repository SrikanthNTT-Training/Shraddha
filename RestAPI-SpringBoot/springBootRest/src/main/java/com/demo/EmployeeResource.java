package com.demo;


import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeResource {

	@Autowired
	EmployeeRepo repo;
	
	@GetMapping("/employees")
	public List<Employee> getEmployee()
	{
		List<Employee> employees = (List<Employee>) repo.findAll();
		return employees;
	}
	
	@PostMapping("/employees")
	public Employee createEmployee(@Valid @RequestBody Employee e) {
		 repo.save(e);
		 return e;
	}
	
	@PutMapping("/employees/{id}")
	public void updateEmployee(@PathVariable(value = "id") Integer id , @Valid @RequestBody Employee emp) {
		
		Employee e=repo.findById(id).orElseThrow();
		e.setId(emp.getId());
		e.setName(emp.getName());
		e.setPoints(emp.getPoints());
		repo.save(e);
	}
	
	@DeleteMapping("/employees/{id}")
	public void deleteEmployee(@PathVariable(value = "id") Integer id)
	{
		Employee e=repo.findById(id).orElseThrow();
		repo.delete(e);	
	}
}
