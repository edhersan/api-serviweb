import express from 'express';

const app = express();

app.get('/call', (req, res) => res.send('obtenniendo datos'));
app.post('/send', (req, res) => res.send('enviando datos'));
app.put('/update', (req, res) => res.send('actualizando datos'));
app.delete('/delete', (req, res) => res.send('eliminando datos'));

app.listen(3000, () => console.log('Servidor escuchando en el puerto 3000'));