import "./App.scss";
import { useState } from "react";

function App() {
  // let studentName = "Ömer Faruk Çelik";
  // const [studentName, setStudentName] = useState("Ömer Faruk Çelik");
  // const [studentName, setStudentName] = useState("");
  // const [studentCourseName, setStudentCourseName] = useState("");
  // const [studentInstructorName, setStudentInstructorName] = useState("");
  // const [studentScore, setStudentScore] = useState("");

  const [student, setStudent] = useState({
    name: "",
    course: "",
    instructor: "",
    score: "",
  });

  const [students, setStudents] = useState([]);

  // const [studentNameError, setStudentNameError] = useState(false);
  // const [studentCourseNameError, setStudentCourseNameError] = useState(false);
  // const [studentInstructorNameError, setStudentInstructorNameError] =
  //   useState(false);
  // const [studentScoreError, setStudentScoreError] = useState(false);

  const [error, setError] = useState({
    name: false,
    course: false,
    instructor: false,
    score: false,
  });
  const addStudent = (event) => {
    event.preventDefault();

    setError({
      name: false,
      course: false,
      instructor: false,
      score: false,
    });

    if (Object.values(student).every((value) => value)) {
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

      setStudents((prevStudentList) => [...prevStudentList, student]);

      setStudent({
        name: "",
        course: "",
        instructor: "",
        score: "",
      });
    } else {
      Object.keys(student).forEach(key => !student[key] && setError(prevError => ({...prevError, [key]:true})));
      // Object.keys(student).forEach((key) => {
      //   // !student[key] && setError((prevError) => ({
      //   //   ...prevError,
      //   //   [key]: !Boolean(student[key]),
      //   // }));
      //   if (!student[key]) {
      //     setError((prevError) => ({
      //       ...prevError,
      //       [key]: !Boolean(student[key]),
      //     }));

      //     console.log({ ...error, [key]: !Boolean(student[key]) })
      //   }
      // });
      // !student.name &&
      //   setError((prevError) => ({ ...prevError, nameError: true }));
      // !student.course &&
      //   setError((prevError) => ({ ...prevError, courseError: true }));
      // !student.instructor &&
      //   setError((prevError) => ({ ...prevError, instructorError: true }));
      // !student.score &&
      //   setError((prevError) => ({ ...prevError, scoreError: true }));
    }
  };

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
      <h1 className="app-header">Student Manager</h1>
      <div className="student">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Course Name</th>
              <th>Instructor Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {students.map(({ name, course, instructor, score }, index) => (
              <tr key={index}>
                <td>{name}</td>
                <td>{course}</td>
                <td>{instructor}</td>
                <td>{score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={student.name}
            minLength={2}
            placeholder="Enter Student Name"
            onChange={(event) =>
              setStudent((prevStudent) => ({
                ...prevStudent,
                name: event.target.value,
              }))
            }
          />
          {error.name && <span>Geçerli bir değer giriniz!</span>}
        </div>
        <div className="form-group">
          <label>Course Name</label>
          <input
            type="text"
            value={student.course}
            placeholder="Enter Student Course Name"
            onChange={(event) =>
              setStudent((prevStudent) => ({
                ...prevStudent,
                course: event.target.value,
              }))
            }
          />
          {error.course && <span>Geçerli bir değer giriniz!</span>}
        </div>
        <div className="form-group">
          <label>Instructor Name</label>
          <input
            type="text"
            value={student.instructor}
            placeholder="Enter Student Instructor Name"
            onChange={(event) =>
              setStudent((prevStudent) => ({
                ...prevStudent,
                instructor: event.target.value,
              }))
            }
          />
          {error.instructor && <span>Geçerli bir değer giriniz!</span>}
        </div>
        <div className="form-group">
          <label>Score</label>
          <input
            type="number"
            value={student.score}
            placeholder="Enter Student Score"
            onChange={(event) =>
              setStudent((prevStudent) => ({
                ...prevStudent,
                score: event.target.value,
              }))
            }
          />
          {error.score && <span>Geçerli bir değer giriniz!</span>}
        </div>
        <div className="form-group">
          <button className="btn-primary" onClick={addStudent}>
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
