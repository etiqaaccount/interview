import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Student() {
  function _handleSubmit(e) {
    e.preventDefault();
    var jsonData = {};
    $.each($("#get_enrolled_student_form").serializeArray(), function () {
      jsonData[this.name] = this.value;
    });
    var data = JSON.stringify(jsonData);
    console.log(data);
    var course_id = $('#course_id').val();
    $.ajax({
      url: 'http://127.0.0.1:8080/EtiqaSchool/getStudentEntrolled/?courseId='+course_id,
      headers: {
        'Content-Type': 'application/json'
      },
      type: "GET",
      contentType: 'text/json',
      success: function (result) {
        $('#alert_div').show();
        $('#alert').removeClass();
        $('#alert').addClass("alert alert-success");
        $('#alert').text("Get student Found for Course with Id : " + course_id);
        $('#student_list').text(JSON.stringify(result));
      }
      , error: function (request, status, error) {
        $('#alert_div').show();
        $('#alert').removeClass();
        $('#alert').addClass("alert alert-danger");
        $('#alert').text(error);
      }
    });
  }
  return (<>
    <form id="get_enrolled_student_form" onSubmit={_handleSubmit} className="row g-3 mx-auto">
      <h2>Get Student Enrolled</h2>
      <div className="col-md-12" id="alert_div" style={{ display: "none" }}>
        <div class="alert" role="alert" id="alert">
        </div>
      </div>
      <div className="col-md-6">
        <label>Course Id</label>
        <input className="form-control" id="course_id" name="id" placeholder="Course Id" />
      </div>
      <div className="col-md-6"></div>
      <div className="col-md-6">
        <label>Student List : </label>
        <label id="student_list"></label>
      </div>
      <div className="col-md-6"></div>
      <div className="col-12">
        <button className="submit btn btn-primary">Search</button>
      </div>
    </form>
  </>
  )
}
