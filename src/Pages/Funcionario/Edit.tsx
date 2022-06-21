import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import ReactInputMask from "react-input-mask";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper"

export default function AddFuncionario() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e: any) => {
        e.preventDefault()
    };

    return (
        <main>
            <Box>
                <Paper variant="outlined" sx={{p: "10px"}}>
                    <Grid container direction="row" alignItems="center" justifyContent="center">
                        <Grid item>
                            <Typography variant="h4" gutterBottom>Edição de Funcionario</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" justifyContent="space-around">
                        <Box component="form" sx={{'& .MuiTextField-root': {m: 1}}} noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <Grid container direction="row" alignItems="center" justifyContent="space-around">
                                <Grid item md={12}>
                                    <TextField fullWidth required name="nome" type="text" label="Nome Completo" onChange={(e) => setNome(e.target.value)}/>
                                </Grid>
                                <Grid item md={4}>
                                    <Grid container direction="column" alignItems="center" justifyContent="flex-start">
                                        <Grid item>
                                            <ReactInputMask mask="999.999.999-99" onChange={(e) => setCpf(e.target.value)}>
                                                {() => <TextField fullWidth required name="cpf" type="text" label="CPF"/>}
                                            </ReactInputMask>
                                        </Grid>
                                        <Grid item>
                                            <ReactInputMask mask="(099) 99999-9999" onChange={(e) => setTelefone(e.target.value)}>
                                                {() => <TextField fullWidth required name="telefone" type="text" label="Telefone"/>}
                                            </ReactInputMask>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={4}>
                                    <Grid container direction="column" alignItems="center" justifyContent="flex-start">
                                        <Grid item>
                                        <Grid item>
                                            <ReactInputMask mask="99/99/9999" onChange={(e) => setNascimento(e.target.value)}>
                                                {() => <TextField fullWidth required name="nascimento" type="text" label="Data de nascimento"/>}
                                            </ReactInputMask>
                                        </Grid>
                                        </Grid>
                                        <Grid item>
                                            <TextField fullWidth required name="email" type="email" label="Email" onChange={(e) => setEmail(e.target.value)}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={4}>
                                    <Grid container direction="column" alignItems="center" justifyContent="flex-start">
                                        <Grid item>
                                            <TextField fullWidth required name="username" type="text" label="Usuario" onChange={(e) => setUsername(e.target.value)}/>
                                        </Grid>
                                        <Grid item>
                                            <TextField fullWidth required name="password" type="password" label="Senha" onChange={(e) => setPassword(e.target.value)}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" size="small" type="submit">
                                        Editar
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
      
      