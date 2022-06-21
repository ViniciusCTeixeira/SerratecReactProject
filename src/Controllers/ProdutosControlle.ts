import axios from 'axios';

const url = "http://localhost:9090/";

let ApiProdutos;
export default ApiProdutos = {
    getList: async function () {
        try {
            return await axios.get(url+'produto');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    },
    getLancamentos: async function (limit: number) {
        try {
            const { data, status, headers } = await axios.get(url+{limit});

            console.log(JSON.stringify(data, null, 4));

            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    },
    getByName: async function (name: string) {
        try {
            const { data, status, headers } = await axios.get(url+{name});

            console.log(JSON.stringify(data, null, 4));

            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    },
    getImage: async function (id: number) {
        try {
            const { data, status, headers } = await axios.get(url+{id}+'/imagem');

            console.log(JSON.stringify(data, null, 4));

            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    },
}