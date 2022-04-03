package com.etiqa.School.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.etiqa.School.Model.Student;
import com.etiqa.School.Response.StudentResponse;
import com.etiqa.School.Service.StudentService;

@RestController
@CrossOrigin
public class StudentController {

	@Autowired
	StudentService studentService;

	@GetMapping("/students")
	List<Student> findAllStudent() {
		return studentService.findAllStudent();
	}

	@GetMapping("/student/{id}")
	Student one(@PathVariable Long id) {		 
		return studentService.findStudentById(id);
	}
	
	@PostMapping("/createNewStudent")
	public Student createNewStudent(@RequestBody Student newStudent) {		
		return studentService.createNewStudent(newStudent);	    			
	}

	@PutMapping("/updateStudent")
	Student updateStudent(@RequestBody Student student) {
		return studentService.updateStudent(student);
	}

	@DeleteMapping("/deleteStudent/{id}")
	void deleteStudent(@PathVariable Long id) {
		studentService.deleteStudent(id);
	}
}