import './index.scss'

import Acompanhamento from '../acompanhamento';
import { useState } from 'react';

import Axios from 'axios'

import Pedido from '../pedido';
import { useNavigate } from 'react-router-dom';




export default function ModalConfirmado({isOpen,closeModal}){
    const navigate = useNavigate()
    const [openModal, setOpenModal]=useState(false)

   function closeModalTela(){
    closeModal()
    navigate('/confirmado')
   }

    if(isOpen){
        return(
           <div className='modal-confirmado'  onClick={closeModalTela}>
                <div className='container-confirmado' onClick={(e) => e.stopPropagation()}>
                    <img src="./assets/images/Finalizado/modal.png" alt="" />
                    <h1>Woohoo!</h1>
                    <div className='texto'>   
                        <p>Seu pedido foi confirmado!</p>
                        <p>Obrigado por realizar seu pedido com a gente!</p>
                    </div>
                    <button onClick={closeModalTela}>Fechar</button>
                </div>
           </div>
        )
    }else{
        return null;
    }
}