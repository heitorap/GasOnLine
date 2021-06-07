import db from "../config/database";

const postoModel = {
    list() {
        const query = `SELECT PO.id, PO.name, PO.latitude, PO.longitude, CI.name as cidade
        FROM posto PO INNER JOIN cidade  CI ON CI.id = PO.cidade_id ORDER BY PO.id ASC;`;

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

    listById(id) {
        const query = `SELECT PO.id, PO.name, PO.latitude, PO.longitude, CI.name as cidade
        FROM posto PO INNER JOIN cidade  CI ON CI.id = PO.cidade_id WHERE PO.id = ?;`;

        return new Promise((resolve, reject) => {
            db.query(query, [id], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result[0]);
                }
            });
        });
    },

    listByCidade(nomeCidade = '') {
        const cidade = nomeCidade ? nomeCidade + '%' : '%';
        const query = `
         SELECT CI.id   AS "id_cidade",
                CI.name AS "cidade",
                PO.id   AS "id_posto",
                PO.name AS "posto",
                (
                    SELECT CO.preco
                      FROM combustivel AS CO
                INNER JOIN combustivel_type AS CT
                        ON CT.id = CO.combustivel_type_id
                     WHERE CO.posto_id = PO.id
                       AND CT.id = 1) AS "gasolina",
                (
                    SELECT CO.preco
                      FROM combustivel AS CO
                INNER JOIN combustivel_type AS CT
                        ON CT.id = CO.combustivel_type_id
                     WHERE CO.posto_id = PO.id
                       AND CT.id = 2) AS "etanol",
                (
                    SELECT CO.preco
                      FROM combustivel AS CO
                INNER JOIN combustivel_type AS CT
                        ON CT.id = CO.combustivel_type_id
                     WHERE CO.posto_id = PO.id
                       AND CT.id = 3) AS "diesel"
           FROM cidade AS CI
     INNER JOIN posto AS PO
             ON PO.cidade_id = CI.id
          WHERE CI.name LIKE '`+cidade+`';`;

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

    listByPrice(cidadeNome, idTipoCombustivel) {
        const query = `
            SELECT COM.preco, 
                   TP.name as Tipo,
                   PO.name as Posto,
                   PO.latitude, 
                   PO.longitude,
                   CI.name as cidade
              FROM combustivel COM
        INNER JOIN combustivel_type TP  
             ON TP.id = COM.combustivel_type_id
        INNER JOIN posto PO 
             ON PO.id = COM.posto_id
        INNER JOIN cidade  CI
             ON CI.id = PO.cidade_id
          WHERE CI.name LIKE ?
            AND COM.combustivel_type_id = ?
        ORDER BY COM.preco ASC;`;
        return new Promise((resolve, reject) => {
            db.query(query, [cidadeNome, idTipoCombustivel], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    },

    add(name, latitude, longitude, cidade_id) {
        const query = `INSERT INTO posto (name,latitude,longitude,cidade_id) VALUES
        ('${name}', '${latitude}', '${longitude}', ${cidade_id});`;

        return new Promise((resolve, reject) => {
            db.query(query, [name, latitude, longitude, cidade_id], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    },
}

export default postoModel;