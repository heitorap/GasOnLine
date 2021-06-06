import Axios from "axios";

const posto = {
    getPosto(nameCity) {
        return Axios({
            method: 'GET',
            url: `http://localhost/cidade/${nameCity}/postos`
        });
    }
}

export default posto;