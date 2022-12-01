import "./App.scss";
import { useState } from "react";
import Header from "./components/shared/header/Header";
import List from "./components/app/student/list/List";
import Create from "./components/app/student/create/Create";

function App() {

  const [student, setStudent] = useState({
    name: "",
    course: "",
    instructor: "",
    score: "",
  });

  const [students, setStudents] = useState([]);

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
      setStudents((prevStudentList) => [...prevStudentList, student]);

      setStudent({
        name: "",
        course: "",
        instructor: "",
        score: "",
      });
    }
  };

  const handleStudentInputProp = (studentProp) => setStudent(prevStudent => ({...prevStudent, ...studentProp}));

  return (
    <div className="app">
      <Header />
      <List students={students} />
      <Create
        student={student}
        isStudentValid={isStudentValid}
        handleStudentProp={handleStudentInputProp}
        addStudent={addStudent}
      />
    </div>
  );
}

export default App;
