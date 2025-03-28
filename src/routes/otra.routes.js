import { Router } from 'express';
const router = Router();
router.get('/ping',async (req, res) => {
    const RESULTADO = await connection.query('SELECT 1+1 AS RESULTADO')
    res.json(RESULTADO[0])
 });
export default router;