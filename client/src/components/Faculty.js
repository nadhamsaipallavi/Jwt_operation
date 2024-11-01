import React from 'react';

const Faculty = () => {
    // Sample list of faculty members
    const facultyMembers = [
        { id: 1, name: 'Dr. Alice Smith', courses: ['CS101', 'CS102'] },
        { id: 2, name: 'Prof. Bob Johnson', courses: ['CS201', 'CS202'] },
        { id: 3, name: 'Dr. Charlie Brown', courses: ['CS301'] },
    ];

    return (
        <div>
            <h2>Faculty Members</h2>
            <ul>
                {facultyMembers.map(faculty => (
                    <li key={faculty.id}>
                        <strong>{faculty.name}</strong>
                        <ul>
                            {faculty.courses.map((course, index) => (
                                <li key={index}>{course}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Faculty;