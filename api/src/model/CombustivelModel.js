import db from "../config/database";

const combustivelModel = {
    update(value, postoId, combustivelTypeId) {
        const query = 'UPDATE combustivel SET preco = ? WHERE posto_id = ? AND combustivel_type_id = ?';

        return new Promise ((resolve, reject) => {
            db.query(query,[value, postoId, combustivelTypeId], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        })
    }
}

export default combustivelModel;