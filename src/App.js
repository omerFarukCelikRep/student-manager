import './App.scss';
import { useState } from 'react';

function App() {
  // let studentName = "Ömer Faruk Çelik";
  // const [studentName, setStudentName] = useState("Ömer Faruk Çelik");
  const [studentName, setStudentName] = useState("");
  const [studentCourseName, setStudentCourseName] = useState("");
  const [studentInstructorName, setStudentInstructorName] = useState("");
  const [studentScore, setStudentScore] = useState("");

  // const [student, setStudent] = useState({});
  const [students, setStudents] = useState([]);

  const [studentNameError, setStudentNameError] = useState(false);
  const [studentCourseNameError, setStudentCourseNameError] = useState(false);
  const [studentInstructorNameError, setStudentInstructorNameError] = useState(false);
  const [studentScoreError, setStudentScoreError] = useState(false);
  const addStudent = (event) => {
    event.preventDefault();

    setStudentNameError(false);
    setStudentCourseNameError(false);
    setStudentInstructorNameError(false);
    setStudentScoreError(false);

    if (studentName && studentCourseName && studentInstructorName && studentScore) {

      // setStudent({
      //   name: studentName,
      //   courseName: studentCourseName,
      //   instructorName: studentInstructorName,
      //   score: studentScore
      // });

      // setStudents([...students, {
      //   name: studentName,
      //   courseName: studentCourseName,
      //   instructorName: studentInstructorName,
      //   score: studentScore
      // }]);

      setStudents(prevStudentList => [...prevStudentList, {
        name: studentName,
        courseName: studentCourseName,
        instructorName: studentInstructorName,
        score: studentScore
      }]);

      setStudentName("");
      setStudentCourseName("");
      setStudentInstructorName("");
      setStudentScore("");
    } else {
      !studentName && setStudentNameError(true);
      !studentCourseName && setStudentCourseNameError(true);
      !studentInstructorName && setStudentInstructorNameError(true);
      !studentScore && setStudentScoreError(true);
    }
  }


  // const setAndUpdateName = studentName => {
  //   if(!studentName){
  //     throw new Error("Hata mesajı");
  //   }

  //   if (!(studentName.length > 2)) {
  //     throw new Error();
  //   }



  //   setUpdatedStudentName(studentName.trim());
  // }


  return (
    <div className="app">
      <h1 className='app-header'>Student Manager</h1>
      <h2>{studentName}</h2>
      <div className='student'>
        <table>
          <thead>
          </thead>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Course Name</th>
              <th>Instructor Name</th>
              <th>Score</th>
            </tr>
            {students.map(({ name, courseName, instructorName, score }) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{courseName}</td>
                <td>{instructorName}</td>
                <td>{score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <form>
        <div className='form-group'>
          <label>Name</label>
          <input type="text" value={studentName} minLength={2} placeholder='Enter Student Name' onChange={event => setStudentName(event.target.value)} />
          {studentNameError && <span>Geçerli bir değer giriniz!</span>}
        </div>
        <div className='form-group'>
          <label>Course Name</label>
          <input type="text" value={studentCourseName} placeholder='Enter Student Course Name' onChange={event => setStudentCourseName(event.target.value)} />
          {studentCourseNameError && <span>Geçerli bir değer giriniz!</span>}
        </div>
        <div className='form-group'>
          <label>Instructor Name</label>
          <input type="text" value={studentInstructorName} placeholder='Enter Student Instructor Name' onChange={event => setStudentInstructorName(event.target.value)} />
          {studentInstructorNameError && <span>Geçerli bir değer giriniz!</span>}
        </div>
        <div className='form-group'>
          <label>Score</label>
          <input type="number" value={studentScore} placeholder='Enter Student Score' onChange={event => setStudentScore(event.target.value)} />
          {studentScoreError && <span>Geçerli bir değer giriniz!</span>}
        </div>
        <div className='form-group'>
          <button className='btn-primary' onClick={addStudent}>
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
