# Тестовое задание для компании Жилфонд

## Запуск и управление проектом

Для успешного запуска и управления проектом используйте следующие команды:

### Установка зависимостей

Перед началом работы убедитесь, что все необходимые зависимости установлены. Выполните команду:

```shell
npm install
```

### Запуск проекта в режиме разработки

Для запуска проекта в режиме разработки выполните команду:

```shell
npm run dev
```

### Сборка проекта

Для создания оптимизированной сборки проекта используйте команду:

```shell
npm run build
```

### Форматирование кода

Для автоматического форматирования кода используйте команду:

```shell
npm run prettier
```

## Функциональность

В проекте реализованы следующие функции:

-   **Поиск пользователей**: Возможность искать как одного пользователя, так и нескольких (например, Bret, Antonette). Поиск работает по полям `id` и `name`.

-   **Учет большого количества пользователей**: При выборе способа получения пользователя(пользователей) и фильтрации учитывается, что может быть более 2000 пользователей, что обеспечивает масштабируемость приложения.

-   **Синхронизация состояния профиля пользователя**: При изменении состояния в sidebar, страница с профилем пользователя автоматически обновляет свое состояние. Если открыт профиль пользователя и затем стирается `id` или `name` текущего профиля из строки поиска, список найденных пользователей обновляется, и страница профиля возвращается в исходное состояние.

-   **Обработка дублирующихся имён/ID и порядок пользователей**: Учтен случай дублирующих имён или ID. При поиске пользователи отображаются в списке в том же порядке, в котором введены их ID в строке поиска, что обеспечивает удобство работы с большим количеством данных.

## Требования:

Проект соответствует следующим требованиям:

1. SPA должно быть реализовано с использованием React.
2. Созданы основные компоненты.
3. Используются actions и mutations.
4. Стили написаны с помощью препроцессора SCSS.
5. Во время всех запросов пользователь получает сигнал через прелоадер о происходящем запросе.
6. Используется изоляция стилей.

## Используемые технологии

В этом проекте использованы современные веб-технологии и инструменты для создания эффективного и масштабируемого приложения:

-   **React**: Основная библиотека для построения пользовательских интерфейсов, обеспечивающая реактивное и компонентное программирование.

-   **SCSS**: Для стилизации компонентов использовались SCSS модули, а также была добавлена простая адаптивая вёрстка.

-   **TypeScript**: Для типизации проекта был использован TS.

-   **Vite**: Современный сборщик для быстрой разработки и сборки проекта с минимальным временем ожидания и автоматической переработкой кода.

-   **ESLint и Prettier**: Инструменты для анализа и форматирования кода, помогающие поддерживать высокое качество и единообразие кода в проекте.

## Компоненты

компонент заголовка приложения, отображающий название и информацию о пользователе.

-   [App ](./src/App.tsx) - главный компонент приложения, который управляет состоянием пользователей и текущего выбранного пользователя, обрабатывает выбор пользователей и асинхронно загружает данные на основе введенных ID и имен.
-   [Header](./src/components/Header/Header.tsx) - компонент заголовка приложения, отображающий название и информацию о пользователе.
-   [Layout](./src/components/Layout/Layout.tsx) - компонент-обертка для основного контента, содержащий заголовок и основную часть страницы.
-   [Preloader](./src/components/Preloader/Preloader.tsx) - компонент прелоадера, отображающий индикатор загрузки во время выполнения асинхронных операций.
-   [UserCard](./src/components/UserCard/UserCard.tsx) - компонент, отображающий информацию о пользователе, включая аватар, имя и email. Указывает на активного пользователя, если его ID совпадает с текущим.
-   [Sidebar](./src/pages/SideBar/SideBar.tsx) - боковая панель для поиска сотрудников, позволяющая пользователю вводить ID или имя, отображая результаты поиска и индикатор загрузки.
-   [UserProfile ](./src/pages/UserProfile/UserProfile.tsx) - компонент, отображающий профиль выбранного сотрудника, включая аватар, email, телефон и информацию о пользователе. Показывает сообщение, если сотрудник не выбран.

## API

-   [Api](./src/api/api.ts) - основной файл для настройки и вызова API
-   [validateResponse](./src/api/validateResponse.ts) - утилита для валидации ответов от API

## Store

-   [Store](./src/store/store.ts) - редьюсер и типы для управления состоянием пользователей, включая загрузку, ошибки и кэширование. Поддерживает действия для получения пользователей, обработки ошибок и очистки состояния.

## Utils

-   [FetchUsers](./src/store/store.ts) - асинхронная функция для получения пользователей из API. Использует кэш для предотвращения повторных запросов и сортирует пользователей по порядку входных данных. Обрабатывает состояние загрузки и ошибки через dispatch функции Redux.
-   [sortUsersByInputOrder](./src/store/store.ts) - функция для сортировки массива пользователей по порядку ID и именам, переданным в виде массивов. Удаляет дубликаты и возвращает отсортированный массив пользователей, учитывая уникальные ID и имена.
