# Fitness app
The Fitness App is a comprehensive platform designed to help users maintain a healthy lifestyle through various features, including finding exercises for particular body parts, nutrition management, and access to fitness-related articles. The articles feature is particularly focused on providing users with valuable information on fitness, nutrition, and wellness.

Note: Project uses for backend [fitness-api](https://github.com/ksawio97/fitness-api).

## Technologies
- Postgresql
- Docker
- Java Spring Boot
- React
- Material-UI
- Nodejs
- nginx
## Development setup
Side note: Data needs to be added after docker build manualy.
### 1. Prerequisites
 - Docker
 - node js
### 2. Setup
Run this command to download npm dependencies
```
npm i
```
Them run following command to create network containing db and backend service in docker
```
docker compose -f compose-dev.yaml up
```
Then run application localy
```
npm start
```
## Deployment
Run this command to run Docker network.
```
docker compose up
```
You can now access app on localhost:8000

## Preview 
![main page](/docs-media/1.png)
![calculator page](/docs-media/2.png)
![articles page](/docs-media/3.png)
![article page](/docs-media/4.png)