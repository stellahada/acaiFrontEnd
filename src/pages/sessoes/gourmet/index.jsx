import './index.scss'

import Destaque_Gourmet from '../../../components/gourmet'
import { Scrollbar } from 'react-scrollbars-custom';

export default function Gourmet(){

    const destaques = [
        {
            "url":'./assets/images/gourmet/acai.png',
            "nome":"Velha infancia",
            "preco":"20,00"
        },
        {
            "url":'./assets/images/gourmet/acai_paçoca.png',
            "nome":"Açai com paçoca",
            "preco":"22,00"
        },
        {
            "url":'./assets/images/gourmet/acai_oreo.png',
            "nome":"Crema Oreo",
            "preco":"25,00"
        }
        ,
        {
            "url":'./assets/images/gourmet/acai_kit_kero.png',
            "nome":"Kit Kero",
            "preco":"25,00"
        }
        
    ]


    return(
        <div className='page-gourmet'>
            <div className='titulo'>
             <h1>Gourmet</h1>
            </div>
            <div className='container-gourmet'>
                
                {destaques.map((item)=>(
                     <Destaque_Gourmet nome={item.nome} preco={item.preco} url={item.url} informacoes={item} />
                ))}
           
            </div>
        </div>
    )
}