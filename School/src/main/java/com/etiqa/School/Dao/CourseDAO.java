package com.etiqa.School.Dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.etiqa.School.Entity.CourseEntity;
import com.etiqa.School.Entity.StudentCourceRelationEntitiy;
import com.etiqa.School.Entity.StudentEntity;
import com.etiqa.School.Exception.ResourceNotFoundException;
import com.etiqa.School.Repo.CourseRepo;
import com.etiqa.School.Repo.StudentCourceRelationEntitiyRepo;
import com.etiqa.School.Repo.StudentRepo;

@Component
public class CourseDAO {
	@Autowired
	CourseRepo courseRepo;
	
	@Autowired
	StudentRepo studentRepo;
	
	@Autowired
	StudentCourceRelationEntitiyRepo studentCourceRelationEntitiyRepo;
	
	@PersistenceContext(unitName="apiEntityManagerFactory")
	EntityManager entityManager;
	
	public List<CourseEntity> getCources() {		
		return courseRepo.findAll();		
	}
	
	public CourseEntity CreateCources(CourseEntity courseEntity) {		
		CourseEntity savedEntitiy = courseRepo.save(courseEntity);
		return savedEntitiy;		
	}
	
	public void enrollStudent(long courseId,long studentId) {		
		StudentCourceRelationEntitiy newEntity = new StudentCourceRelationEntitiy();		
		Optional<CourseEntity> courseFound = courseRepo.findById(courseId);		
		if(courseFound.isPresent()) {
			newEntity.setCourse(courseFound.get());
		}else {
			throw new ResourceNotFoundException("Course with id: "+ studentId +" not Found!");
		}		
		
		Optional<StudentEntity> studentFound = studentRepo.findById(studentId);		
		if(studentFound.isPresent()) {
			newEntity.setStudent(studentFound.get());
		}else {
			throw new ResourceNotFoundException("Course with id: "+ courseId +" not Found!");
		}		
		StudentCourceRelationEntitiy savedEntitiy = studentCourceRelationEntitiyRepo.save(newEntity);		
	}
	
	public List<StudentEntity> getStudentEntrolled(long courseId){
		Optional<CourseEntity> courseFound = courseRepo.findById(courseId);		
		if(courseFound.isPresent()) {
			return studentCourceRelationEntitiyRepo.getStudentEntrolled(courseId);
		}else {
			throw new ResourceNotFoundException("Course with id: "+ courseId +" not Found!");
		}		
		
		
	}
}
