Для запуска приложения локально нужно выполнить следующие команды:

1. ### `git clone https://github.com/BulatNsbln/Lifehacker-test.git`
2. ### `cd Lifehacker-test`
3. ### `npm install` или `yarn` 
   (все команды ниже можно выполнить и c yarn)
4. ### `npm start`
Приложение должно запуститься на [http://localhost:8080](http://localhost:8080).

Так же доступны следующие команды: 

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

### `npm run deploy`

Опубликует приложение на GitHub Pages. 
Перед деплоем нужно добавить в .gitignore строчку .env (этот файл позволяет запускать проект на localhost:8080, это необходимо чтобы избежать ошибок связанных с CORS) и 
заменить адрес в 'homepage' в файле package.json на ссылку в свой репозиторий.



 
