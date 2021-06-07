import Axios from "axios";

const posto = {
    getPosto(nameCity) {
        return Axios({
            method: 'POST',
            url: `http://localhost/posto/cidade`,
            cidade: nameCity
        });
    },

    editCombustivel(combustivel_type_id, posto_id) {
        return Axios({
            method: 'PUT',
            url: `/${combustivel_type_id}/posto/${posto_id}`
        });
    }
}

export default posto;