import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/home">home</Link></li>
                <li><Link to="/students">Students</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/faculty">Faculty</Link></li>
                <li><Link to="/timetable">Timetable</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
