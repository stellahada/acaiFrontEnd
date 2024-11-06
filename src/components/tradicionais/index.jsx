import './index.scss'
import ModalAdicionar from '../modalAdicionar'
import { useState } from 'react'
export default function Destaque_Trad(props){

    const [openModal, setOpenModal]=useState(false)

    function AtivaModal(){
        setOpenModal(true)
    }
    return(
        <div className='destaque-Trad'  >
            <div className='imagem'>
             <img src={props.url} alt="" />
            </div>
            <div className='informacoes'>
                <div className='descricao'>   
                    <h2>{props.nome}</h2>
                    <h2><span>{props.descricao}</span></h2>
                </div>
                <div className='preco'>
                <p>R$ {props.preco}</p>
                <ModalAdicionar isOpen={openModal} closeModal={() => setOpenModal(!openModal)} informacoes={props.informacoes}/>
                <button onClick={AtivaModal}>+ Add</button>
                </div>
            </div>
        </div>
    )
}