import './index.scss'

import Destaque_Comp from '../../../components/destaque'


export default function Destaque(){

    const destaques = [
        {
            "url":'./assets/images/destaques/casal.png',
            "nome":"Combo casal",
            "preco":"50,00"
        },
        {
            "url":'./assets/images/destaques/barca.png',
            "nome":"Barca de Açai",
            "preco":"100,00"
        },
        {
            "url":'./assets/images/destaques/bomba.png',
            "nome":"Bomba de Açai",
            "preco":"75,00"
        }
    ]

    

    return(
        <div className='page-destaque'>
            <div className='titulo'>
             <h1>Destaques</h1>
            </div>
            <div className='container-destaques'>
                {destaques.map((item)=>(
                     <Destaque_Comp nome={item.nome} preco={item.preco} url={item.url} informacoes={item}  />
                ))}
           
            </div>
        </div>
    )
}