package com.etiqa.School.Response;

import com.etiqa.School.Model.Student;

public class StudentResponse extends BaseResponse{
	Student student;

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}
}
