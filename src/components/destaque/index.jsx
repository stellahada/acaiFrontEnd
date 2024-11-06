import './index.scss'
import ModalAdicionar from '../modalAdicionar'
import { useState } from 'react'

export default function Destaque_Comp(props){
    const [openModal, setOpenModal]=useState(false)

    function AtivaModal(){
        setOpenModal(true)
    }
    return(
        <div className='destaque-comp'  style={{ backgroundImage: `url(${props.url})` }}>
            <div className='informacoes'>
                <div>   
                    <h1>{props.nome}</h1>
                    <p>R$ {props.preco}</p>
                </div>
                <ModalAdicionar isOpen={openModal} closeModal={() => setOpenModal(!openModal)} informacoes={props.informacoes}/>
                <button onClick={AtivaModal}>+ Add</button>
            </div>
        </div>
    )
}