import React from "react";

const List = ({ students }) => {
  return (
    <>
      <div className="student">
        <table>
          <thead>
            <tr>
              <th colSpan={4} >Student List</th>
            </tr>
            <tr>
              <th colSpan={2}></th>
              <th style={{textAlign:"end"}}>Search :</th>
              <th>
                <input style={{width:"90%"}} type="text" onChange={event => console.log(event.target.value)} />
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
