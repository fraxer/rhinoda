# Rhinoda тестовое задание

## Установить проект
```
npm install
```

### Запустить режим разработки
```
npm run serve
```

### Скомпилировать проект
```
npm run build
```

#### Фильтры
Сортировка данных происходит на стороне сервера, я лишь передаю параметры. Поэтому сортировку в приложении не реализовывал.

#### Данные репозитория на отдельной странице
Нет уточнения как именно нужно "подтянуть" данные на страницу. Реализовал только 2-ой пункт, потому что на страницу можно перейти напрямую.
1. Использовать хранилище vuex. Сохранять данные списка в хранилище, а при переходе на отдельную страницу извлекать нужный объект (если он есть). Если данных в хранилище нет, то отправлять запрос.
2. Отправлять запрос при переходе на страницу.

В компоненте PageProject решил передать объект целиком, чтобы вся логика рендера и стили были в дочернем компоненте.

Не успел внедрить vuetify. Не хватило времени.