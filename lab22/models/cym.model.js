const db = require("../util/database");

module.exports = class Machine {
  constructor(cym_machine) {
    this.nombre = cym_machine.nombre || "";
    this.imagen =
      cym_machine.imagen || "durometro.jpeg";
    this.descripcion = cym_machine.descripcion || "";
    this.marca = cym_machine.marca || "";
    this.tipo = cym_machine.tipo || "";
  }

  save() {
    return db.execute(
      `INSERT INTO durometros (nombre, imagen, descripcion, marca, tipo) 
          VALUES (?, ?, ?, ?, ?)`,
      [
        this.nombre,
        this.imagen,
        this.descripcion,
        this.marca,
        this.tipo,
      ]
    );
  }

  static fetch(marca) {
    let query = `SELECT * FROM durometros`;
    if (marca != 0) {
      query += ` WHERE marca = ?`;
      return db.execute(query, [marca]);
    }
    return db.execute(query);
  }
};
