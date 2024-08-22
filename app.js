const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const url =
	"mongodb+srv://usuario_admin:ZzKSymXCqzmARi7g@clusterapi.piese.mongodb.net/?retryWrites=true&w=majority&appName=ClusterAPI";

mongoose.connect(url);

mongoose.connection.on("error", (err) => {
	console.log(`Erro na conexão com o banco de dados: ${err}`);
});

mongoose.connection.on("disconnected", () => {
	console.log("Aplicação disconectado do banco de dados!");
});

mongoose.connection.on("connected", () => {
	console.log("Aplicação conectado ao banco de dados com sucesso!");
});

//BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const indexRoute = require("./Routes/index");
const usersRoute = require("./Routes/users");

app.use("/", indexRoute);
app.use("/users", usersRoute);

app.listen(3000);

module.exports = app;
