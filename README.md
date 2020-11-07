# Dubai's Landmarks
![Build Version](https://img.shields.io/badge/Build%20Version-v0.1beta-green.svg?style=for-the-badge)
![NodeJS Version](https://img.shields.io/badge/Node.JS-v14.14.0LTS-success.svg?style=for-the-badge&logo=node.js)
![NPM Version](https://img.shields.io/badge/npm-v6.14.4-red.svg?style=for-the-badge&logo=npm)

Dubai's Landmarks Blog

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system. The project consists of 2 services-projects one for Backend and one for Frontend.

### Prerequisites
You need to install [node.js](https://nodejs.org/en/) 14.14.0 or a later LTS release which comes with npm which comes with npm 6.14.4 or later

# DubaiAttractionsBe

## Installing
Open the project in your editor and run

```
$ npm install
```

## Deployment
```
$ npm start
```
Run npm start for a dev server. Navigate to http://localhost:5000/. The app will automatically reload if you change any of the source files.

## Built With
* [body-parser 1.19.0](https://www.npmjs.com/package/body-parser)
* [cookie-parser 1.4.5](https://www.npmjs.com/package/cookie-parser)
* [dotenv 8.2.0](https://www.npmjs.com/package/dotenv)
* [express 4.11.2](https://www.npmjs.com/package/express)
* [parse 1.8.5](https://www.npmjs.com/package/parse)
* [parse-dashboard 2.1.0](https://www.npmjs.com/package/parse-dashboard)
* [parse-server 2.8.4](https://www.npmjs.com/package/parse-server)
* [request-promise 4.2.6](https://www.npmjs.com/package/request-promise)
* [sharp 0.26.2](https://www.npmjs.com/package/sharp)
* [swagger-ui-express 4.1.4](https://www.npmjs.com/package/swagger-ui-express)
* [yamljs 0.3.0](https://www.npmjs.com/package/yamljs)

## Versioning
[Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/) is used for versioning. 

## API Documentation
Navigate to `http://localhost:5000/api-docs/` for the API Documentation.

## Database
For Database model is used NoSQL and MongoDB. The database is on cloud on [Mongo Atlas](https://www.mongodb.com/cloud/atlas) on AWS cloud provider on a free trier.

# DubaiAttractionsFe
This project was generated with Angular CLI version 10.2.0.

## Installing
Open the project in your editor and run.
```
$ npm install
```

## Development
Run `npm start` for a dev server. Navigate to `http://localhost:4200` through [proxy file](/dubai-attractions-fe/proxy.conf.json). The app will automatically reload if you change any of the source files.

## Built With
* [@agm/core 3.0.0-beta.0](https://www.npmjs.com/package/@agm/core)
* [@angular/animations 10.2.1](https://www.npmjs.com/package/@angular/animations)
* [@angular/cdk 0.2.6](https://www.npmjs.com/package/@angular/cdk)
* [@angular/common](https://www.npmjs.com/package/@angular/common)
* [@angular/compiler 10.2.0](https://www.npmjs.com/package/@angular/compiler)
* [@angular/core 10.2.0](https://www.npmjs.com/package/@angular/core)
* [@angular/forms 10.2.0](https://www.npmjs.com/package/@angular/forms)
* [@angular/localize 10.2.0](https://www.npmjs.com/package/@angular/localize)
* [@angular/platform-browser 10.2.0](https://www.npmjs.com/package/@angular/platform-browser)
* [@angular/platform-browser-dynamic 10.2.0](https://www.npmjs.com/package/@angular/platform-browser-dynamic)
* [@angular/router 10.2.0](https://www.npmjs.com/package/@angular/router)
* [@fortawesome/angular-fontawesome 0.7.0"](https://www.npmjs.com/package/@fortawesome/angular-fontawesome)
* [@fortawesome/fontawesome-free 5.15.1](https://www.npmjs.com/package/@fortawesome/fontawesome-free)
* [@fortawesome/fontawesome-svg-core 1.2.32](https://www.npmjs.com/package/@fortawesome/fontawesome-svg-core)
* [@fortawesome/free-brands-svg-icons 5.15.1](https://www.npmjs.com/package/@fortawesome/free-brands-svg-icons)
* [@fortawesome/free-solid-svg-icons 5.15.1](https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons)
* [@ng-bootstrap/ng-bootstrap 7.0.0](https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap)
* [@types/googlemaps 3.39.13](https://www.npmjs.com/package/@types/googlemaps)
* [@types/jquery 3.5.4](https://www.npmjs.com/package/@types/jquery)
* [angular-parse](https://www.npmjs.com/package/angular-parse)
* [bootstrap 4.5.3](https://www.npmjs.com/package/bootstrap)
* [dotenv 8.2.0](https://www.npmjs.com/package/dotenv)
* [font-awesome 4.7.0](https://www.npmjs.com/package/font-awesome)
* [jquery 3.5.1](https://www.npmjs.com/package/jquery)
* [mdbootstrap 4.19.1](https://www.npmjs.com/package/mdbootstrap)
* [ng2-img-max 2.2.4](https://www.npmjs.com/package/ng2-img-max)
* [ng2-social-share 0.0.10](https://www.npmjs.com/package/ng2-social-share)
* [ngx-cookie-service 10.1.1](https://www.npmjs.com/package/ngx-cookie-service)
* [ngx-sharebuttons 8.0.2](https://www.npmjs.com/package/ngx-sharebuttons)
* [ngx-spinner](https://www.npmjs.com/package/ngx-spinner)
* [ngx-toastr 13.1.0](https://www.npmjs.com/package/ngx-toastr)
* [parse 2.17.0](https://www.npmjs.com/package/parse)
* [rxj 6.6.0](https://www.npmjs.com/package/rxjs)
* [sharp 0.26.2](https://www.npmjs.com/package/sharp)
* [tslib 2.0.0](https://www.npmjs.com/package/tslib)

## Versioning
[Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/) is used for versioning. 

## Available Endpoints
* `/attractions` Get all attractions (Home Page)
* `/attractions/:id` Get details of an attraction
* `/attractions/update/:id` Get details of an attraction for update
* `/user/login` User Log in