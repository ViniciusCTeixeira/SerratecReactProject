import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper"
import ReactInputMask from "react-input-mask";
import { TextFieldsOutlined } from '@mui/icons-material';

export default function AddEndereco() {
    const [cep, setCep] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const handleSubmit = (e: any) => {
        e.preventDefault()
    };

    return (
        <main>
            <Box>
                <Paper variant="outlined" sx={{p: "10px"}}>
                    <Grid container direction="row" alignItems="center" justifyContent="center">
                        <Grid item>
                            <Typography variant="h4" gutterBottom>Cadastro de Endereço</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" justifyContent="space-around">
                        <Box component="form" sx={{'& .MuiTextField-root': {m: 1}}} noValidate autoComplete="off" onSubmit={handleSubmit}>
                                <Grid item md={12}>
                                 <ReactInputMask mask="99999-999" onChange={(e) => setCep(e.target.value)}>
                                    {() => <TextField fullWidth required name="cep" type="text" label="CEP"/>}
                                 </ReactInputMask>
                                <Grid item md={12}>
                                    <TextField name="numero" type="number" label="Número" onChange={(e) => setNumero(e.target.value)}/>
                                </Grid>
                                <Grid item md={12}>
                                    <TextField name="complemento" type="text" label="Complemento" onChange={(e) => setComplemento(e.target.value)}/>
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
      
      