# Api Challenge for  software engenieer position
This API provides user and trips management.
---
**Notes**
- A user can only have one role
- When the database is raised, three records are automatically inserted with each of the roles: Administrator, Customer and Advisor. 
- All endpoints of the resource users require a token. And it will be executed according to the user privileges.
- To get the token you must call the following endpoint. You can see the user in the /mongo-seed/init.json file and the key for all users is 1234. See [docuemntation](./README.md#swagger-docs) for calling the endpoint

---
---
**Improvements**
1) Uncouple the auth resource in another project.
2) Add validation on password
3) Complete the test cases
---

## Prerequisites
- Docker [https://www.docker.com/get-started]
- docker-compose

## Build solution
Run this command 
```
docker-compose build 
```
## Up Solution
Run this command
```
docker-compose up -d
```

## Run Solution

1) [Build Solution](./README.md#build-solution)
2) [Up Solution](./README.md#up-solution)

## Run test

## Structure Overview

This is a Nodejs Express API. There are 3 main building blocks: routes, controllers and repositories.

### routes

They are declared in the `src/router.js` file. Their only function is to declare the desired endpoints and bind a controller implementation to it.

### controllers

These are inside the `src/controllers` directory. The main function of these is to handle and validate the HTTP requests and responses. They do not process any data, they request data from services.


### models

These are inside the `src/models` directory. Models manages the core business logic of the API. They request the external data using the repositories and make any kind of business processing from that data to return it to the controller.


### repositories

These are inside the `src/repositories` directory. They represent an interface to request external information (Databases, external connections, other APIs, etc). These are like utility objects to help with external data request that should be configured and reused.

### Basic data flow

*Client request* -> route -> controller -> model -> repository -> model -> controller -> *Server response*

## Instructions for local development

This is a Dockerized project so we use docker-compose to easily manage containers, environment variables and external dependencies (databases, services, etc). You can see and change the configuration in the `docker-compose.yml` file.

There are 2 main services to run:

- [challengeapi](#challengeapi)
- [challengedb](#challengedb)


### challengeapi

This service is the Node API. To start the app and develop right away, just run:

```bash
docker-compose build challengeapi
docker-compose up challengeapi
```

### challengedb

This service is mongodb database. 

```bash
docker-compose build challengedb
docker-compose up challengedb
```


### NOTES

- If you install new dependencies with `npm install MODULE_NAME`, you must build again the Docker image with `sudo docker-compose build --no-cache SERVICE_NAME`

- To just stop a service, run `sudo docker-compose stop SERVICE_NAME`

- To stop, remove and clean everything up of this application, run `sudo docker-compose down`. (This will delete everything)

## Swagger Docs

- This project implements a swagger ui. To view it just go to: [Api docs](http://localhost:8080/docs)

## Helpful

- [Build local API](http://localhost:8080/health/)
