package com.etiqa.School.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.etiqa.School.Entity.StudentCourceRelationEntitiy;
import com.etiqa.School.Entity.StudentEntity;

@Repository
public interface StudentCourceRelationEntitiyRepo extends JpaRepository<StudentCourceRelationEntitiy, Long> {
	@Query("Select c.student from com.etiqa.School.Entity.StudentCourceRelationEntitiy c where c.course.id=:courseId")
	public List<StudentEntity> getStudentEntrolled(@Param("courseId") long courseId);
}
