import { useState } from "react";
function BoasVindas (){
    const [nome, setNome]=useState('')
    return(
        <>
        <div>
            <input type="text" onChange={(e) => { setNome(e.target.value)}}/>
        </div>
        <div>
            <span>{nome}</span>
        </div>
        </>
    )
}
export default BoasVindas;
//o evento onChange é disparado ao ocorrer uma alteração dentro do input;
//a letra "e" signifca que o evento ocorrerá dentro do próprio elemento da função;
//Ou seja, a cada tecla clicada o evento é disparado fazendo com que mude o valor do setNome que irá destruir a cost nome antiga e criar uma nova const