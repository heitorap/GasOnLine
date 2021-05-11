import db from "../config/database";

const tiposModel = {
    list() {
        const query = `SELECT CT.id, CT.name
        FROM combustivel_type CT ORDER BY CT.id ASC;`;

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
        const query = `SELECT CT.id, CT.name
        FROM combustivel_type CT WHERE CT.id = ?;`;

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

    add(name) {
        const query = `INSERT INTO combustivel_type (name) VALUES ('${name}');`;
        
        return new Promise((resolve, reject) => {
            db.query(query, [name], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    },
}

export default tiposModel;