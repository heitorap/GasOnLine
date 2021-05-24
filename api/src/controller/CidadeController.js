import cidadeModel from '../model/CidadeModel';

const cidadeController = {
    listarPostos(req, res) {
        cidadeModel.listar(req.body.cidade)
            .then((response) => {
                res.status(200).send(response);
            })
            .catch((error) => {
                res.status(500).send(error);
            })
    }
};

export default cidadeController;