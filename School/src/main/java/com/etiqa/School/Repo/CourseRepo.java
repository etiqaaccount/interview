package com.etiqa.School.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.etiqa.School.Entity.CourseEntity;

public interface CourseRepo extends JpaRepository<CourseEntity, Long> {}
