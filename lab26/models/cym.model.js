const db = require("../util/database");

module.exports = class Machine {
  constructor(cym_machine) {
    this.nombre = cym_machine.nombre || "";
    this.imagen = cym_machine.imagen || "durometro.jpeg";
    this.descripcion = cym_machine.descripcion || "";
    this.marca = cym_machine.marca || "";
    this.tipo = cym_machine.tipo || "";
    this.pdf = cym_machine.pdf || "";
  }

  save() {
    return db.execute(
      `INSERT INTO durometros (nombre, imagen, descripcion, marca, tipo, pdf) 
          VALUES (?, ?, ?, ?, ?, ?)`,
      [this.nombre, this.imagen, this.descripcion, this.marca, this.tipo, this.pdf]
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

  static find(valor_busqueda) {
    return db.execute(
      `SELECT * FROM durometros WHERE nombre LIKE ? OR descripcion LIKE ? OR marca LIKE ? OR tipo LIKE ?`,
      [
        "%" + valor_busqueda + "%",
        "%" + valor_busqueda + "%",
        "%" + valor_busqueda + "%",
        "%" + valor_busqueda + "%",
      ]
    );
  }
};
