# Работа с проектом

### 1. Установка зависимостей:

### `npm i`

### 2. Запуск проекта:

### `npm run start`

Будет запущен webpack-dev-server с конфигурацией webpack.dev.js

http://localhost:3000/

### 3. Запуск сервера:

### `npm run test`

Будет запущен webpack server с конфигурацией webpack.dev.js

Доступ на
http://localhost:8080/

### `npm run test-prod`

Будет запущен webpack server с конфигурацией webpack.prod.js

Доступ на
http://localhost:8080/infohelpmobile

### 4. Сборка билда проекта:

### `npm run build`

Билд с конфигурацией webpack.dev.js

Доступ из корня сервера


### `npm run build-prod`

Билд с конфигурацией webpack.prod.js

Доступ на /infohelpmobile


Билд в папке **dist**


### 5. Смена адреса для prod:

В **webpack.prod.js** изменить:
```
output: {
	...
	publicPath: "/new_path",
	...
}
```

В **index.tsx** изменить:
```
<BrowserRouter  basename={
    process.env.NODE_ENV ==  'production'  ?  "/new_path"  :  ""
}>
```
