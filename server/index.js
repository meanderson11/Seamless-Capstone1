require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize");


const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

//CONTROLLERS


//MIDDLEWARE
app.use(express.json());
app.use(cors());



const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

sequelize.authenticate().then(() => {
  app.set("db", {
    sequelize,
  });

   //ENDPOINTS
  app.get("/users", async (req, res) => {
    const [userList] = await sequelize.query("SELECT * FROM users;")
    console.log(userList)
    res.status(200).send(userList)
  })

  app.post("/auth/register", async (req, res) => {
   const { name, email, password} = req.body;
   const [user] = await sequelize.query(`INSERT INTO users (
    name,
    email,
    password
  ) values (
    '${name}' ,
    '${email}',
    '${password}'
  );`)

    res.status(200).send(user)
  })

  app.post("/auth/signin", async (req, res) => {
    const { email, password } = req.body;
    const [[user]] = await sequelize.query(`SELECT * FROM users
    WHERE email = '${email}';`)
    if (user.password === password) {
        res.status(200).send(user)
    } else {
        res.status(400).send(null)
    }
  })


  //APP LISTEN
  app.listen(SERVER_PORT, () => {
    console.log(`Server up and running on ${SERVER_PORT}`);
  });

});

 