import React from 'react';

const Courses = () => {
    // Sample list of courses
    const courses = [
        { id: 1, name: 'Introduction to Computer Science', code: 'CS101' },
        { id: 2, name: 'Data Structures and Algorithms', code: 'CS102' },
        { id: 3, name: 'Web Development', code: 'CS201' },
        { id: 4, name: 'Database Management Systems', code: 'CS202' },
        { id: 5, name: 'Operating Systems', code: 'CS301' },
    ];

    return (
        <div>
            <h2>Available Courses</h2>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        <strong>{course.name}</strong> (Code: {course.code})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Courses;