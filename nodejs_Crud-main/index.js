import express from "express";
const app = express();

app.use(express.json());

import mysql from "mysql2";

// connecting Database
const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "crudnodejsmysql",
});




// Post request for insert the data into the database

app.post("/api/users", async (req, res) => {
  try {
    const { username, age, hobbies } = req.body;
    const insertId  = await connection.promise().query(
      `INSERT INTO users (username, age, hobbies) 
          VALUES (?, ?,?)`,
      [username, age, hobbies]
    );
    res.status(202).json({
      message: "Data Successfully Inserted into DB ",
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
});




// Get request for fetch all the data from the database

app.get("/api/users", async (req, res) => {
  try {
    const data = await connection.promise().query(`SELECT *  from users;`);
    res.status(200).json({
      users: data[0],
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
});






// Get request for fetch  the specific data from the database

app.get("/api/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await connection
      .promise()
      .query(`SELECT *  from users where id = ?`, [id]);
    res.status(200).json({
      user: data[0][0],
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
});







// Patch request for update the data from the database


app.put("/api/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { username, age, hobbies } = req.body;
    const update = await connection
      .promise()
      .query(
        `UPDATE users set username = ?, age = ?, hobbies = ? where id = ?`,
        [ username, age, hobbies,id]
      );
    res.status(200).json({
      message: "Data successfully updated in the DB",
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
});










// Delete request for delete the data from the database

app.delete("/api/user/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const update = await connection
        .promise()
        .query(
          `DELETE FROM  users where id = ?`,
          [id]
        );
      res.status(200).json({
        message: "Data successfully deleted from the DB",
      });
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
  });

app.listen(5000, () => {
  console.log("Server listening in http://localhost:5000");
});
