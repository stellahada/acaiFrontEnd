import './index.scss'

import ModalAdicionar from '../modalAdicionar'
import { useState } from 'react'

export default function Destaque_Gourmet(props){
    const [openModal, setOpenModal]=useState(false)

    function AtivaModal(){
        setOpenModal(true)
    }
    return(
        <div className='destaque-Gourmet'  >
            <div className='informacoes'>  
                <img src={props.url} alt="" />
                <h2>{props.nome}</h2>
                <h2><span>R$ {props.preco}</span></h2>
                <ModalAdicionar isOpen={openModal} closeModal={() => setOpenModal(!openModal)} informacoes={props.informacoes}/>
                <button onClick={AtivaModal}>+ Add</button>
            </div>
            
        </div>
    )
}