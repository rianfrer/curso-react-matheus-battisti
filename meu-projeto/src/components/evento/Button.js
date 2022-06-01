function Button(props){
    return <button onClick={props.event}>{props.text}</button> //quando tem só uma linha de código pode escrever assim
}

export default Button