package com.etiqa.School.Entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class StudentCourceRelationEntitiy {
	 @Id
	 @GeneratedValue
	 Long id;

	@ManyToOne
	@JoinColumn(name = "student_id")
	StudentEntity student;

	@ManyToOne
	@JoinColumn(name = "course_id")
	CourseEntity course;	
	
	public Long getId() {
		return id;			
	}

	public void setId(Long id) {
		this.id = id;
	}

	public StudentEntity getStudent() {
		return student;
	}

	public void setStudent(StudentEntity student) {
		this.student = student;
	}

	public CourseEntity getCourse() {
		return course;
	}

	public void setCourse(CourseEntity course) {
		this.course = course;
	}
}
