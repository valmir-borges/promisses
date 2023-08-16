function ExibeNota (props){
    function ExibeNota(){
        alert("Sua nota é "+props.nota)
      }
    return(
    <div>    
        <h1>{props.mensagem}</h1>
        <button onClick={ExibeNota}>Veja sua nota</button>
    </div>
    )
}
export default ExibeNota;