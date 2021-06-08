import Axios from "axios";

const posto = {
    getPosto(nameCity) {
        return Axios({
            method: 'POST',
            url: `http://localhost/posto/cidade`,
            data: { cidade:nameCity }
        });
    },

    getPostoByPrice(id_cidade, id_tipo_combustivel){
        return Axios({
            method: 'GET',
            url: `http://localhost/preco/cidade/${id_cidade}/tipo_combustivel/${id_tipo_combustivel}`
        });
    },

    editCombustivel(combustivel_type_id, posto_id, preco) {
        console.log(preco)
        return Axios({
            method: 'PUT',
            url: `http://localhost/combustivel/${combustivel_type_id}/posto/${posto_id}`,
            data: { value: preco }
        });
    }
}

export default posto;