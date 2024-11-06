import './index.scss';
import Botao from '../../components/botoes';
import Sesoes from '../../components/sessoes';
import BarraPesquisa from '../../components/barraPesquisa';
import Card from '../../components/cards';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function AdmPedidos() {
  const [classificacaoPedido, setClassificacaoPedido] = useState("Em preparo");
  const [exibicao, setExibicao] = useState("ex1");
  const [vetorFiltrado, setVetorFiltrado] = useState([]);
  const [escrito, setEscrito] = useState("");
  const [listaFinalizado, setListaFinalizado] = useState([]);
  const [listaEmPreparo, setListaEmPreparo] = useState([]);
  const navigate = useNavigate();

  async function buscaPedidoFinalizado() {
    try {
      const resp = await axios.get('http://localhost:3010/pedido/finalizado');
      console.log("Pedidos finalizados:", resp.data.pedido);
      setListaFinalizado(resp.data.pedido);
    } catch (error) {
      console.error("Erro ao buscar pedidos finalizados:", error);
    }
  }

  async function buscaPedidoEmPreparo() {
    try {
      const resp = await axios.get('http://localhost:3010/pedido/emPreparo');
      console.log("Pedidos em preparo:", resp.data.pedido);
      setListaEmPreparo(resp.data.pedido);
    } catch (error) {
      console.error("Erro ao buscar pedidos em preparo:", error);
    }
  }

  function navegar() {
    navigate('/login');
  }

  useEffect(() => {
    buscaPedidoFinalizado();
    buscaPedidoEmPreparo();
  }, [listaEmPreparo,listaFinalizado]);

  useEffect(() => {
    if (classificacaoPedido === "Em preparo") {
      setVetorFiltrado(listaEmPreparo);
    } else {
      setVetorFiltrado(listaFinalizado);
    }
  }, [classificacaoPedido, listaEmPreparo, listaFinalizado]);

  return (
    <div className="Acompanhamento-geral">
      <div className='ladoEsq'>
        <h1>DESFRUTO</h1>
        <div className='botoes-tela'>
          <Botao 
            iconeId={1} 
            funcaoSet={() => { 
              setClassificacaoPedido("Em preparo"); 
              
            }} 
          />
          <Botao 
            iconeId={2} 
            funcaoSet={() => { 
              setClassificacaoPedido("Finalizado"); 
              setExibicao("ex2"); 
            }} 
          />
          <div className='botao-sair'>
            <Botao iconeId={3} funcaoNav={navegar} />
          </div>
        </div>
      </div>

      <div className='ladoDir'>
        <h1>Lista de pedidos</h1>
        <div className='sessoesBarra'>
          <Sesoes 
            funcaoSet={setClassificacaoPedido} 
            funcaoExb={setExibicao}
          />
          <BarraPesquisa texto={escrito} funcaoSet={setEscrito} />
        </div>

        <h2>{classificacaoPedido}</h2>
        <div className='pedidos'>
          {vetorFiltrado.map(item => (
            <Card 
              key={item.codigo || item.id_pedido} 
              codigo={item.codigo || item.id_pedido} 
              tamanho={item.ds_tamanho} 
              url={item.url || item.ds_url} 
              estado={item.estado || item.ds_estado} 
              nome={item.nome || item.ds_nome} 
              preco={item.preco || item.dp_preco} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}