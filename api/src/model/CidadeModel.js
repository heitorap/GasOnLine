import db from '../config/database';

const cidadeModel = {
  listar() {
    const query = `
      SELECT id   AS "id_cidade",
             name AS "cidade"
        FROM cidade;`;
    return new Promise((resolve, reject) => {
          db.query(query, (error, result) => {
              if (error) {
                  reject(error);
              } else {
                  resolve(result);
              }
          });
      });
  },

  cadastrar(nomeCidade) {
    const query = `INSERT INTO cidade (name) VALUES (?);`;
    return new Promise((resolve, reject) => {
      db.query(query, [nomeCidade], (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      })
    })
  }

};

export default cidadeModel;