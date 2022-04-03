import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Student() {
  function _handleSubmit(e) {
    e.preventDefault();
    var jsonData = {};
    $.each($("#course_create_form").serializeArray(), function () {
      jsonData[this.name] = this.value;
    });
    var data = JSON.stringify(jsonData);
    console.log(data);
    $.ajax({
      url: 'http://127.0.0.1:8080/EtiqaSchool/createCourse',
      headers: {
        'Content-Type': 'application/json'
      },
      type: "POST",
      contentType: 'text/json',
      data: data,
      success: function (result) {
        $('#alert_div').show();
        $('#alert').addClass("alert-success");
        $('#alert').text("Course create with Id : " + result.id);
      }
      , error: function () {
        $('#alert_div').show();
        $('#alert').addClass("alert-danger");
        $('#alert').text("Something went wrong");
      }
    });
  }
  return (<>
    <form id="course_create_form" onSubmit={_handleSubmit} className="row g-3 mx-auto">
      <h2>Create Course</h2>
      <div className="col-md-12" id="alert_div" style={{ display: "none" }}>
        <div class="alert" role="alert" id="alert">
        </div>
      </div>
      <div className="col-md-6">
        <label>Name</label>
        <input className="form-control" id="name" name="name" placeholder="Name" />
      </div>
      <div className="col-12">
        <button className="submit btn btn-success">Create</button>
      </div>
    </form>
  </>
  )
}
