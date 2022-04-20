const express = require("express")
const app = express();
const mysql  = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "crudgames"
})

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;

    let SQL = "INSERT INTO games ( name, cost, category ) VALUES ( ?,?,? )";
    db.query(SQL, [name, cost, category], (err, result) => {
        console.log(err)
    })
})

//app.get('/', (req, res) => {
//    let SQL = "INSERT INTO games ( name, cost, category ) VALUES ( 'Game 1', '120', 'Ação' )";
//    db.query(SQL, (err, result) => {
//        console.log(err);
//    })
//})

app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(3001, ()=>{
    console.log("rodando servidor");
})