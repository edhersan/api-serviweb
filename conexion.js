import pkg from 'mssql';
const { connect } = pkg; 

// Configuración de la conexión
const config = {
  user: 'adminsql@servidodb',
  password: 'Y1506mt.',
  server: 'servidodb.database.windows.net',
  database: 'Regristro', 
  options: {
    encrypt: true,
    trustServerCertificate: false, 
  },
  port: 1433, 
};
export const connection = connect(config);
// Crear la conexión
async function connectToDatabase() {
  try {
    const pool = await connect(config);
    console.log('Conexión exitosa a SQL Server');
    return pool;
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err.message);
  }
}

// Llama a la función para conectar
connectToDatabase();
