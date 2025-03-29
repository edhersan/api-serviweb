import express from 'express';
import formularioRoutes from './routes/formulario.routes.js';
import { PORT } from "./config.js";

const app = express();

app.use(formularioRoutes)

app.listen(PORT);
console.log(`Server is running on port ${PORT}`);