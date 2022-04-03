package com.etiqa.School.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.etiqa.School.Model.Course;
import com.etiqa.School.Model.Student;
import com.etiqa.School.Service.CourseService;

@RestController
@CrossOrigin
public class CourseController {
	@Autowired
	CourseService courseService;
	
	@GetMapping("/courses")
	List<Course> findAllCourses() {
		return courseService.findAllCourse();
	}
	
	@PostMapping("/createCourse")
	Course createCourse(@RequestBody Course course) {
		return courseService.createCourse(course);
	}
	
	@PostMapping("/enrollStudent")
	void enrollStudent(long courseId,long studentId) {
		courseService.enrollStudent(courseId,studentId);
	}
	
	@GetMapping("/getStudentEntrolled")
	List<Student> getStudentEntrolled(long courseId) {
		return courseService.getStudentEntrolled(courseId);
	}
}
