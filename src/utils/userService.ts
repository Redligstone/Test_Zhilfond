import { getUsers } from '../api/api';
import { UserAction } from '../store/store';
import { ActionTypes, User } from '../types/types';
import { sortUsersByInputOrder } from './sortUsersByInputOrder';

interface FetchUsersOptions {
    idsArr: number[];
    usernamesArr: string[];
    cache: Record<string, User[]>;
    dispatch: React.Dispatch<UserAction>;
}

export const fetchUsers = async ({ idsArr, usernamesArr, cache, dispatch }: FetchUsersOptions) => {
    const cacheKey = JSON.stringify(idsArr) + '|' + JSON.stringify(usernamesArr);

    if (cache[cacheKey]) {
        const sortedCachedUsers = sortUsersByInputOrder(cache[cacheKey], idsArr, usernamesArr);
        dispatch({
            type: ActionTypes.FETCH_USERS_FULFILLED,
            payload: { ids: idsArr, names: usernamesArr, data: sortedCachedUsers }
        });
    } else {
        dispatch({ type: ActionTypes.FETCH_USERS_PENDING });
        try {
            const response = await getUsers(idsArr, usernamesArr);
            const sortedUsers = sortUsersByInputOrder(response, idsArr, usernamesArr);
            dispatch({
                type: ActionTypes.FETCH_USERS_FULFILLED,
                payload: { ids: idsArr, names: usernamesArr, data: sortedUsers }
            });
        } catch (error) {
            dispatch({
                type: ActionTypes.FETCH_USERS_REJECTED,
                payload: { error: (error as Error).message || 'Ошибка при загрузке' }
            });
        }
    }
};
