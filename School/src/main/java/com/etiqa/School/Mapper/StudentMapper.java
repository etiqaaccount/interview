package com.etiqa.School.Mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.etiqa.School.Entity.StudentEntity;
import com.etiqa.School.Model.Student;

@Mapper(componentModel = "spring")
public interface  StudentMapper {
	StudentMapper INSTANCE = Mappers.getMapper( StudentMapper.class ); 
	 
    Student studentEntityToStudent(StudentEntity studentEntity);
	StudentEntity studentToStudentEntity(Student student);
	 List<Student> StudentEntityListToStudentList(List<StudentEntity> studentEntityList);
}
