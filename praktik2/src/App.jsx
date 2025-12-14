import React from 'react';
import './App.css';

function App() {
  // Data dinamis
  const student = {
    name: "Vivi",
    nim: "20255202",
    major: "Ilmu Komputer"
  };

  const courses = ["Pemrograman React", "Algoritma", "Basis Data"];

  // Function untuk menampilkan data
  const getCurrentTime = () => {
    return new Date().toLocaleTimeString();
  };

  return (
    <div className="App">
      {/* Data statis */}
      <h1>Belajar JSX di React</h1>

      {/* Menampilkan data dinamis */}
      <div className="student-info">
        <h2>Informasi Mahasiswa</h2>
        <p>Nama: {student.name}</p>
        <p>NIM: {student.nim}</p>
        <p>Jurusan: {student.major}</p>
      </div>

      {/* Menampilkan array */}
      <div className="courses">
        <h3>Mata Kuliah:</h3>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>

      {/* Menampilkan function result */}
      <div className="time">
        <p>Waktu saat ini: {getCurrentTime()}</p>
      </div>

      {/* Conditional rendering */}
      <div className="status">
        <p>Status: {student.nim ? "Terdaftar" : "Belum terdaftar"}</p>
      </div>
    </div>
  );
}

export default App;