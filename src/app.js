// server connected
const express = require("express");
const connectdB = require("./db/conn");
const Student = require("./models/student");

const apiRouters = require("./routers/api");
const app = express();

app.use(express.json());
app.use(apiRouters);

//  step -1 create a new router

// const router = new express.Router();
// step -2 we need to define a router
// router.get("/shivam", (req, res) => {
//     res.send('hello whats up guys');
// });
//step -3 we need to register a router
// app.use(router);


connectdB();
// post api 


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`connected at ${port}`);
})