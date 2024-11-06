import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const Totem = () => {
    const [orders, setOrders] = useState([]);
    const [lista, setLista] = useState([]);
    const [valor, setValor] = useState();
    const navigate = useNavigate();
    const [valorTotal, setValorTotal] = useState();

    async function buscaPedido() {
        try {
            const resp = await axios.get('http://localhost:3010/pedido');
            setLista(resp.data.pedido);
        } catch (err) {
            console.error("Erro ao buscar pedidos:", err);
        }
    }

    const handleBack = () => {
        navigate(-1);
    };

    async function ValorPedido() {
        try {
            const resp = await axios.get('http://localhost:3010/pedido/valor');
            const valorRecebido = parseFloat(resp.data.valor.total);

            if (!isNaN(valorRecebido)) {
                setValor(valorRecebido);
                setValorTotal(valorRecebido + 5);
            } else {
                console.error("Erro: valorRecebido não é um número válido");
                setValorTotal(5); // Apenas a taxa de entrega, se o valor estiver inválido
            }
        } catch (error) {
            console.error("Erro ao buscar o valor do pedido:", error);
        }
    }

    useEffect(() => {
        ValorPedido();
        buscaPedido();
        const interval = setInterval(buscaPedido, 5000);
        return () => clearInterval(interval);
    }, []);

    const getStatusImage = (orderStatus, currentStatus) => {
        const statusOrder = ['pedido confirmado', 'em preparo', 'Saiu para Entrega'];
        if (statusOrder.indexOf(orderStatus) >= statusOrder.indexOf(currentStatus)) {
            return `${process.env.PUBLIC_URL}/assets/images/toten/elipseConfirm.png`;
        } else {
            return `${process.env.PUBLIC_URL}/assets/images/toten/elipseDefault.png`;
        }
    };

    const marcarComoEntregue = async (idPedido) => {
        try {
            // Altere a URL para usar o idPedido
            await axios.delete(`http://localhost:3010/pedido/${idPedido}`);
            // Atualiza a lista de pedidos após a exclusão
            setLista(prevLista => prevLista.filter(item => item.id_pedido !== idPedido));
        } catch (error) {
            console.error("Erro ao marcar pedido como entregue:", error);
        }
    };
    
    
    return (
        <div className="totem-container">
            <div className='nav'>
                <img src='./assets/images/toten/arrow-left.png' alt='voltar' onClick={handleBack} style={{ cursor: 'pointer' }} />
                <div className='text'>
                    <h3>Acompanhamento do Pedido</h3>
                    <div className='cart'>
                        <hr />
                        <img src='./assets/images/toten/shopping-cart.png' />
                        <p> Meu pedido</p>
                    </div>
                </div>
            </div>
            <hr />
            {lista && lista.length > 0 ? (
                lista.map(item => {
                    return (
                        <div key={item.id_pedido} className="order">
                            <div className='orderDetails'>
                                <div className='cliente'>
                                    <h3>Pedido #{item.id_pedido}</h3>
                                    <hr />
                                    <img src='./assets/images/toten/Map-pin.png' alt='map-pin' />
                                    <p>Rua Saí Guaçu, 1</p>
                                </div>

                                <ul>
                                    {lista && lista.length >= 0 ? (
                                        lista.map((item, index) => (
                                            <div key={index}>
                                                <div className="item">
                                                    <img src={item.ds_url} alt={item.ds_nome} />
                                                    <div className='namePrice'>
                                                        <p>{item.ds_nome}</p>
                                                        <span className='price'>R$ {item.dp_preco.toFixed(2)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <li>Sem itens neste pedido</li>
                                    )}
                                    <hr />
                                </ul>
                                <div className='total'>
                                    <p className='bold'>Valor total: <span>R$ {valorTotal ? valorTotal.toFixed(2) : '0.00'}</span></p>
                                </div>

                                {item.ds_estado === 'Saiu para Entrega' && (
                                    <button onClick={() => marcarComoEntregue(item.id_pedido)}>Marcar como Entregue</button>
                                )}
                            </div>
                            <div className="status-container">
                                <div className="status">
                                    <div className='image'>
                                        <img src={getStatusImage(item.ds_estado, 'Em preparo')} alt="Pedido confirmado" />
                                        <img className='line' src='./assets/images/toten/linhaElipse.png' />
                                    </div>
                                    <p>Pedido confirmado pelo restaurante</p>
                                </div>
                                <div className="status">
                                    <div className='image'>
                                        <img src={getStatusImage(item.ds_estado, 'Em Preparo')} alt="Em preparo" />
                                        <img className='line' src='./assets/images/toten/linhaElipse.png' />
                                    </div>
                                    <p>Em preparo</p>
                                </div>
                                <div className="status">
                                    <div className='image'>
                                        <img src={getStatusImage(item.ds_estado, 'Saiu para Entrega')} alt="Saiu para a entrega" />
                                    </div>
                                    <p>Saiu para a entrega</p>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p>Sem pedidos ativos no momento.</p>
            )}
        </div>
    );
};

export default Totem;
