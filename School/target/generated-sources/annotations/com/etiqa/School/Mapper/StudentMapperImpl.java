package com.etiqa.School.Mapper;

import com.etiqa.School.Entity.StudentEntity;
import com.etiqa.School.Model.Student;
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
public class StudentMapperImpl implements StudentMapper {

    @Override
    public Student studentEntityToStudent(StudentEntity studentEntity) {
        if ( studentEntity == null ) {
            return null;
        }

        Student student = new Student();

        student.setId( studentEntity.getId() );
        student.setName( studentEntity.getName() );

        return student;
    }

    @Override
    public StudentEntity studentToStudentEntity(Student student) {
        if ( student == null ) {
            return null;
        }

        StudentEntity studentEntity = new StudentEntity();

        studentEntity.setId( student.getId() );
        studentEntity.setName( student.getName() );

        return studentEntity;
    }

    @Override
    public List<Student> StudentEntityListToStudentList(List<StudentEntity> studentEntityList) {
        if ( studentEntityList == null ) {
            return null;
        }

        List<Student> list = new ArrayList<Student>( studentEntityList.size() );
        for ( StudentEntity studentEntity : studentEntityList ) {
            list.add( studentEntityToStudent( studentEntity ) );
        }

        return list;
    }
}
