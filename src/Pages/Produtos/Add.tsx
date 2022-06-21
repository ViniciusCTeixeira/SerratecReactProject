import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper"

export default function AddProduto() {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const handleSubmit = (e: any) => {
        e.preventDefault()
    };

    return (
        <main>
            <Box>
                <Paper variant="outlined" sx={{p: "10px"}}>
                    <Grid container direction="row" alignItems="center" justifyContent="center">
                        <Grid item>
                            <Typography variant="h4" gutterBottom>Cadastro de Produto</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" justifyContent="space-around">
                        <Box component="form" sx={{'& .MuiTextField-root': {m: 1}}} noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <Grid container direction="row" alignItems="center" justifyContent="space-around">
                                <Grid item md={12}>
                                    <TextField fullWidth required name="nome" type="text" label="Nome Completo" onChange={(e) => setNome(e.target.value)}/>
                                </Grid>
                                <Grid item md={12}>
                                    <TextField fullWidth required name="descricao" type="text" label="Descrição" onChange={(e) => setDescricao(e.target.value)}/>
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
      
      