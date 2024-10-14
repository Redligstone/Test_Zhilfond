import React, { useCallback, useState } from 'react';
import { useEffect, useMemo, useReducer } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Sidebar from './pages/SideBar/SideBar';
import UserProfile from './pages/UserProfile/UserProfile';
import { reducer, UserState } from './store/store';
import { fetchUsers } from './utils/userService';
import { ActionTypes, User } from './types/types';

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
    cache: {}
};
function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [inputValue, setInputValue] = React.useState<string>('');
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const { users, loading, error, cache } = state;

    const handleUserSelect = (user: User) => {
        setCurrentUser(user);
    };
    const idsArr: number[] = useMemo(
        () =>
            inputValue
                .split(',')
                .map((id) => parseInt(id.trim()))
                .filter((id) => !isNaN(id)),
        [inputValue]
    );

    const usernamesArr: string[] = useMemo(
        () =>
            inputValue
                .split(',')
                .map((name) => name.trim())
                .filter((name) => isNaN(Number(name))),
        [inputValue]
    );

    const handleFetchUsers = useCallback(async () => {
        await fetchUsers({ idsArr, usernamesArr, cache, dispatch });
    }, [idsArr, usernamesArr, cache, dispatch]);

    useEffect(() => {
        if (idsArr.length === 0 && usernamesArr.length === 0) {
            dispatch({ type: ActionTypes.CLEAR_USERS });
        } else {
            handleFetchUsers();
        }
    }, [idsArr, usernamesArr]);

    useEffect(() => {
        if (currentUser && !users.some((user) => user.id === currentUser.id)) {
            setCurrentUser(null);
        }
    }, [users, currentUser]);

    return (
        <div className='app'>
            <Layout>
                <Sidebar
                    inputValue={inputValue}
                    onInputChange={(e) => setInputValue(e.target.value)}
                    data={loading ? [] : users}
                    isLoading={loading}
                    error={error}
                    onUserSelect={handleUserSelect}
                    currentUser={currentUser?.id}
                />
                <UserProfile user={currentUser} />
            </Layout>
        </div>
    );
}

export default App;
