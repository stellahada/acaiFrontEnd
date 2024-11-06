import './index.scss'

import ModalFinalizar from '../../../components/modalFinalizar'
import ModalConfirmado from '../../../components/modalConfirmado'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { useState,useEffect } from 'react'

export default function Home({visibilidade}){
    const navigate = useNavigate();
    const [openModal, setOpenModal]=useState(false)
    const [openModalConfirmado, setOpenModalConfirmado] = useState(visibilidade);
    
    useEffect(() => {
        setOpenModalConfirmado(visibilidade);
    }, [visibilidade]);
    const [quantidade, setQntItens] =useState(0)

    function AtivaModal(){
        navigate('/home');
        setOpenModal(true)
    }

    async function itensCarrinho(){
        let resp = await axios.get('http://localhost:3010/pedido/quantidade')
        setQntItens(resp.data.total.total)
    }

    function adm(){
        navigate('/login');
    }
    

    useEffect(() => {
        itensCarrinho()
    }, [() => AtivaModal()]);

    
    return(
        <div className='page-home'>
            <div className='container-home'>
                    <div className='logo-home' onClick={adm} style={{cursor:"pointer"}}>
                        <h1>DESFRUT</h1>
                        <img src="./assets/images/home/logo.png" alt="" />
                    </div>
                    <div className='images-home'>
                        <img src="./assets/images/home/pote-kiwi.png" alt="kiwi" />
                    </div>
            </div>
            <div className='botao-flutuante'>
            <ModalConfirmado isOpen={openModalConfirmado} closeModal={() => setOpenModalConfirmado(!openModalConfirmado)}  />
            <ModalFinalizar isOpen={openModal} closeModal={() => setOpenModal(!openModal)} />
                <button onClick={AtivaModal} className='botao'><p className='quantidade'>{quantidade}</p><img className='sacola' src="./assets/images/botao/Vector.png " alt="" /></button>
            </div>
                   
                    
            
        </div>
    )
}