Install httpster:
$ sudo npm install -g httpster

navigate to start folder of your exercize example “ReactJS_Linda/Ex_Files_React_EssT_Upd/Exercise Files/Ch02/02_01/start”

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
