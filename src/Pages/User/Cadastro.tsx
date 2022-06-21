import React from 'react';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import InputMask from "react-input-mask";


interface State {
    password: string;
    showPassword: boolean;
}

export default function Cadastro() {
    const [values, setValues] = React.useState<State>({
        password: '',
        showPassword: false,
    });

    const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({...values, [prop]: event.target.value});
        };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <main>
            <Box>
                <Card variant="outlined">
                    <Grid container direction="row" alignItems="center" justifyContent="center">
                        <Grid item>
                            <Typography variant="h4" gutterBottom>Cadastro de Usuario</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" justifyContent="space-around">
                        <Box component="form" sx={{'& .MuiTextField-root': {m: 1}}} noValidate autoComplete="off">
                            <Grid container direction="row" justifyContent="space-around">
                                <Grid item md={4}>
                                    <Grid container direction="column" alignItems="center" justifyContent="flex-start">
                                        <Grid item>
                                            <TextField required name="nome" type="text" label="Nome Completo"/>
                                        </Grid>
                                        <Grid item>
                                            <InputMask mask="999.999.999-99">
                                                <TextField required name="cpf" type="text" label="CPF"/>
                                            </InputMask>
                                        </Grid>
                                        <Grid item>
                                            <TextField required name="telefone" type="text" label="Telefone"/>
                                        </Grid>
                                        <Grid item>
                                            <TextField required name="nascimento" type="text" label="Data de nascimento"/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={4}>
                                    <Grid container direction="column" alignItems="center" justifyContent="flex-start">
                                        <Grid item>
                                            <TextField required name="cep" type="text" label="CEP"/>
                                        </Grid>
                                        <Grid item>
                                            <TextField required name="numero" type="number" label="Número"/>
                                        </Grid>
                                        <Grid item>
                                            <TextField required name="complemento" type="text" label="Complemento"/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={4}>
                                    <Grid container direction="column" alignItems="center" justifyContent="flex-start">
                                        <Grid item>
                                            <TextField required name="email" type="email" label="Email"/>
                                        </Grid>
                                        <Grid item>
                                            <TextField required name="username" type="text" label="Usuario"/>
                                        </Grid>
                                        <Grid item>
                                            <TextField required name="password" type="password" label="Password"/>
                                        </Grid>
                                        <div>
                                            <button type="submit">Enviar</button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Card>
            </Box>
        </main>
    )
};
      
      