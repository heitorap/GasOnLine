import tiposModel from '../model/TiposCombustivelModel'

const tiposController = {
    listar(req, res) {
        tiposModel.list()
            .then((response) => {
                res.send(response);
            })
            .catch((error) => {
                res.status(500).send(error.message);
            });
    },

    listById(req, res) {
        tiposModel.listById(req.params.id)
            .then((response) => {
                res.send(response);
            })
            .catch((error) => {
                res.status(500).send(error.message);
            });
    },

    addTipo(req, res) {
        tiposModel.add(req.body.name)
            .then((response) => {
                res.send(response);
            })
            .catch((error) => {
                res.status(500).send(error.message);
            });
    },
}

export default tiposController;