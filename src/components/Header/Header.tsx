import React from 'react';
import s from './Header.module.scss';
const Header: React.FC = () => {
    return (
        <header className={s.header}>
            <h1>Жилфонд</h1>
            <div className={s.user}>Пользователь</div>
        </header>
    );
};

export default Header;
