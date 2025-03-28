import { Router } from 'express';
import {
    createUsuario,
    deleteUsuario,
    getUsuario,
    getUsuarios,
    updateUsuario,
} from '../controllers/formulario.controller.js';

  
  const router = Router();
  
  // GET todos los usuarios
  router.get("/formulario", getUsuarios);
  
  // GET un usuario
  router.get("/formulario/:id", getUsuario);
  
  // DELETE un usuario
  router.delete("/formulario/:id", deleteUsuario);
  
  // INSERT un usuario
  router.post("/formulario", createUsuario);
  
  router.patch("/employees/:id", updateUsuario);
  
  export default router;