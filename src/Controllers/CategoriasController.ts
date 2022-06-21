import axios from 'axios';

const url = "http://localhost:9090/";

let ApiCategoria;
export default ApiCategoria = {
    getList: async function () {
        try {
            return await axios.get(url+'categoria/list');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }
}