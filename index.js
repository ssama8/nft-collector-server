import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
const app = express();

const hostname = "0.0.0.0";
const port = 5000;

app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/users", usersRoutes);
app.get("/", (req, res) => {
	console.log("Visited");
	res.send("hello from homepage");
});

app.listen(port, hostname, () => {
	console.log(`Server running on port: http://localhost:${port}`);
});
