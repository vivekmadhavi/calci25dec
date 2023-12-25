const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/find",(req,res) =>{

	let num = req.query.number;
	let n = parseInt(num);
	let r = n ** 0.5
	let msg = "square root = " + r.toFixed(2);
	res.json({"msg":msg}); 
});

app.listen(9000 , () =>{ console.log("server ready ")});