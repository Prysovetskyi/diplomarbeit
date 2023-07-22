import React from 'react';
import s from './style.module.css'
import { Link } from 'react-router-dom';
import NoPage from './PageNotFound.png';

const NotFoundPage = () => {
    return (
        <div className={s.page}>
            <img className={s.img} src={NoPage} alt="" />
        </div>
    );
};

export default NotFoundPage;