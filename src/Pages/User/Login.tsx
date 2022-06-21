import React, {useState} from 'react';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault()
    };

    return (
        <main>
            <Box>
                <Paper variant="outlined" sx={{p: "10px", mt: 4, mb: 4}}>
                    <Grid container direction="row" alignItems="center" justifyContent="center">
                        <Grid item>
                            <Typography variant="h4" gutterBottom>Login</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" justifyContent="space-around">
                        <Box component="form" sx={{'& .MuiTextField-root': {m: 1}}} noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <Grid container direction="column" alignItems="center" justifyContent="flex-start">
                                <Grid item>
                                    <TextField fullWidth required name="username" type="text" label="Usuario" onChange={(e) => setUsername(e.target.value)}/>
                                </Grid>
                                <Grid item>
                                    <TextField fullWidth required name="password" type="password" label="Password" onChange={(e) => setPassword(e.target.value)}/>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" size="small" type="submit">
                                        Logar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Paper>
            </Box>
        </main>
    );
}