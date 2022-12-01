import React, { useState } from "react";

const List = ({ students }) => {
  const [filteredStudentList, setFilteredStudentList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const search = (event) => {
    setSearchTerm(event.target.value);
    const normalizedSearchTerm = event.target.value.trim().toLowerCase();
    if (normalizedSearchTerm) {
      setFilteredStudentList(
        students.filter((student) =>
          Object.values(student).some((val) =>
            val.toLowerCase().includes(normalizedSearchTerm)
          )
        )
      );
    } else {
      setFilteredStudentList([]);
    }
  };

  return (
    <>
      <div className="student">
        <table>
          <thead>
            <tr>
              <th colSpan={4}>Student List</th>
            </tr>
            <tr>
              <th colSpan={2}></th>
              <th style={{ textAlign: "end" }}>Search :</th>
              <th>
                <input
                  style={{ width: "90%" }}
                  type={"search"}
                  onChange={search}
                />
              </th>
            </tr>
            <tr>
              <th>Name</th>
              <th>Course Name</th>
              <th>Instructor Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudentList.length
              ? filteredStudentList.map(
                  ({ name, course, instructor, score }, index) => (
                    <tr key={index}>
                      <td>{name}</td>
                      <td>{course}</td>
                      <td>{instructor}</td>
                      <td>{score}</td>
                    </tr>
                  )
                )
              : students.map(({ name, course, instructor, score }, index) => (
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
    </>
  );
};

export default List;
