import postoModel from "../model/PostoModel";

const PostoController = {
    listar(req, res) {
        postoModel.list()
            .then((response) => {
                res.send(response);
            })
            .catch((error) => {
                res.status(500).send(error.message);
            });
    },

    listById(req, res) {
        postoModel.listById(req.params.id)
            .then((response) => {
                res.send(response);
            })
            .catch((error) => {
                res.status(500).send(error.message);
            });
    },

    listByCidade(req, res) {
        if (req.body.cidade.length > 0) {
            postoModel.listByCidade(req.body.cidade)
            .then((response) => {
                res.send(response);
            })
            .catch((error) => {
                res.status(500).send(error.message);
            });
        } else {
            return res.status(500).send({ mensagem: 'Informar o início ou nome completo da cidade' })
        }

    },

    listByPrice(req, res) {
        postoModel.listByPrice(req.params.cidade_nome, req.params.id_tipo_combustivel)
            .then((response) => {
                res.send(response);
            })
            .catch((error) => {
                res.status(500).send(error.message);
            });
    },

    addPosto(req, res) {
        postoModel.add(req.body.name, req.body.latitude, req.body.longitude, req.body.cidade_id)
            .then((response) => {
                res.status(201).send({ mensagem: 'Posto adicionado com sucesso' });
            })
            .catch((error) => {
                res.status(500).send(error.message);
            });
    },
}

export default PostoController;