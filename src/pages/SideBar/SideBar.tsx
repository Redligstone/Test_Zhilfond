import React from 'react';
import UserCard from '../../components/UserCard/UserCard';
import { User } from '../../types/types';
import s from './Sidebar.module.scss';
import Preloader from '../../components/Preloader/Preloader';

interface SidebarProps {
    inputValue: string;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    data: User[] | undefined;
    isLoading: boolean;
    error: string | null;
    onUserSelect: (user: User) => void;
    currentUser?: number;
}

const Sidebar: React.FC<SidebarProps> = ({
    inputValue,
    onInputChange,
    data,
    isLoading,
    error,
    onUserSelect,
    currentUser
}) => {
    return (
        <nav className={s.wrapper}>
            <h3>Поиск сотрудников</h3>
            <input
                type='text'
                placeholder='Введите ID или имя'
                value={inputValue}
                onChange={onInputChange}
                className={s.input}
            />

            {error && <div>Ошибка: {error}</div>}
            <h3>Результаты</h3>
            {inputValue.length ? (
                <div className={s.list}>
                    {data?.map((user) => (
                        <div key={user.id} onClick={() => onUserSelect(user)}>
                            <UserCard user={user} currentUser={currentUser} />
                        </div>
                    ))}
                </div>
            ) : (
                'Начните поиск'
            )}
            {isLoading && !data?.length && <Preloader />}
            {inputValue.length && !data?.length && !isLoading ? 'Ничего не найдено' : ''}
        </nav>
    );
};

export default Sidebar;
