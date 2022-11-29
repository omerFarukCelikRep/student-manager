import React from "react";

const Create = ({ student, isStudentValid, handleStudentProp, addStudent }) => {
  return (
    <>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={student.name}
            minLength={2}
            placeholder="Enter Student Name"
            onChange={(event) =>
              handleStudentProp({ name: event.target.value })
            }
          />
          {!isStudentValid.name && <span>Geçerli bir değer giriniz!</span>}
        </div>
        <div className="form-group">
          <label>Course Name</label>
          <input
            type="text"
            value={student.course}
            placeholder="Enter Student Course Name"
            onChange={(event) =>
              handleStudentProp({ course: event.target.value })
            }
          />
          {!isStudentValid.course && <span>Geçerli bir değer giriniz!</span>}
        </div>
        <div className="form-group">
          <label>Instructor Name</label>
          <input
            type="text"
            value={student.instructor}
            placeholder="Enter Student Instructor Name"
            onChange={(event) =>
              handleStudentProp({ instructor: event.target.value })
            }
          />
          {!isStudentValid.instructor && (
            <span>Geçerli bir değer giriniz!</span>
          )}
        </div>
        <div className="form-group">
          <label>Score</label>
          <input
            type="number"
            value={student.score}
            placeholder="Enter Student Score"
            onChange={(event) =>
              handleStudentProp({ score: event.target.value })
            }
          />
          {!isStudentValid.score && <span>Geçerli bir değer giriniz!</span>}
        </div>
        <div className="form-group">
          <button className="btn-primary" onClick={addStudent}>
            Add Student
          </button>
        </div>
      </form>
    </>
  );
};

export default Create;
