import './index.scss'
import axios from 'axios';
import Acompanhamento from '../acompanhamento';
import { useState,useEffect } from 'react';

export default function ModalAdicionar({isOpen,closeModal,informacoes}){

    const [preco, setPreco] = useState(informacoes.preco);
    const [nome, setnome] = useState(informacoes.nome);
    const [valor, setValor] = useState(preco);
    const [url, setUrl] = useState(informacoes.url);
   // const acompanhamento = ['granola','morango','leite condensado'];
    const [tamanho, setTamanho] = useState('');
    const [atualizarCarrinho, setAtualizarCarrinho] = useState(false);
    

    const acompanhamentos = [
        {
            "nome":"Granola",
            "preco": 2.50,
        }, 
        {
            "nome":"Paçoca",
            "preco": 1.50,
        },
        {
            "nome":"Leite Condensado",
            "preco": 2.50,
        },
        {
            "nome":"Morango",
            "preco": 3.50,
        },
        {
            "nome":"Banana",
            "preco": 2.50,
        },
        {
            "nome":"Kiwi",
            "preco": 3.50,
        },
       
    ]

    useEffect(() => {
        if (atualizarCarrinho) {
            setAtualizarCarrinho(false);
        }
    }, [atualizarCarrinho]);


    
    function ajustaPreco(info) {
        const precoAtual = parseFloat(preco) || 0;
        const valorNumero = parseFloat(info.valor) || 0;
        const soma = precoAtual + valorNumero;

        setPreco(soma);
        setValor(soma)
    }
    
    
    async function inserirItemCarrinho() {
        const body = 
        {
            "pedido":1,
            "url": informacoes.url,
            "preco": preco,
            "nome": informacoes.nome,
            "tamanho": tamanho,
            "acompanhamentos": informacoes.acompanhamento
        }

        let resp = await axios.post('http://localhost:3010/pedido/item', body)
        setAtualizarCarrinho(true);
        return resp
    }
    

    function adiciona(){
        closeModal()
        inserirItemCarrinho()
        alert('Item adicionado ao carrinho');
    }


    if(isOpen){
        return(
            <div className='modal-adicionar ' onClick={closeModal}>
                <div className='container-modal' onClick={(e) => e.stopPropagation()}>
                    <div className='container-imagemm' >
                        <img src={informacoes.url} alt="" />
                    </div>
                    <div className='container-informacoes'>
                        <h1>{informacoes.nome}</h1>
                        <h1>R${informacoes.preco}</h1>
                    </div>
                    <div className='descricao'>
                        <p>Tamanho</p>
                    </div>
                    <div className='botoes-mililitros'>
                    <button
                                 className={tamanho === '150ml' ? 'selecionado' : ''}
                                onClick={() => setTamanho('150ml')}
                            >
                                150ml
                            </button>
                            <button
                                className={tamanho === '300ml' ? 'selecionado' : ''}
                                onClick={() => setTamanho('300ml')}
                            >
                                300ml
                            </button>
                            <button
                                className={tamanho === '500ml' ? 'selecionado' : ''}
                                onClick={() => setTamanho('500ml')}
                            >
                                500ml
                            </button>
                            <button
                                className={tamanho === '750ml' ? 'selecionado' : ''}
                                onClick={() => setTamanho('750ml')}
                            >
                                750ml
                            </button>
                            <button
                                className={tamanho === '1L' ? 'selecionado' : ''}
                                onClick={() => setTamanho('1L')}
                            >
                                1L
                            </button>
                    </div>

                    <div className='acompanhamentos'>
                    <h1>Acompanhamentos à parte</h1>
                    {acompanhamentos.map((item)=>(
                     <Acompanhamento nome={item.nome} preco={item.preco}   onSelecionar={ajustaPreco}/>
                ))}

                    </div>
                    <div className='final'>
                        <button onClick={adiciona}>Adicionar ao pedido R$ {preco}</button>
                    </div>
                </div>
            </div>
        )
    }else{
        return null;
    }
}