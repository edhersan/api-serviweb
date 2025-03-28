import { connection } from "../conexion.js";

export const getUsuarios = async (req, res) => {
  try {
    const [rows] = await connection.query("SELECT * FROM Regristro");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "algo no salio bien" });
  }
};

export const getUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await connection.query("SELECT * FROM Regristro WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "usuario no encontrado" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "algo no salio bien" });
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await connection.query("DELETE FROM Regristro WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "usuario no encontrado" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "algo no salio bien" });
  }
};

export const createUsuario = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const [rows] = await connection.query(
      "INSERT INTO Regristro (Nombre, Apellido, Fecha_Nacimiento, Direccion, Correo, Telefono, Imagen) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [Nombre, Apellido, Fecha_Nacimiento, Direccion, Correo, Telefono, Imagen]
    );
    res.status(201).json({ id: rows.insertId, Nombre, Apellido, Fecha_Nacimiento,Direccion, Correo, Telefono, Imagen });
  } catch (error) {
    return res.status(500).json({ message: "algo no salio bien" });
  }
};

export const updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { Nombre,Apellido,Fecha_Nacimiento,Direccion,Correo,Telefono,Imagen} = req.body;

    const [result] = await connection.query(
      "UPDATE employee SET Nombre = IFNULL(?, Nombre), Apellido = IFNULL(?, Apellido), Fecha_Nacimiento = IFNULL(?,Fecha_Nacimiento), Direccion = IFNULL(?,Direccion), Correo = IFNULL(?, Correo), Telefono = IFNULL(?, Telefono), Imagen = IFNULL(?, Imagen) WHERE id = ?",
      [Nombre, Apellido, Fecha_Nacimiento, Direccion, Correo, Telefono, Imagen, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "usuario no encontrado" });

    const [rows] = await connection.query("SELECT * FROM employee WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "slgo no salio bien" });
  }
};