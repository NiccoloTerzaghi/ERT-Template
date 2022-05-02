# Electron + React + Tailwind template

## Overview 

This is a simple template that includes:
* [Electron](https://www.electronjs.org/) 
* [React](https://it.reactjs.org/)
* [Tailwind](https://tailwindcss.com/)

It comes with a **basic structure** that should help you get started with your project in **no time**.   
## Mandatory dependecies

In order to make this template work you have to add the following dependecies:
* ***npm:***
  * `npm install electron-is-dev`
  * `npm install -D electron electron-builder`
  * `npm install -D tailwindcss postcss autoprefixer`
  * `npm install -D concurrently wait-on cross-env`
* ***yarn:***
  * `yarn add electron-is-dev`
  * `yarn add -D electron electron-builder`
  * `yarn add -D tailwindcss postcss autoprefixer`
  * `yarn add -D concurrently wait-on cross-env`

## How to run your app

Once everything has been set up you can run your project with:
* ***npm:***
  * `npm dev`
* ***yarn:***
  * `yarn dev`

This command runs the following script:

* `concurrently -k \"cross-env BROWSER=none react-scripts start\" \"wait-on http://localhost:3000 && electron .\""`

It may appear a little intimidating at first glance but it simply prevents a new browser window from being open everytime you want to run  your app and waits for the react app to be ready before running electron.

## How to build/package your app

This may be a trivial task to accomplish but I managed to understand it mainly thanks to these 2 articles:
* [From React to an Electron app ready for production | by Kitze](https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3) 
* [ReBuilding a production electron/create-react-app application with shared code using electron-builderact](https://medium.com/@johndyer24/building-a-production-electron-create-react-app-application-with-shared-code-using-electron-builder-c1f70f0e2649)

I won't dive deep into how exactly things work, you should be good to go as long as you follow these steps:
* ***Don't change the project's structure***
* ***Run:*** `npm build` or `yarn build`
* A ***build*** folder should have appeared, copy into the latter your ***electron*** folder 


## Features

* yet to be implemented 🥴

## More

* This is a modified version of the template that comes with the `create-react-app` command.

## Disclaimer

I'm just an average italian guy who's still deciding between "Computer Science" and "Computer Science and Engineering".
Hence, you won't find neither a professional nor a native english speaker, just a passionate coder.



***by Niccolò Terzaghi 05-02-2022***

