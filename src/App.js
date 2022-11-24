import "./App.scss";
import { useState } from "react";
import Header from "./components/shared/header/Header";
import List from "./components/student/list/List";
import Create from "./components/student/create/Create";

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

  const [isStudentValid, setIsStudentValid] = useState({
    name: true,
    course: true,
    instructor: true,
    score: true,
  });
  const addStudent = (event) => {
    event.preventDefault();

    setIsStudentValid({ ...student });

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
    }
    // else {
    //   Object.keys(student).forEach(
    //     (key) =>
    //       !student[key] &&
    //       setIsValid((prevError) => ({ ...prevError, [key]: false }))
    //   );
    //   // Object.keys(student).forEach((key) => {
    //   //   // !student[key] && setError((prevError) => ({
    //   //   //   ...prevError,
    //   //   //   [key]: !Boolean(student[key]),
    //   //   // }));
    //   //   if (!student[key]) {
    //   //     setError((prevError) => ({
    //   //       ...prevError,
    //   //       [key]: !Boolean(student[key]),
    //   //     }));

    //   //     console.log({ ...error, [key]: !Boolean(student[key]) })
    //   //   }
    //   // });
    //   // !student.name &&
    //   //   setError((prevError) => ({ ...prevError, nameError: true }));
    //   // !student.course &&
    //   //   setError((prevError) => ({ ...prevError, courseError: true }));
    //   // !student.instructor &&
    //   //   setError((prevError) => ({ ...prevError, instructorError: true }));
    //   // !student.score &&
    //   //   setError((prevError) => ({ ...prevError, scoreError: true }));
    // }
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
      <Header />
      <List students={students} />
      <Create
        student={student}
        setStudent={setStudent}
        isStudentValid={isStudentValid}
        addStudent={addStudent}
      />
    </div>
  );
}

export default App;
