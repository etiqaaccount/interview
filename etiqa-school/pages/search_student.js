import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Student() {
  function _handleSubmit(e) {
    e.preventDefault();
    var jsonData = {};
    $.each($("#student_search_form").serializeArray(), function () {
      jsonData[this.name] = this.value;
    });
    var data = JSON.stringify(jsonData);
    console.log(data);
    $.ajax({
      url: 'http://127.0.0.1:8080/EtiqaSchool/student/' + $('#id').val(),
      headers: {
        'Content-Type': 'application/json'
      },
      type: "GET",
      contentType: 'text/json',
      success: function (result) {
        $('#alert_div').show();
        $('#alert').removeClass();
        $('#alert').addClass("alert alert-success");
        $('#alert').text("Student Found for Id : " + result.id);
        $('#name').text(result.name);
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
    <form id="student_search_form" onSubmit={_handleSubmit} className="row g-3 mx-auto">
      <h2>Student Search</h2>
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
        <label>Student Name : </label>
        <label id="name"></label>
      </div>
      <div className="col-md-6"></div>
      <div className="col-12">
        <button className="submit btn btn-primary">Search</button>
      </div>
    </form>
  </>
  )
}
