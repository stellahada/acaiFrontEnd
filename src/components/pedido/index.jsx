import axios, { Axios } from 'axios'
import './index.scss'

export default function Pedido({nome, preco, url, id}){

    async function excluir(id) {
        const resp = axios.delete('http://localhost:3010/item/'+id)
    }

    return(
        <div className='comp-pedido'>
            <div className='container-pedido'>
                <img src={url} alt="" />
                <div className='informacoes'>
                    <p>{nome}</p>
                    <div className='lixo'>
                    <p>R$ {preco}</p>
                    <button onClick={() => excluir(id)}>Excluir</button>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}