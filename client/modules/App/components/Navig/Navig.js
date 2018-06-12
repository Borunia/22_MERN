import React from 'react';
import { Link } from 'react-router';
import styles from './Navig.css';

const Navig = () => (
    <ul className={styles['nav']}>
        <li><Link className={styles['nav-item']} to="/home">Home</Link></li>
        <li><Link className={styles['nav-item']} to="/">Posts</Link></li>
        <li><Link className={styles['nav-item']} to="/about">About</Link></li>
    </ul>
);

export default Navig;
