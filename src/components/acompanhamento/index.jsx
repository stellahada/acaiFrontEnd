import './index.scss'

export default function Acompanhamento({ nome, preco, onSelecionar }){
    const handleCheckboxChange = (event) => {
        const valor = event.target.checked ? preco : -preco; 

        const info={
            "valor":valor,
            "nome":nome
        }
        onSelecionar(info); 
    };
    return(
        <div    className='comp-acompanhamento'>
            <div className='container-acompanhamento'>
                <div className='checkbox'>
                    <input type='checkbox' onChange={handleCheckboxChange}></input>
                    <h1>{nome}</h1>
                </div>
                <h1>R$ {preco}</h1>
            </div>
        </div>
    )
}