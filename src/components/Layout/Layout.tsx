import React from 'react';
import s from './Layout.module.scss';
import Header from '../Header/Header';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={s.layout}>
            <Header />
            <main className={s.main}>{children}</main>
        </div>
    );
};

export default Layout;
