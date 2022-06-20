import axios from 'axios';

const url = "localhost:9090/";

export const Auth = {
    login: async function (username: string, password: string) {
        try {
            const { data, status, headers } = await axios.post(
                url,
                { username: {username}, password: {password} },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                },
            );

            if(status !== 200){
                return headers.error;
            }

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
    }
}