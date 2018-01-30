![cf](https://i.imgur.com/7v5ASc8.png) 11: Single Resource Express API
======

## Submission Instructions
  * fork this repository & create a new branch for your work
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Learning Objectives
* students will be able to create a single resource API using the express framework
* students will be able to leverage 3rd party helper modules for debugging, logging, and handling errors

## Requirements

#### Configuration
* `package.json`
* `.eslintrc.json`
* `.gitignore`
* `README.md`
  * your `README.md` should include detailed instructions on how to use your API

#### Feature Tasks
* create an HTTP server using `express`
* create a object constructor that creates a _simple resource_ with at least 3 properties
    * it can **not** have the same properties as the in-class sample code (other than the `id`)
    * a unique `_id` property should be included *(uuid)*
    * include two additional properties of your choice
* use the JSON parser included with the `body-parser` module as a middleware component to parse the request body on `POST` and `PUT` routes
* use the npm `debug` module to log the methods in your application
* create any `npm` scripts to automate the development process
* persist your API data using the storage module and file system persistence

#### Server Endpoints
* **`/api/v1/simple-resource-name`**
* `POST` request
    * pass data as stringifed JSON in the body of a **POST** request to create a new resource
* `GET` request
    * pass `/:_id` as a parameter to retrieve a specific resource (as JSON)
* `PUT` request
    * pass `/:_id` as a parameter with a body of data to **UPDATE** a pre-existing resource
* `DELETE` request
    * pass `/:_id` as a parameter to **DELETE** a specific resource
    * this should return a 204 status code with no content in the body


## Stretch:
#### Tests
* write a test to ensure that your api returns a status code of 404 for routes that have not been registered
* write tests to ensure the `/api/v1/simple-resource-name` endpoint responds as expected.