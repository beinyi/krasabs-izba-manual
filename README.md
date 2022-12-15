# Работа с проектом

### 1. Установка зависимостей:

### `npm i`

### 2. Запуск проекта:

### `npm run start`

Будет запущен webpack-dev-server с конфигурацией webpack.dev.js

http://localhost:3000/infohelpmobile

### 3. Запуск сервера:

### `npm run test`

Будет запущен webpack server с конфигурацией webpack.dev.js

Доступ на
http://localhost:8080/infohelpmobile

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

В **webpack.common.js** изменить:
```
output: {
	...
	publicPath: "/new_path",
	...
}
```

В **index.tsx** изменить:
```
<BrowserRouter  basename="/new_path">
```

В **/public/index.html** изменить:
```
<base href="/new_path">
```
