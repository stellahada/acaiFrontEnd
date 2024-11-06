import './index.scss'
import { SlHome } from "react-icons/sl";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { SlLogin } from "react-icons/sl";
import { useState, useEffect } from 'react';

export default function Botao({ iconeId, funcaoSet, funcaoExb, funcaoNav }) {
    let [textButton, setTextButton] = useState("")

    useEffect(() => {
        if (iconeId === 1) {
            setTextButton("HOME");
        } else if (iconeId === 2) {
            setTextButton("REGITROS");
        } else if (iconeId === 3) {
            setTextButton("LOGOUT");
        }
    }, [iconeId]);

    function funcsBotaoSE(){
        funcaoSet()
        funcaoExb()
    }
    function funcBotaoN(){
        funcaoNav()
    }

    return (
        <div className="botao-geral" onClick={() => {
            iconeId!==3 ? funcsBotaoSE() : funcBotaoN()
        }}>
            <button> {iconeId === 1 ? <SlHome className='icone' /> :
                iconeId === 2 ? <RxCounterClockwiseClock className='icone' /> :
                    <SlLogin className='icone' />} {textButton}</button>
        </div>
    )
}