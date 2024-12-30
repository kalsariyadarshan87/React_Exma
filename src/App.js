
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import StudentList from './Component/StudentList';
import StudentFrom from './Component/StudentFrom';
import Signup from './Component/Signup';
import Login from './Component/Login';
import StudentDetils from './Component/StudentDetils';
import Home from './Component/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="studentlist" element={<StudentList />} />
          <Route path="studentform" element={<StudentFrom/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='studentDetail/:id' element={<StudentDetils />} />



        </Routes>
    </div>
  );
}

export default App;
