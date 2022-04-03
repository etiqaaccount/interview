package com.etiqa.School.Dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.etiqa.School.Entity.StudentEntity;
import com.etiqa.School.Exception.ResourceNotFoundException;
import com.etiqa.School.Repo.StudentRepo;

@Component
public class StudentDAO {
	@Autowired
	StudentRepo studentRepo;
	
	public StudentEntity GetStudent(long id) {
		Optional<StudentEntity> studentFound = studentRepo.findById(id);		
		if(studentFound.isPresent()) {
			return studentFound.get();
		}else {
			throw new ResourceNotFoundException("Student with id: "+id+" not Found!");
		}			
	}
	
	public List<StudentEntity> GetStudents() {		
		return studentRepo.findAll();		
	}
	
	public StudentEntity createStudent(StudentEntity studentEntity) {			
		StudentEntity savedEntitiy = studentRepo.save(studentEntity);
		return savedEntitiy;
	}
	
	public StudentEntity updateStudent(StudentEntity studentEntity) {		
		Optional<StudentEntity> studentFound = studentRepo.findById(studentEntity.getId());		
		if(studentFound.isPresent()) {
			StudentEntity savedEntitiy = studentRepo.save(studentEntity);
			return savedEntitiy;
		}else {
			throw new ResourceNotFoundException("Student with id: "+studentEntity.getId().toString()+" not Found!");
		}				
		
	}	
	
	public void DeleteStudent(long id) {
		Optional<StudentEntity> deleteStudentEntitiy = studentRepo.findById(id);
		if(deleteStudentEntitiy.isPresent()) {
			studentRepo.delete(deleteStudentEntitiy.get());
		}else {
			throw new ResourceNotFoundException("Student with id: "+id+" not Found!");
		}
	}
}