import React from 'react';

const Timetable = () => {
    // Sample timetable data
    const timetable = {
        Monday: [
            { time: '9:00 AM - 10:30 AM', course: 'CS101 - Introduction to Computer Science' },
            { time: '10:45 AM - 12:15 PM', course: 'CS102 - Data Structures and Algorithms' },
        ],
        Tuesday: [
            { time: '1:00 PM - 2:30 PM', course: 'CS201 - Web Development' },
        ],
        Wednesday: [
            { time: '9:00 AM - 10:30 AM', course: 'CS101 - Introduction to Computer Science' },
            { time: '10:45 AM - 12:15 PM', course: 'CS102 - Data Structures and Algorithms' },
        ],
        Thursday: [
            { time: '1:00 PM - 2:30 PM', course: 'CS202 - Database Management Systems' },
        ],
        Friday: [
            { time: '9:00 AM - 10:30 AM', course: 'CS301 - Operating Systems' },
        ],
    };

    return (
        <div>
            <h2>Student Timetable</h2>
            {Object.keys(timetable).map(day => (
                <div key={day}>
                    <h3>{day}</h3>
                    <ul>
                        {timetable[day].map((classDetail, index) => (
                            <li key={index}>
                                <strong>{classDetail.time}</strong>: {classDetail.course}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Timetable;