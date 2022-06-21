import React from 'react';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import InputMask from "react-input-mask";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper"

export default function Cadastro() {
    const handleSubmit = (e: any) => {
        console.log('oi')
        e.preventDefault()
    };

    return (
        <main>
            <Box>
                <Paper variant="outlined" elevation={24} sx={{p: "10px"}}>
                    <Grid container direction="row" alignItems="center" justifyContent="center">
                        <Grid item>
                            <Typography variant="h4" gutterBottom>Cadastro de Usuario</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" justifyContent="space-around">
                        <Box component="form" sx={{'& .MuiTextField-root': {m: 1}}} noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <Grid container direction="row" alignItems="center" justifyContent="space-around">
                                <Grid item md={12}>
                                    <TextField fullWidth required name="nome" type="text" label="Nome Completo"/>
                                </Grid>
                                <Grid item md={4}>
                                    <Grid container direction="column" alignItems="center" justifyContent="flex-start">
                                        <Grid item>
                                            <InputMask mask="999.999.999-99">
                                                {() => <TextField fullWidth required name="cpf" type="text" label="CPF"/>}
                                            </InputMask>
                                        </Grid>
                                        <Grid item>
                                            <InputMask mask="(099) 99999-9999">
                                                {() => <TextField fullWidth required name="telefone" type="text" label="Telefone"/>}
                                            </InputMask>
                                        </Grid>
                                        <Grid item>
                                            <InputMask mask="99/99/9999">
                                                {() => <TextField fullWidth required name="nascimento" type="text" label="Data de nascimento"/>}
                                            </InputMask>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={4}>
                                    <Grid container direction="column" alignItems="center" justifyContent="flex-start">
                                        <Grid item>
                                            <InputMask mask="99999-999">
                                                {() => <TextField fullWidth required name="cep" type="text" label="CEP"/>}
                                            </InputMask>
                                        </Grid>
                                        <Grid item>
                                            <TextField fullWidth required name="numero" type="number" label="Número"/>
                                        </Grid>
                                        <Grid item>
                                            <TextField fullWidth required name="complemento" type="text" label="Complemento"/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={4}>
                                    <Grid container direction="column" alignItems="center" justifyContent="flex-start">
                                        <Grid item>
                                            <TextField fullWidth required name="email" type="email" label="Email"/>
                                        </Grid>
                                        <Grid item>
                                            <TextField fullWidth required name="username" type="text" label="Usuario"/>
                                        </Grid>
                                        <Grid item>
                                            <TextField fullWidth required name="password" type="password" label="Password"/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" size="small" type="submit">
                                        Cadastro
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Paper>
            </Box>
        </main>
    );
};
      
      