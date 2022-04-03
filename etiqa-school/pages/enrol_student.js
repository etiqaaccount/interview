import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Student() {
  function _handleSubmit(e) {
    e.preventDefault();
    var jsonData = {};
    $.each($("#enrol_student_form").serializeArray(), function () {
      jsonData[this.name] = this.value;
    });
    var data = JSON.stringify(jsonData);
    console.log(data);
    var course_id = $('#course_id').val();
    var student_id = $('#student_id').val();
    $.ajax({
      url: 'http://127.0.0.1:8080/EtiqaSchool/enrollStudent?courseId='+course_id+'&studentId='+student_id,
      headers: {
        'Content-Type': 'application/json'
      },
      type: "POST",
      contentType: 'text/json',
      data: data,
      success: function (result) {
        $('#alert_div').show();
        $('#alert').addClass("alert-success");
        $('#alert').text("Student Id :"+student_id+"successfully enrol for course Id : " + course_id);
      }
      , error: function () {
        $('#alert_div').show();
        $('#alert').addClass("alert-danger");
        $('#alert').text("Something went wrong");
      }
    });
  }
  return (<>
    <form id="enrol_student_form" onSubmit={_handleSubmit} className="row g-3 mx-auto">
      <h2>Enrol Student for Course</h2>
      <div className="col-md-12" id="alert_div" style={{ display: "none" }}>
        <div class="alert" role="alert" id="alert">
        </div>
      </div>
      <div className="col-md-6">
        <label>Course Id</label>
        <input className="form-control" id="course_id" name="course_id" placeholder="Course Id" />
      </div>
      <div className="col-md-6"></div>
      <div className="col-md-6">
        <label>Student Id</label>
        <input className="form-control" id="student_id" name="student_id" placeholder="Student Id" />
      </div>
      <div className="col-md-6"></div>
      <div className="col-12">
        <button className="submit btn btn-success">Enrol</button>
      </div>
    </form>
  </>
  )
}
