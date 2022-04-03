import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head'
import { useRouter } from 'next/router'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import './loader.js'
import React, { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ marginBottom: '40px' }}>
      <div className="container-fluid">
        <a className="navbar-brand" onClick={() => router.push('/')}>Home</a>

        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Student Management
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><a className="dropdown-item" onClick={() => router.push('/student_list')}>View Student List</a></li>
                <li><a className="dropdown-item" onClick={() => router.push('/search_student')}>Search Student</a></li>
                <li><a className="dropdown-item" onClick={() => router.push('/create_student')}>Create Student</a></li>
                <li><a className="dropdown-item" onClick={() => router.push('/update_student')}>Update Student</a></li>
                <li><a className="dropdown-item" onClick={() => router.push('/delete_student')}>Delete Student</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Course Management
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><a className="dropdown-item" onClick={() => router.push('/course_list')}>View Course List</a></li>
                <li><a className="dropdown-item" onClick={() => router.push('/create_course')}>Create Course</a></li>
                <li><a className="dropdown-item" onClick={() => router.push('/enrol_student')}>Enrol Student</a></li>
                <li><a className="dropdown-item" onClick={() => router.push('/get_enrolled_student')}>Get Student Enrolled</a></li>                
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Component {...pageProps} />
  </>
}
export default MyApp
