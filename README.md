# vscode_node_gulp_express_typescript_boilerplate

Sample project with vscode, typescript, node, gulp, express and docker.

## What does this project has to offer

* VS Code with debug configurarions for TypeScript already in place
* Intellisense for TypeScript with Typings
* Gulp already integrated with VS Code (with tasks for js and js.map generation)  
* A simple express.js web server to start testing
* Docker integration 

## What was used in this sample project:

* Visual Studio Code 
* Gulp
* Node.js
* Express.js
* Typings (to deal with the TypeScript definitions) 
* Docker

## Getting Started

First, intall all the node packages

```
$ npm install 
```

Install all the TypeScript definitions

```
$ typings install
```

Finally, start executing the gulp tasks and try the sample app:

* Generate the JS and JS.MAP from TypeScript

```
$ gulp ts
```

* Start the Server (default port is 3000)

```
$ gulp server:start
```

You can also start the VS Code and execute these gulp tasks from there.