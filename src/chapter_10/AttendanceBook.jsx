import React from "react";

const students = [
    {
        id: 1,
        name: "Inje",
    },
    {
        id: 2,
        name: "A",
    },
    {
        id: 3,
        name: "B",
    },
    {
        id: 4,
        name: "C",
    },
    {
        id: 5,
        name: "D",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student, index) => {
                return <li key={index}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;