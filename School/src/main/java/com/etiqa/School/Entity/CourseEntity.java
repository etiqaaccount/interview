package com.etiqa.School.Entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class CourseEntity {
	@Id 
	@GeneratedValue
	private Long id;	
	private String name;
	
	@OneToMany(mappedBy = "course")
    List<StudentCourceRelationEntitiy> studentCource;
	
	public List<StudentCourceRelationEntitiy> getStudentCource() {
		return studentCource;
	}
	public void setStudentCource(List<StudentCourceRelationEntitiy> studentCource) {
		this.studentCource = studentCource;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}
