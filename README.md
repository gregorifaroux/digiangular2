# Digiangular2

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.
It uses Semantic UI, TypeScript, Angular2, and shows some tutorials. Semantic UI does not offer a collapsing menu on mobile, so we have a desktop menu and a mobile sidebar depending on the device.

### On desktop
![Image on Desktop](images/desktop.png)
### On mobile (with sidebar)
![Image on Mobile](images/mobile.png)

## The Content
* HelloWorld -- Mandatory (?) exercise.
* Home -- Display some info text.
* User Item -- Define a component ```<app-user-item></app-user-item>``` that display available user information.
* User List -- Parse an array and displays a series of ```<app-user-item>```.
* Simple Reddit -- Add article with form validation and basic voting.

## Prerequisites
```bash
$ sudo npm install -g angular-cli
```

## Install
```bash
$ npm install
```
During the install, 
* select 'Yes, extend my current settings.',
* then 'Automatic'
* then 'Yes'
* Then press Enter.

## Start (Dev)
```bash
$ ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
