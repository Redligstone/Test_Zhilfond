import { User } from '../types/types';
import { validateResponse } from './validateResponse';

export const getUsers = (ids?: number[], names?: string[]): Promise<User[]> => {
    const params: string[] = [...(ids?.map((id) => `id=${id}`) || []), ...(names?.map((name) => `name=${name}`) || [])];

    const queryString = params.length > 0 ? `?${params.join('&')}` : '';

    return fetch(`api/users${queryString}`)
        .then(validateResponse)
        .then((res) => res.json());
};
