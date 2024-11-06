import './index.scss'
import { useState } from 'react';
import Pedido from '../pedido';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function ModalFinalizar({isOpen,closeModal,informacoes}){
    const [lista, setLista] = useState([]);
    const [valor,  setValor] = useState();
    const [valorTotal, setValorTotal ] = useState();
    const [openModal, setOpenModal]=useState(false);
    const navigate = useNavigate();

    async function buscaItens(){

        let resp = await axios.get('http://localhost:3010/pedido/itens')
        setLista(resp.data.itens)
    }

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

    function ativaModal(){
        closeModal()
        navigate('/confirmado')
        setOpenModal(true)
    }

    useEffect(() => {
        if (isOpen) {
            buscaItens();
            ValorPedido();
        }
    }, [isOpen]);

    if(isOpen){
        return(
            <div className='modal-finalizar ' onClick={closeModal}>
                <div className='container-modal-finalizar' onClick={(e) => e.stopPropagation()}>
                    <div  className='titulo-finalizar'  >
                        <h1>Meu pedido</h1>
                    </div>
                    <div className='acompanhamentos-finalizar'>
                     {lista.map((item) => {
                            // Verifica se dp_preco é uma string antes de tentar formatá-lo
                            let precoFormatado;

                            if (typeof item.dp_preco === 'string') {
                                precoFormatado = item.dp_preco.replace(',', '.'); // Formata apenas se for string
                            } else if (typeof item.dp_preco === 'number') {
                                precoFormatado = item.dp_preco.toString(); // Converte para string se for número
                            } else {
                                // Se for um tipo inesperado, trate como 0 ou lance um erro
                                precoFormatado = '0.00'; // ou lance um erro conforme sua lógica de negócio
                            }

                            return (
                                <Pedido
                                    key={item.id_item}
                                    acompanhamento = {item.Acompanhamento}
                                    nome={item.ds_nome}
                                    tamanho={item.ds_tamanho}
                                    preco={parseFloat(precoFormatado)} // Converte para número
                                    url={item.ds_url}
                                    id={item.id_item}
                                />
                            );
                        })}
                    </div>
                    <div className='valores'>
                        <div className='separacao'></div>
                        <div className='container-valores'>
                        <p>Subtotal</p>
                        <p>R$ {valor}</p>
                        </div>
                        <div className='container-valores'>
                        <p>Entrega</p>
                        <p>R$ 5.00</p>
                        </div>

                        <div className='separacao'></div>
                        <div className='container-valores'>
                        <p>Valor Total</p>
                        <p>R$ {valorTotal}</p>
                        </div>
                    </div>
                    <div className='final-finalizar'>
                        
                        <button className='botao-finalizar' onClick={ativaModal}>Finalizar Pedido</button>
                    </div>
                </div>
            </div>
        )
    }else{
        return null;
    }
}