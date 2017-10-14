Install httpster:
$ sudo npm install -g httpster

navigate to start folder of your exercize example “ReactJS/Exercise Files/Ch02/02_01/start”

run the server as below.
httpster -d ./dist -p 3000


JSX is not supported by the browsers. So, Install babel plugin/tool to traspiling/compiling JSX to java script.
Babel takes the code that is not supported by the browser and splits it out that is browser supported.

Install Babel:
Go to the link https://cdnjs.com/libraries/
Search for babel-core and select the 5.8.38 version and copy the browser.js link using copy button and paste into index.html file.
and add the type="text/babel" attribute to the index.js import as below
<script type="text/babel" src="index.js"></script>

Execute the code and see the output.

---------------------------------------------------------------------------
Level 1 - Babel CLI  - It can help us transpile JavaScript that uses new syntax into static files that use browser supported syntax.
It offers performance benefits in the browser because all traspilling happens before run time.
Oct 11th - Take the master branch code for this exercise.

Removed  browser.js babel script from the index.html
Changed the index.js script type from text/babel to text/javascript in index.html
Change the index.js to bundle.js. our new out-file is going to be called bundle.js
In Terminal, navigate to the folder ReactJS/Exercise Files/Ch02/02_01/start.
To generate the project run the below command
$ npm init
give project name as react-essential
no change in version
give description as "project focusing on react and related tools"
Keep entry point as index.js
skip the test command
skip the git repo
skip the keywords
give author as your name
give licence as something "MIT"
Is this Ok?(Yes) press Enter

Now you should see a package.json file in your folder. This file describes the features of your project and its dependencies.

Install Babel CLI:
$ npm install babel-cli@6.18.0 --save-dev or npm install --save-dev babel-cli

you can use the babel cli commands any where in your computer if you install globally like below. So execute the below command for that.
$ sudo npm install -g babel-cli

create src folder inside of start folder. Example "example “ReactJS/Exercise Files/Ch02/02_01/start/src"
Drag the index.js from dist folder to the src folder
create .babelrc file inside start folder. Inside bebelrc file specify presets or everything you want compile/transpile using babel.
Once you specify the presets in .babelrc file install babel presets using below command
$ npm install babel-preset-react@6.16.0 --save-dev
$ npm install babel-preset-latest@6.16.0 --save-dev
$ npm install babel-preset-stage-0@6.16.0 --save-dev
$ babel ./src/index.js --out-file ./dist/bundle.js

update package.json file as below
change "test" inside "scripts" to "start" command and value to "httpster -d ./dist -p 3000"
Go back to terminal and execute the below command
$ npm start

------------------------------------------------------------------------------------------
                       LEVEL 3 - WEBPACK
It is alternative to the babel-cli. Webpack is a module bundler that helps us create static files and
helps us automate processes that need to happen before our files can go into production.

Think about a typical HTML file. We might load several different scripts, making several HTTP requests.
Webpack will run several commands at a time to create a bundle file. This bundle packages scripts, dependencies,
and even CSS into one file and one file means one request.

create webpack config file as "webpack.config.js" inside "start" folder.
The Webpack config is going to describe everything that we want Webpack to do to our files to ready them for production.

Once you descibed everything in the webpack.config.js file, install webpack using the below commands.

$ npm install webpack@1.13.3 --save-dev
$ npm install babel-loader@6.2.5 --save-dev
$ npm install webpack-dev-server@1.16.2 --save-dev
$ sudo npm install -g webpack@1.13.3
$ ./node_modules/.bin/webpack

update the bundle.js file path in index.html file.
update the package.json file start command value as below.
"./node_modules/.bin/webpack-dev-server"

You can start the server using the below command
$npm start


---------------------------------------------------------------------------------------------
                  LEVEL 4 - WEBPACK - Load React dependencies as well as some JSON Data using webpack

Install React and ReactDOM dependencies
$ npm install react@15.3.2 --save
$ npm install react-dom@15.3.2 --save

remove react and react-dom dependencies from index.html file
inside src folder create lib.js,titles.json file.
create some json object in titles.json file.
implement lib.js file with the logic.
update the index.js file.
update webpack.config.js file.

install json loader as below
npm install json-loader@0.5.4 --save-dev

start the server using the below command
$ npm start
