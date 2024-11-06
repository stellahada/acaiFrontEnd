import { useState } from 'react';
import './index.scss'

import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom'

export default function Informacoes({visibilidade}){
    const [visibilidadeH,setVisibilidadeH] = useState(visibilidade)
    const navigate = useNavigate();
  

    useEffect(() => {
        setVisibilidadeH(visibilidade);
    }, [visibilidade]);
    

    function mudarTela(){
        navigate('/Totem')
    }
    return(
        <div className='page-informacoes'>

           
                {visibilidadeH && (
                        <div className='modal-toten'>
                        <img src="./assets/images/informacoes/logo.png" alt="Logo" />
                        <div>
                            <div className='informacoes-pedido'>
                            <div className='pedido'>
                                <p>Pedido em preparo</p>
                            </div>
                            <h1>Desfruto</h1>
                            <p>
                                Desde acompanhar o progresso até fazer alterações no pedido, você
                                <br />
                                pode visualizar atualizações em tempo real do seu pedido atual.
                            </p>
                            </div>
                        </div>
                        <button onClick={mudarTela}>Pedidos</button>
                        </div>
                    )}
    
 
            
            <div className='container-titulo'>
                <h1>Satisfaça seus desejos mais doces</h1>
            </div>
            <div className='container-informacoes'>
                <div className='image-acai'>
                    <img src="./assets/images/informacoes/image-acai.png" alt="" />
                </div>
                <div className='informacoes'>

                    <div className='texto'>
                        <h1>Desfruto</h1>
                        <p>Aqui você faz as regras. Adicione a<br/>
                            cobertura que desejar e divirta-se.</p>
                    </div>
                    <div className='texto'>
                        <h1>Horario</h1>
                        <p>estamos abertos todos os dias, das<br/>
                       <span>10h às 22h</span></p>
                    </div>
                     <div className='texto'>
                        <h1>Localização</h1>
                        <p>Estamos localizados no centro da<br/> 
                        cidade, na<span> Avenida Brasil, 789</span></p>
                      </div>
                </div>
                
            </div>
        </div>
    )
}