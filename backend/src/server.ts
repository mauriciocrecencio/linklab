import './db'
import express from "express";
import productsRoutes from "./routes/products.routes";

const cors = require('cors')

const app = express();

app.use(express.json());

app.use(cors());

app.use("/products", productsRoutes);

app.listen(process.env.PORT || 3001, () => console.log("Server is running!"));