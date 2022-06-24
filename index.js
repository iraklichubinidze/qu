const express = require("express");
const app = express();
const cors = require('cors');
const UserRouter = require("./routes/user.js");
const ProductRouter = require("./routes/product.js");
require('dotenv').config();

app.get('/', (req,res) => res.send('Hello World'));

app.use(cors());
app.use(express.json());

app.use("/user", UserRouter);
app.use("/product", ProductRouter);

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));

