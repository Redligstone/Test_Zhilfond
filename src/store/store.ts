import { ActionTypes, User } from '../types/types';

export interface UserState {
    users: User[];
    loading: boolean;
    error: string | null;
    cache: Record<string, User[]>;
}

export type UserAction =
    | { type: ActionTypes.FETCH_USERS_PENDING }
    | { type: ActionTypes.FETCH_USERS_FULFILLED; payload: { data: User[]; ids?: number[]; names?: string[] } }
    | { type: ActionTypes.FETCH_USERS_REJECTED; payload: { error: string } }
    | { type: ActionTypes.CLEAR_USERS };

export const reducer = (state: UserState, action: UserAction): UserState => {
    switch (action.type) {
        case ActionTypes.FETCH_USERS_PENDING:
            return { ...state, loading: true, error: null };

        case ActionTypes.FETCH_USERS_FULFILLED: {
            const { ids, names, data } = action.payload;
            const cacheKey = JSON.stringify(ids) + '|' + JSON.stringify(names);
            return {
                ...state,
                loading: false,
                users: data,
                cache: { ...state.cache, [cacheKey]: data }
            };
        }

        case ActionTypes.FETCH_USERS_REJECTED:
            return { ...state, loading: false, error: action.payload.error };

        case ActionTypes.CLEAR_USERS:
            return { ...state, users: [], error: null, loading: false };

        default:
            return state;
    }
};
