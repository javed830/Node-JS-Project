# Node-JS-Project
Crud Application in Node JS 


Certainly! Here's an example of a full README.md file for a CRUD application with Node.js and MySQL:

```markdown
# CRUD Application with Node.js and MySQL

This is a basic CRUD (Create, Read, Update, Delete) application implemented using Node.js and MySQL. The application allows you to perform CRUD operations on a user entity.

## Installation

1. Clone the repository:

   ```shell
  https://github.com/javed830/Node-JS-Project.git
                or
  git@github.com:javed830/Node-JS-Project.git
                or
  gh repo clone javed830/Node-JS-Project
   ```

2. Navigate to the project directory:

   ```shell
   cd nodejs_Crud
   ```

3. Install the dependencies using npm:

   ```shell
   npm install
   ```

## Configuration

1. Configure MySQL Database:

   - Create a MySQL database and note down the connection details (host, port, username, password).

2. Update the configuration:

   - Update the database connection details in the configuration object.

3.  SQL Script

	Create database crudnodejsmysql;

	use crudnodejsmysql;

	CREATE TABLE `users` (
 	`id` int NOT NULL AUTO_INCREMENT,
 	`username` varchar(255) DEFAULT NULL,
 	`age` int NOT NULL,
 	`hobbies` varchar(255) DEFAULT NULL,
 	PRIMARY KEY (`id`)
	)

## Usage

1. Run the application:

   ```shell
   npm start
   ```

2. Access the application:

   - The server will start running at `http://localhost:5000`.
   - You can use tools like Postman or your web browser to send requests to the appropriate endpoints.

## Available Routes

- **POST /api/users** - Create a new user. Requires a JSON payload with the user's name, address, and country.
- **GET  /api/users** - Retrieve all users.
- **GET  /api/user/:id** - Retrieve a specific user by their ID.
- **PATCH  /api/user/:id** - Update a user's information. Requires a JSON payload with the updated name, address, and country.
- **DELETE  /api/user/:id** - Delete a user by their ID.


## Hit the url like below


	- **POST     http://localhost:5000/api/users      -insert data
	- **GET      http://localhost:5000/api/user/6     -fetch specific data by id  
	- **GET      http://localhost:5000/api/users      -fetch all data
	- **PATCH    http://localhost:5000/api/user/12    -update data
	- **DELETE   http://localhost:5000/api/user/7     -delete data

 
## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
```

Feel free to customize the instructions, commands, and content based on your specific project requirements.

