import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FilledInput from '@mui/material/FilledInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';


interface State {
  password: string;
  showPassword: boolean;
}

export default function Cadastro(){
  const [values, setValues] = React.useState<State>({
    password: '',
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
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
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
    
        <TextField
          id="outlined-read-only-input"
          label="Nome Completo"
        />
        <TextField
          id="outlined-number"
          label="CPF"
        />
        <TextField
          id="outlined-helperText"
          label="Telefone"
        />
         <TextField
          id="outlined-helperText"
          label="Data de nascimento"
        />
         <TextField
          id="outlined-helperText"
          label="CEP"
        />
         <TextField
          id="outlined-helperText"
          label="Número"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-helperText"
          label="Complemento"
        />
           <TextField
          required
          id="outlined-required"
          label="Email"
        />
        <TextField
          id="outlined-disabled"
          label="Usuario"

        />
       
       <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
       <OutlinedInput
         id="outlined-adornment-password"
         type={values.showPassword ? 'text' : 'password'}
         value={values.password}
         onChange={handleChange('password')}
         endAdornment={
           <InputAdornment position="end">
             <IconButton
               aria-label="toggle password visibility"
               onClick={handleClickShowPassword}
               onMouseDown={handleMouseDownPassword}
               edge="end"
             >
               {values.showPassword ? <VisibilityOff /> : <Visibility />}
             </IconButton>
           </InputAdornment>
         }
         label="Password"
       />
         <div>
                            <button type="submit">Enviar</button>
                        </div>
        </div>
        </Box>

    )};
      
      