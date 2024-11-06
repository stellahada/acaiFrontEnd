import './index.scss'

import Home from '../sessoes/home';
import Informacoes from '../sessoes/informacoes';
import Destaque from '../sessoes/destaques';
import Tradicionais from '../sessoes/tradicionais';
import Gourmet from '../sessoes/gourmet';
import Personalizado from '../sessoes/personalizado';

export default function landingPage(){
return(
    <div>
    <Home visibilidade={false} />
    <Informacoes visibilidade={false}/>
    <Destaque/>
    <Tradicionais/>
    <Gourmet/>
    <Personalizado/>
    </div>
)

}