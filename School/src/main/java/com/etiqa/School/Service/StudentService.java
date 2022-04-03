package com.etiqa.School.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.stereotype.Service;
import org.apache.commons.lang3.StringUtils;

import com.etiqa.School.Common.AppUtil;
import com.etiqa.School.Dao.StudentDAO;
import com.etiqa.School.Entity.StudentEntity;
import com.etiqa.School.Exception.ResourceNotFoundException;
import com.etiqa.School.Mapper.StudentMapper;
import com.etiqa.School.Model.Student;
import com.etiqa.School.Response.StudentResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class StudentService {
	private static Logger logger = LoggerFactory.getLogger(StudentService.class);
	
	@Autowired
	AppUtil appUtil;
	
	@Autowired
	StudentDAO studentDAO;

	@Autowired
	StudentMapper studentMapper;
	
	public List<Student> findAllStudent() {
		List<Student> studentList = studentMapper.StudentEntityListToStudentList(studentDAO.GetStudents());
		return studentList;
	}

	public Student findStudentById(Long id) {
		logger.info("findStudentById");
		Student studentFound = studentMapper.studentEntityToStudent(studentDAO.GetStudent(id));
		if(studentFound == null) {
			throw new ResourceNotFoundException("Student with id: "+id.toString()+" not Found!");
		}
		return studentFound;
	}

	public Student createNewStudent(Student newStudent) {
		logger.info("createNewStudent");
		StudentEntity newStudentEntity = studentDAO.createStudent(studentMapper.studentToStudentEntity(newStudent));
		return studentMapper.studentEntityToStudent(newStudentEntity);
	}
	
	public Student updateStudent(Student student) {
		logger.info("updateStudent");
		StudentEntity newStudentEntity = studentDAO.updateStudent(studentMapper.studentToStudentEntity(student));
		return studentMapper.studentEntityToStudent(newStudentEntity);
	}

	public void deleteStudent(Long id) {
		logger.info("deleteStudent");
		studentDAO.DeleteStudent(id);
	}
}
