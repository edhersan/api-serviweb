import { Router } from 'express';
const router = Router();
Router.get('/formulario', (req, res) => res.send('obteniendo datos'));
Router.post('/formulario', (req, res) => res.send('enviando datos'));
Router.put('/formulario', (req, res) => res.send('actualizando datos'));
Router.delete('/formulario', (req, res) => res.send('eliminando datos'));
export default router;