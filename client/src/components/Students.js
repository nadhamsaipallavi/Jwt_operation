import React from 'react';
import Navbar from './Navbar';

const Students = () => {
    // Sample student details
    const student = {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        major: 'Computer Science',
        year: 'Sophomore',
        courses: ['CS101', 'CS102', 'CS201'],
    };

    return (
        <div>
           
            <h2>Student Details</h2>
            <Navbar />
            <p><strong>ID:</strong> {student.id}</p>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Major:</strong> {student.major}</p>
            <p><strong>Year:</strong> {student.year}</p>
            <h3>Enrolled Courses:</h3>
            <ul>
                {student.courses.map((courseCode, index) => (
                    <li key={index}>{courseCode}</li>
                ))}
            </ul>
        </div>
    );
};

export default Students;
