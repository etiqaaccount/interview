package com.etiqa.School.Mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.etiqa.School.Entity.CourseEntity;
import com.etiqa.School.Entity.StudentEntity;
import com.etiqa.School.Model.Course;

@Mapper(componentModel = "spring")
public interface CourseMapper {
	CourseMapper INSTANCE = Mappers.getMapper( CourseMapper.class ); 	 
    
	CourseEntity CourseToCourseEntity(Course course);
	
	Course CourseEntityToCourse(CourseEntity courseEntity);
	
	List<Course> CourseEntityListToCourseList(List<CourseEntity> courseEntityList);	
}
