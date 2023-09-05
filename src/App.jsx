import { Avatar, Button } from "@mui/material";

function App(props) {
  return (
    <>
    <h1>Home</h1>
    <Button variant="contained">Contained</Button>
    <Avatar alt="aa" src="/static/images/avatar/3.jpg" />
    </>
  );
}

export default App;
//quando precisar importar um componente já feito, primeiro escreve ele como componente para importar automaticamente e depois copia e cola o componente do site
