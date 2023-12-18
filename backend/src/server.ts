import './db'
import express from "express";
import categoriesRoutes from "./routes/categories.routes";
import path from "path";
import productsRoutes from "./routes/products.routes";

const cors = require('cors')

const app = express();

app.use(express.json());

app.use(cors());

app.use("/categories", categoriesRoutes);
app.use("/products", productsRoutes);

app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen(process.env.PORT || 3001, () => console.log("Server is running!"));