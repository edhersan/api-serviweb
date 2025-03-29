import { config } from "dotenv";
import pkg from 'mssql';
const { connect } = pkg; 

// Configurar dotenv
config();

// Configuración de la conexión usando las variables de entorno
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true,
    trustServerCertificate: false,
  },
  port: parseInt(process.env.DB_PORT, 10), // Convertimos a número
};

// Función para crear la conexión
export async function connect() {
  try {
    const pool = await sql.connect(dbConfig);
    console.log("Conexión exitosa a la base de datos");
    return pool;
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error.message);
    throw error;
  }
}
