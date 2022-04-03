import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Student() {
  function _handleSubmit(e) {
    e.preventDefault();    
    var jsonData = {};
    $.each($("#student_update_form").serializeArray(), function() {
      jsonData[this.name] = this.value;
    });
    var data = JSON.stringify(jsonData);
    console.log(data);
    $.ajax({
      url: 'http://127.0.0.1:8080/EtiqaSchool/updateStudent',
      headers: {
        'Content-Type': 'application/json'
      },
      type: "PUT",
      contentType: 'text/json',
      data: data,
      success: function (result) {        
        $('#alert_div').show();
        $('#alert').addClass("alert-success");
        $('#alert').text("Student Updated for Id : "+result.id);
      }
      , error: function () {
        $('#alert_div').show();
        $('#alert').addClass("alert-danger");
        $('#alert').text("Something went wrong");
      }
    });
  }
  return (<>    
    
    <form id="student_update_form" onSubmit={_handleSubmit} className="row g-3 mx-auto">
      <h2>Update Student Info</h2>
      <div className="col-md-12" id="alert_div" style={{ display: "none" }}>
        <div class="alert" role="alert" id="alert">
        </div>
      </div>
      <div className="col-md-6">
        <label>Student Id</label>
        <input className="form-control" id="id" name="id" placeholder="Student Id" />
      </div>
      <div className="col-md-6"></div>
      <div className="col-md-6">
        <label>Student Name</label>
        <input className="form-control" id="name" name="name" placeholder="Student Name" />
      </div>
      <div className="col-md-6"></div>
      <div className="col-12">
        <button className="submit btn btn-success">Submit</button>
      </div>
    </form>
  </>
  )
}
