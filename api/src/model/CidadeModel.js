import db from '../config/database';

const cidadeModel = {
    listar(nomeCidade = '%') {
      const cidade = nomeCidade ? nomeCidade + '%' : '';
      const query = `
       SELECT CI.id   AS "id_cidade",
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
  }
};

export default cidadeModel;