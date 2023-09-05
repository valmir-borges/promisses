import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { Navigate, json, useNavigate } from 'react-router-dom';


//Mudando o tema dos componentes do material UI
const theme = createTheme({
  //aqui dentro vai ter cor primária, secundária e etc
  palette: {
    mode: 'light',
    primary: {
      main: '#b53d40',
    },
    secondary: {
      main: '#ff002a',
    },
    background: {
      default: '#b1b1b1',
    },
  },
})


function Login() {

  const [ email, setEmail]= useState("");
  const [ senha, setSenha]= useState("");
  const [ lembrar , setLembrar]= useState(false);
  const [ login, setLogin]= useState(false)
  const [ erro, setErro]= useState(false)
  const navigate = useNavigate()
  useEffect( () => {
    if (login){
      localStorage.setItem("usuario", JSON.stringify({email:email}));
      setEmail("");
      setSenha("");
      navigate("/");//Está mudando a url da react, após o login manda o usuário para a página raiz (app)
    }
  }, [login])

  //função para quando enviar o formulário não recarregar a página e autenticar os dados
  function Autenticar(evento){
    evento.preventDefault();

    fetch("https://api.escuelajs.co/api/v1/auth/login",//O fetch manda uma requisição para url digitada, futuramente será o link do banco de dados feitos por nós
    {method: "Post",//A requisição irá ser do método post, ou seja, por baixo dos panos (Existe 5 métodos de requisição)
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(//O corpo da requisição será essa
      {
        email: email,//No banco de dados estará campos chamados email que neles será procurado o que está dentro da variável email
        password: senha//No banco de dados estará campos chamados password que neles será procurado o que está dentro da variável senha
      }
    )})
    .then((resposta) => resposta.json())//Então se tudo deu certo pega a resposta e transforma em JSON
    .then((json) => {
      if (json.statusCode === 401){//Se o número que o banco de dados retornar, ou seja, o statusCode for igual a 401, quer dizer que não foi encontrado esses dados no banco de dados, 401 é o número específico que diz que não está autorizado        setLogin(false);
        setErro(true)//Se satisfazer a condição quer dizer que não foi autorizado, ou seja, o setErro será true, e dará erro ao fazer o login
      } else {
        setLogin(true);//Caso contrário, quer dizer que o login foi autorizado, logo o setLogin será true
      }
    })
    .catch((erro) => { setErro(true)})
  }

  return (
    <ThemeProvider theme={theme} >
      <Container component="section" maxWidth="xs">
        <Box sx={{mt: 10, padding: "40px", borderRadius: "10px", boxShadow: "2px", display:"flex", flexDirection:"column", alignItems:"center"}}>
          <Typography component="h1" variant='h5'>Entrar</Typography>
          <Box component="form" onSubmit={Autenticar}>
            <TextField 
            label="Email" 
            variant='outlined' 
            type='email'
            margin='normal' 
            fullWidth 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            />
            <TextField 
            label="Senha" 
            variant='outlined' 
            type='password' 
            margin='normal' 
            fullWidth 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)}
            />
            <FormControlLabel 
            control={<Checkbox value={lembrar} onChange={(e) => setLembrar(!lembrar)} />}// a ! serve para colocar o contrário do que está dentro da variável lembrar, pode estar true vai para false, se estiver false vai para true.
            label="Lembra-me"
            />
            <Button type='submit' variant="contained" fullWidth sx={{mt:2, mb:2}}>Login</Button>
            <Grid container >
              <Grid item xs>
                Esqueci a senha
              </Grid>
              <Grid item>
                Cadastrar
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Login;
