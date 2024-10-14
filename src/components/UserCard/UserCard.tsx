import React from 'react';
import s from './UserCard.module.scss';
import { User } from '../../types/types';

interface UserCardProps {
    user: User;
    currentUser?: number;
}

const UserCard: React.FC<UserCardProps> = ({ user, currentUser }) => {
    return (
        <div className={`${s.card} ${currentUser && currentUser === user.id ? s.active : ''}`}>
            <img src='../../../public/avatar.png' alt={`${user.name}'s avatar`} className={s.avatar} />
            <div className={s.info}>
                <h3 className={s.name}>{user.name}</h3>
                <p className={s.email}>{user.email}</p>
            </div>
        </div>
    );
};
export default UserCard;
