const db = require("../util/database");

// const machines = [
//   {
//     nombre:
//       "Máquina probadora de durezas Vickers y MicroVickers 0.005kgf-62.5kgf KB 30 S FA",
//     imagen:
//       "https://image.jimcdn.com/app/cms/image/transf/dimension=384x10000:format=png/path/s09cbab276dc8a8fd/image/i2aa11e23e2b46b45/version/1512605484/image.png",
//     descripcion:
//       "Máquina totalmente automática Vickers KB 30 S FA. La nueva generación de máquinas de prueba de dureza micro / macro de KB Prüftechnik GmbH convence por su extraordinaria precisión y reproducibilidad.",
//     handle: "@vickers, @KB",
//   },
//   {
//     nombre: "Máquina probadora de durezas Brinell 0.5kgf-5000kgf KB 30 S FA",
//     imagen:
//       "https://image.jimcdn.com/app/cms/image/transf/dimension=384x10000:format=png/path/s09cbab276dc8a8fd/image/i2aa11e23e2b46b45/version/1512605484/image.png",
//     descripcion:
//       "Máquina totalmente automática Brinell KB 30 S FA. La nueva generación de máquinas de prueba de dureza micro / macro de KB Prüftechnik GmbH convence por su extraordinaria precisión y reproducibilidad.",
//     handle: "@brinell, @KB",
//   },
//   {
//     nombre: "Máquina probadora de durezas Rockwell 0.5kgf-5000kgf KB 30 S FA",
//     imagen:
//       "https://image.jimcdn.com/app/cms/image/transf/dimension=384x10000:format=png/path/s09cbab276dc8a8fd/image/i2aa11e23e2b46b45/version/1512605484/image.png",
//     descripcion:
//       "Máquina totalmente automática Rockwell KB 30 S FA. La nueva generación de máquinas de prueba de dureza micro / macro de KB Prüftechnik GmbH convence por su extraordinaria precisión y reproducibilidad.",
//     handle: "@rockwell, @KB",
//   },
//   {
//     nombre: "Máquina probadora de durezas Rockwell C 0.5kgf-5000kgf KB 30 S FA",
//     imagen:
//       "https://image.jimcdn.com/app/cms/image/transf/dimension=384x10000:format=png/path/s09cbab276dc8a8fd/image/i2aa11e23e2b46b45/version/1512605484/image.png",
//     descripcion:
//       "Máquina totalmente automática Rockwell C KB 30 S FA. La nueva generación de máquinas de prueba de dureza micro / macro de KB Prüftechnik GmbH convence por su extraordinaria precisión y reproducibilidad.",
//     handle: "@rockwell, @KB",
//   },
//   {
//     nombre: "Máquina probadora de durezas Rockwell B 0.5kgf-5000kgf KB 30 S FA",
//     imagen:
//       "https://image.jimcdn.com/app/cms/image/transf/dimension=384x10000:format=png/path/s09cbab276dc8a8fd/image/i2aa11e23e2b46b45/version/1512605484/image.png",
//     descripcion:
//       "Máquina totalmente automática Rockwell B KB 30 S FA. La nueva generación de máquinas de prueba de dureza micro / macro de KB Prüftechnik GmbH convence por su extraordinaria precisión y reproducibilidad.",
//     handle: "@rockwell, @KB",
//   },
// ];

module.exports = class Machine {
  constructor(cym_machine) {
    this.nombre = cym_machine.nombre || "";
    this.imagen = cym_machine.imagen || "";
    this.descripcion = cym_machine.descripcion || "";
    this.handle = cym_machine.handle || "";
  }

  save() {
    return db.execute(
      `INSERT INTO durometros (nombre, imagen, descripcion, handle) 
          VALUES (?, ?, ?, ?)`,
      [this.nombre, this.imagen, this.descripcion, this.handle]
    );
  }

  static fetch(id) {
    let query = `SELECT * FROM durometros`;
    if (id != 0) {
      query += ` WHERE id = ?`;
      return db.execute(query, [id]);
    }
    return db.execute(query);
  }
};
