import React from 'react';
import s from './Preloader.module.scss';

const Preloader: React.FC = () => {
    return (
        <div className={s.preloader}>
            <div className={s.spinner}></div>
        </div>
    );
};

export default Preloader;
