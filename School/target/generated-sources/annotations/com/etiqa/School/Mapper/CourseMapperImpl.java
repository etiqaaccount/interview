package com.etiqa.School.Mapper;

import com.etiqa.School.Entity.CourseEntity;
import com.etiqa.School.Model.Course;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-04-04T02:22:35+0800",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 1.8.0_322 (Red Hat, Inc.)"
)
@Component
public class CourseMapperImpl implements CourseMapper {

    @Override
    public CourseEntity CourseToCourseEntity(Course course) {
        if ( course == null ) {
            return null;
        }

        CourseEntity courseEntity = new CourseEntity();

        courseEntity.setId( course.getId() );
        courseEntity.setName( course.getName() );

        return courseEntity;
    }

    @Override
    public Course CourseEntityToCourse(CourseEntity courseEntity) {
        if ( courseEntity == null ) {
            return null;
        }

        Course course = new Course();

        course.setId( courseEntity.getId() );
        course.setName( courseEntity.getName() );

        return course;
    }

    @Override
    public List<Course> CourseEntityListToCourseList(List<CourseEntity> courseEntityList) {
        if ( courseEntityList == null ) {
            return null;
        }

        List<Course> list = new ArrayList<Course>( courseEntityList.size() );
        for ( CourseEntity courseEntity : courseEntityList ) {
            list.add( CourseEntityToCourse( courseEntity ) );
        }

        return list;
    }
}
