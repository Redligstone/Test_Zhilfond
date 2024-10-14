import React from 'react';
import s from './UserProfile.module.scss';
import { User } from '../../types/types';

interface UserProfileProps {
    user: User | null;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    if (!user) {
        return <div className={s.profileEmpty}>Выберите сотрудника, чтобы посмотреть его профиль</div>;
    }

    return (
        <div className={s.profile}>
            <div className={s.avatarContainer}>
                <img src='../../../public/avatar.png' alt={`${user.name}'s avatar`} className={s.avatar} />
            </div>
            <div className={s.info}>
                <div className={s.name}>{user.name}</div>
                <p className={s.email}>
                    <span>email:</span> {user.email}
                </p>
                <p className={s.phone}>
                    <span>phone:</span> {user.phone}
                </p>
                <h3 className={s.aboutHeader}>О себе:</h3>
                <p className={s.about}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
        </div>
    );
};

export default UserProfile;
