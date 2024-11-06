import './index.scss';
import BotoesPedidos from '../botoesPedidos';
import axios from 'axios';
import { useState } from 'react';

export default function Card({ codigo, estado, nome, preco, url, tamanho }) {
    const [pedidoEstado, setPedidoEstado] = useState(estado); // Gerenciar o estado localmente

    async function alterarPedido() {
        let body = {
            "estado": "Saiu para Entrega",
        };

        let id = 1;
        let resp = await axios.put('http://localhost:3010/pedido/' + id, body);
        
        // Atualiza o estado localmente após a alteração
        setPedidoEstado("Saiu para Entrega");

        alert('Status do pedido alterado com sucesso !!');
    }

    return (
        <div className="card-geral">
            <div className='header-pedido'>
                <div className='ladoEsq-ped'>
                    <p>Pedido #{codigo}</p>
                    <p className='sub'>31/10/2024</p>
                </div>

                <div className='ladoDir-ped'>
                    <p>{pedidoEstado}</p>
                </div>
            </div>

            <div className='itens-pedido'>
                <div className='item'>
                    <div className='item-imagem'>
                        <img src={url} alt="" />
                    </div>

                    <div className='item-informacoes'>
                        <div>
                            <p>{nome}</p>
                            <p className='sub'>{tamanho}</p>
                        </div>

                        <div className='precoQuant'>
                            <span>R$ {preco}</span>
                            <span>1 uni</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            {pedidoEstado !== "Saiu para Entrega" && (
                <div className='botoes-pedidos'>
                    <BotoesPedidos id={1} />
                    <BotoesPedidos id={2} funcao={alterarPedido} />
                </div>
            )}
        </div>
    );
}
