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

    listByCidade(cidadeId) {
        const query = `SELECT PO.id, PO.name, PO.latitude, PO.longitude, CI.name as cidade
        FROM posto PO INNER JOIN cidade  CI ON CI.id = PO.cidade_id WHERE CI.id = ?;`;

        return new Promise((resolve, reject) => {
            db.query(query, [cidadeId], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    },

    listByPrice(cidadeId) {
        const query = `SELECT COM.preco, TP.name as Tipo, PO.name as Posto, PO.latitude, 
        PO.longitude, CI.name as cidade FROM combustivel COM
        INNER JOIN type TP  ON TP.id = COM.type_id
        INNER JOIN posto PO ON PO.id = COM.posto_id
        INNER JOIN cidade  CI ON CI.id = PO.cidade_id
		WHERE CI.id = ? ORDER BY COM.preco ASC;`;

        return new Promise((resolve, reject) => {
            db.query(query, [cidadeId], (error, result) => {
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