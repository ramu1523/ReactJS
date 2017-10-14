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
