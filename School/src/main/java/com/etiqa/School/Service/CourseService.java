package com.etiqa.School.Service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etiqa.School.Dao.CourseDAO;
import com.etiqa.School.Dao.StudentDAO;
import com.etiqa.School.Entity.CourseEntity;
import com.etiqa.School.Entity.StudentEntity;
import com.etiqa.School.Mapper.CourseMapper;
import com.etiqa.School.Mapper.StudentMapper;
import com.etiqa.School.Model.Course;
import com.etiqa.School.Model.Student;

@Service
public class CourseService {	
	private static Logger logger = LoggerFactory.getLogger(StudentService.class);
	
	@Autowired
	CourseDAO courseDAO;

	@Autowired
	CourseMapper courseMapper;
	
	@Autowired
	StudentMapper studentMapper;
	
	public Course createCourse(Course couse) {
		CourseEntity courseEntity = courseDAO.CreateCources(courseMapper.CourseToCourseEntity(couse));
		return courseMapper.CourseEntityToCourse(courseEntity);		
	}
	
	public List<Course> findAllCourse() {
		List<Course> courseList = courseMapper.CourseEntityListToCourseList(courseDAO.getCources());
		return courseList;
	}
	
	public void enrollStudent(long couseId,long studentId) {
		courseDAO.enrollStudent(couseId,studentId);			
	}
	
	public List<Student> getStudentEntrolled(long couseId) {
		List<StudentEntity> studentEntity = courseDAO.getStudentEntrolled(couseId);
		return studentMapper.StudentEntityListToStudentList(studentEntity);		
	}
}
