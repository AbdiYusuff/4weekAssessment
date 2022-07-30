const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, submitCompliment, deleteItem} = require('./controller')



app.get("/api/compliment", getCompliment);
app.post("/api/compliment", submitCompliment);


app.get("/api/fortune", getFortune);

app.delete("/api/compliment/:id", deleteItem)

app.listen(4000, () => console.log("Server running on 4000"));
