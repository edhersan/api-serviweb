import express from 'express';
import formularioRoutes from './routes/formulario.routes.js';

const app = express();

app.use(formularioRoutes)