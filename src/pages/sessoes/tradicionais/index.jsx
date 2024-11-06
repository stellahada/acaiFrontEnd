import './index.scss'

import Destaque_Trad from '../../../components/tradicionais'

export default function Tradicionais(){

    const destaques = [
        {
            "url":'./assets/images/tradicionais/acai.png',
            "nome":"Açaí natural",
            "descricao":"Açaí natural, puro e cremoso",
            "preco":"15,00"
        },
        {
            "url":'./assets/images/tradicionais/acai_deuses.png',
            "nome":"Açaí dos deuses",
            "descricao":"Lascas de coco, melado de cana e granola artesanal",
            "preco":"40,00"
        }
        ,
        {
            "url":'./assets/images/tradicionais/acai_completinho.png',
            "nome":"Completinho",
            "descricao":"Frutas, granola e leite condensado",
            "preco":"35,00"
        }
        ,
        {
            "url":'./assets/images/tradicionais/acai_proteico.png',
            "nome":"Açaí proteico",
            "descricao":"Proteina em pó, e castanhas de caju",
            "preco":"25,00"
        }
        ,
        {
            "url":'./assets/images/tradicionais/acai_chocolate.png',
            "nome":"Açaí com chocolate",
            "descricao":"Chocolate e frutas vermelhas",
            "preco":"35,00"
        }
        ,
        {
            "url":'./assets/images/tradicionais/acai_classico.png',
            "nome":"Clássico",
            "descricao":"Morango ou banana, granola e leite condensado",
            "preco":"35,00"
        }
        
    ]


    return(
        <div className='page-tradicionais'>
            <div className='titulo'>
             <h1>Tradicionais</h1>
            </div>
            <div className='container-tradicionais'>
                
                {destaques.map((item)=>(
                     <Destaque_Trad nome={item.nome} descricao={item.descricao} preco={item.preco} url={item.url} informacoes={item}/>
                ))}
           
            </div>
        </div>
    )
}