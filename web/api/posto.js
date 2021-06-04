import Axios from "axios";

const posto = {
    getPosto() {
        return Axios({
            method: 'GET',
            url: `http://localhost/posto/`
        });
    }
}

export default posto;