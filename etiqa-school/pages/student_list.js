import 'bootstrap/dist/css/bootstrap.css'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';

export default function Student() {  
  const router = useRouter();
  useEffect(() => {
    $.ajax({
      url: 'http://127.0.0.1:8080/EtiqaSchool/students',
      headers: {
        'Content-Type': 'application/json'
      },
      type: "GET", /* or type:"GET" or type:"PUT" */
      dataType: "json",
      data: {
      },
      success: function (result) {
        $('#table_id').DataTable({
          data: result, columns: [
            { data: 'id' },
            { data: 'name' },],
        });
        var table = $('#table_id').DataTable();
        $('#table_id tbody').on('dblclick', 'tr', function () {
          var data = table.row(this).data();          
          console.log(data.id);
        });
      }
      , error: function () {
        console.log("error");
      }
    });
  }, []);

  return (<>
    <div className="row g-3 mx-auto">
      <h2>Student List</h2>
      <table id="table_id" style={{width:"100%"}}>
        <thead>
          <tr>
            <th>Student Id</th>
            <th>Student Name</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  </>
  )
}
