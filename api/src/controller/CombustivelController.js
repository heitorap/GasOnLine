import combustivelModel from '../model/CombustivelModel';

const combustivelController = {
    update(req, res ) {
        combustivelModel.update(req.body.value, req.params.posto_id, req.params.combustivel_type_id).then((response) => {
            res.send(response);
        }).catch((error) => {
            res.status(500).send(error.message)
        })
    }
}

export default combustivelController;