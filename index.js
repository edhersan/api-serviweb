import express from 'express';
//import {connection} from './conexion.js';

const app = express();
app.get('/ping',async (req, res) => {
   const RESULTADO = await connection.query('SELECT 1+1 AS RESULTADO')
   res.json(RESULTADO[0])
});
app.get('/formulario', (req, res) => res.send('obteniendo datos'));
app.post('/formulario', (req, res) => res.send('enviando datos'));
app.put('/formulario', (req, res) => res.send('actualizando datos'));
app.delete('/formulario', (req, res) => res.send('eliminando datos'));

app.listen(3000, () => console.log('Servidor escuchando en el puerto 3000'));