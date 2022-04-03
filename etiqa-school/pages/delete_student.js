import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Student() {
  function _handleSubmit(e) {    
    e.preventDefault();    
    var jsonData = {};
    $.each($("#student_delete_form").serializeArray(), function() {
      jsonData[this.name] = this.value;
    });
    var data = JSON.stringify(jsonData);
    var id = $('#id').val();
    $.ajax({
      url: 'http://127.0.0.1:8080/EtiqaSchool/deleteStudent/'+id,
      headers: {
        'Content-Type': 'application/json'
      },
      type: "DELETE",
      contentType: 'text/json',      
      success: function (result) {
        $('#alert_div').show();
        $('#alert').addClass("alert-success");
        $('#alert').text("Student Deleted for Student Id : " + id);
      }
      , error: function () {
        $('#alert_div').show();
        $('#alert').addClass("alert-danger");
        $('#alert').text("Something went wrong");
      }
    });
  }
  return (
  <>    
    <form id="student_delete_form" onSubmit={_handleSubmit} className="row g-3 mx-auto">
      <h2>Delete Student</h2>
      <div className="col-md-12" id="alert_div" style={{ display: "none" }}>
        <div class="alert" role="alert" id="alert">
        </div>
      </div>
      <div className="col-md-6">
        <label>Student Id</label>
        <input className="form-control" id="id" name="id" placeholder="Student Id" />
      </div>
      <div className="col-12">
        <button className="submit btn btn-danger">Delete</button>
      </div>
    </form>
  </>
  )
}
