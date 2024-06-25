// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import TeacherLogin from './components/TeacherLogin';
import StudentLogin from './components/StudentLogin';
import TeacherWelcome from './components/TeacherWelcome';
import StudentWelcome from './components/StudentWelcome';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/teacher-login" element={<TeacherLogin />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/teacher-welcome" element={<TeacherWelcome />} />
          <Route path="/student-welcome" element={<StudentWelcome />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
