import express from 'express';
//import {connection} from './conexion.js';
import formularioRoutes from './routes/formulario.routes.js';

const app = express();

app.use(formularioRoutes)
app.listen(3000, () => console.log('Servidor escuchando en el puerto 3000'));