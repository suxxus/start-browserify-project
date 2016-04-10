# start-browserify-project
Start a es2015 project BABEL + BROWSERIFY

## Features ###
* npm scripts
* Lint ESLINT
* Unit testing TAPE
* BrowserSync

## Clone the repo & install
```
git clone https://github.com/suxxus/start-node-project.git
cd ./start-node-project
npm install
```
## Usage
* npm run update
* delete .git
* npm run dev or npm run start

## Scripts

The `package.json` file comes with the following scripts

`npm run <name of script>`

`test`: run provided unit tests.

`lint`: lint all babel code.

`watch`: start watching files, perform test, lint tasks.

`browsersync`: launch a dev server(http://localhost:3000) providing the app at ./build, start watching files at ./build.

`build`: generates the compiled app at ./build directory

`dev`:  runs a dev console that reports lint and unit tests and start watching for changes at *.js files

`start`: runs build, watch, and browsersync tasks

`check`: check outdated npm modules.

`update`: update outdated npm modules.
