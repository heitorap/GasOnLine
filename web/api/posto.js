import Axios from "axios";

const posto = {
    getPosto(nameCity) {
        return Axios({
            method: 'POST',
            url: `https://gas-on-line.vercel.app/posto/cidade`,
            data: { cidade:nameCity }
        });
    },

    getPostoByPrice(id_cidade, id_tipo_combustivel){
        return Axios({
            method: 'GET',
            url: `https://gas-on-line.vercel.app/preco/cidade/${id_cidade}/tipo_combustivel/${id_tipo_combustivel}`
        });
    },

    editCombustivel(combustivel_type_id, posto_id, preco) {
        console.log(preco)
        return Axios({
            method: 'PUT',
            url: `https://gas-on-line.vercel.app/combustivel/${combustivel_type_id}/posto/${posto_id}`,
            data: { value: preco }
        });
    }
}

export default posto;