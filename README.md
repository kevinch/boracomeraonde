#Bora Comer Aonde?

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Available Scripts

In the project directory:

### `npm i`

To get all dependencies

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

To check the result you will need to do the following after the build command:

* `yarn global add pushstate-server` (if not already installed)
* `pushstate-server build`
* `json-server -p 8080 --watch db.json` (to run the backend)
* open [http://localhost:9000](http://localhost:9000)
