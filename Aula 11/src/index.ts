import express from "express";
import dotenv from "dotenv";
import routes from "./routes";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`);
});
// define a rota para o pacote /routes
app.use(routes);
