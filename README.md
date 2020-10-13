# Feature Toggle Demo App

A simple application demonstrating Serverless and React frameworks, building
a Feature Toggle Demo Application.

The application consists of two parts:

* The HTTP REST API implementing the logic (`api` directory)
* The application itself to show enabled features as well as admin page for
  for toggling the features (`app` directory)

## Testing

To test the app locally, follow the steps described below:

* Install Java (needed for unit testing using local DynamoDB instance):
    * `brew tap adoptopenjdk/openjdk`
    * `brew cask install adoptopenjdk`
* `npm run bootstrap`
* `npm run start-test-db`
* `npm test`
    * API test will run first
    * React app tests will run second, press `a` when prompted

You may run the React app locally and connect to an already deployed version of the API
running the following command:

```
$ npm run start
```

...then follow the instructions.

Happy testing!!