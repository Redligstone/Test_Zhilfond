import { User } from '../types/types';
export const sortUsersByInputOrder = (fetchedUsers: User[], ids: number[], names: string[]): User[] => {
    const usersMap = new Map(fetchedUsers.map((user) => [user.id, user]));

    // Если оба массива пустые, возвращаем пустой массив
    if (ids.length === 0 && names.length === 0) {
        return [];
    }

    // Удаляем дубликаты из ids
    const uniqueIds = Array.from(new Set(ids));

    // Сначала получаем пользователей по ID
    const usersById = uniqueIds.map((id) => usersMap.get(id)).filter((user) => user !== undefined) as User[];

    // Если есть имена, фильтруем пользователей по именам
    let filteredUsers: User[] = [];
    if (names.length > 0) {
        const uniqueNamesSet = new Set(names);

        // Получаем пользователей по именам
        const usersByName = fetchedUsers.filter((user) => uniqueNamesSet.has(user.name));

        // Объединяем пользователей по ID и имени
        filteredUsers = [...new Set([...usersById, ...usersByName])];
    } else {
        // Если имена не переданы, используем только пользователей по ID
        filteredUsers = usersById;
    }

    // Сортируем пользователей по порядку ID
    filteredUsers.sort((a, b) => uniqueIds.indexOf(a.id) - uniqueIds.indexOf(b.id));

    // Удаляем дубликаты пользователей (по ID)
    const uniqueSortedUsers = Array.from(new Map(filteredUsers.map((user) => [user.id, user])).values());

    // Если есть имена, сортируем пользователей по именам
    if (names.length > 0) {
        uniqueSortedUsers.sort((a, b) => names.indexOf(a.name) - names.indexOf(b.name));
    }

    return uniqueSortedUsers;
};
