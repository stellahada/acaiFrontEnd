import './index.scss'
import { IoMdCheckmark } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

export default function BotoesPedidos({id, funcao}){

    return(
        <div className='botaoPedidos-geral'>
            {id===1?
            <button className='false'><AiOutlineClose/></button>:
            <button onClick={funcao} className='true'><IoMdCheckmark/>CONFIRMAR</button>}
        </div>
    )
}