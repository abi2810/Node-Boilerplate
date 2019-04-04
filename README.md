# Listado API
### Node Basic Setup & Setup For Listado-API

How to start node.js with express framework?
--------------------------------------------

1. Create a directory “my-app” and from the terminal,access your new directory and then,
	* `$npm init -y`
	* To install express use this command `$npm install express`.
	* To install mysql2 use this command `$npm install --save mysql2`.
	* It asks some question fill it up if you want or it will take the default.
	* Then go to your project folder or open your project folder in editor, there you can see a file `package.json`.
2. So If you want to add any packages install it from terminal and you can see that packages in 1`package.json”` in dependencies with their versions.
3. Then run `$npm install` -> This command is used to install all the  packages in `“package.json”`.
4. So now our `package.json` is all set to work with node.js.
5. The next step is to create a main file,
	* In that you have to import all your packages
	* DB Connections
	* And write a simple function in it
6.And then run your file using the command `“$node app.js”`.

> Thats it for a simple setup and sample program using node.js. 
> Next we can see how to setup GraphQL with your node api’s,
	
1. Create three folders “types”, ”queries”, and “mutations”.
	* To install graphql in express use this command `$npm install --save express-graphql`.
2. First we have to setup our models in “models” folder.
3. Once it is done, then define the types for your model in types folder and import the types and export it.
4. Then, Create a js files and start write a query in “queries” folder.
5. Once all the code is ready you have to setup your “schema” file,
	* You have to declare the query structure and mutation structure
	* Import the  query file and mutation file and then export the schema.

> Now all set to go, run your project using nodemorn, 
> If you use nodemorn use this command `“$npm run watch”`.