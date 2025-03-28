import express from 'express';
//import {connection} from './conexion.js';
import formularioRoutes from './routes/formulario.routes.js';

const app = express();
app.get('/ping',async (req, res) => {
   const RESULTADO = await connection.query('SELECT 1+1 AS RESULTADO')
   res.json(RESULTADO[0])
});
app.use(formularioRoutes)
app.listen(3000, () => console.log('Servidor escuchando en el puerto 3000'));