## Development setup
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
### Deployment
Run this command to run Docker network.
```
docker compose up
```
You can now access app on localhost:80