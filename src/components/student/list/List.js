import React from "react";

const List = ({ students }) => {
  return (
    <>
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
    </>
  );
};

export default List;
