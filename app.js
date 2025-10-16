const express = require('express');
const app = express();


const dotenv = require('dotenv');
dotenv.config();


app.listen(process.env.PORT);


const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');
const likesRouter = require('./routes/likes');
const ordersRouter = require('./routes/orders');
const cartsRouter = require('./routes/carts');

app.use("/users", userRouter);
app.use("/books", bookRouter);
app.use("/likes", likesRouter);
app.use("/orders", ordersRouter);
app.use("/carts", cartsRouter);
