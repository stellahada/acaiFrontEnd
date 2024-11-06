import './index.scss'

export default function BarraPesquisa({texto,funcaoSet}){
    
    return(
        <div className='barraPesquisa'>
            <input type='text' value={texto} onChange={(e)=>funcaoSet(e.target.value)}></input><button>Buscar</button>
        </div>
    )
}