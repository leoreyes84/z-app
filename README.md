# z-app
This is an application to use twitter app to get some twitts and modify a portfolio.

# *How to run the application*
## I. Prerequisites
- Node js
https://nodejs.org/en/
- Java 11

## II. Run local twitter server 
- Go to twitter-server folder
- Install twit package and dependencies using the command console
 ```
npm install twit body-parser cors express
```
- Run the server
```
node server
```
- It should be run in http://localhost:3000

## III. Run the back-end service
- Go to rest-demo folder
- Run the service
```
mvn spring-boot:run
```
- It should be run in http://localhost:8080

## IV. Run the front-end application
- Go to portfolio-app folder
- Install dependencies executing in cmd
```
npm install
```
- You can run the e2e tests
```
ng e2e
```
- Run the application
```
ng s
```
- It should be run in http://localhost:4200

# *Technologies*
## I. Back-end
- Spring boot 2.3.4
- Java 11
- Lombok 1.18
- ModelMapper 2.3.7
- IDE Eclipse

## II. Front-end
- Angular 8
- Jasmine-Protractor
- IDE Visual Studio Code

## III. Twitter api
- Twit packages
- Node server

# *Time taken for the test*
- 8 hours
