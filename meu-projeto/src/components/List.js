import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
               <Item marca="azul" ano_lancamento={2564}/>
               <Item marca="tam" ano_lancamento={1694}/>
               <Item/>
            </ul>
        </>
    )
}

export default List