import cidadeModel from '../model/CidadeModel';

const cidadeController = {
    listar(req, res) {
        cidadeModel.listar()
            .then((response) => {
                res.status(200).send(response);
            })
            .catch((error) => {
                res.status(500).send(error);
            })
    },
    
    listarPostos(req, res) {
        cidadeModel.listarPostos(req.params.cidade)
            .then((response) => {
                res.status(200).send(response);
            })
            .catch((error) => {
                res.status(500).send(error);
            })
    }
};

export default cidadeController;