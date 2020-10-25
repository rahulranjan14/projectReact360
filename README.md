# projectReact360

 Demo - https://www.linkedin.com/posts/rahulranjan14_react360-reactvr-reactjs-activity-6725800197684834305-RrKh

## To run this app on local machine

1. clone the repository

>  git clone https://github.com/rahulranjan14/projectReact360.git

2. now navigate to the root directory and run

>  npm install

3. in case if it gets stuck run

>  npm install --verbose  

4. again

> npm install

5. now 

> npm start

6. if there is an error like 

> Invalid regular expression: /(node_modules[\\\]react[\\\]dist[\\\].*|website\\node_modules\\.*|heapCapture\\bundle\.js|.*\\__tests__\\.*)$/: Unterminated character 
class

then, navigate to /node_modules/metro-bundler/src/blacklist.js

replace this :

<pre> var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
]; </pre>

with this :

<pre>
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
</pre>

7. now run

> npm start

8. open browser at http://localhost:8081/vr/
