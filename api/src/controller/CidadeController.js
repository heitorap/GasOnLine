import cidadeModel from '../model/CidadeModel';

const cidadeController = {
    listarPostos(req, res) {
        cidadeModel.listar()
            .then((response) => {
                res.send(response);
            })
            .catch((error) => {
                res.status(500).send(error);
            })
    }
};

export default cidadeController;