import './index.scss'

export default function Sesoes({ funcaoSet, funcaoExb }) {

    return (
        <div className='sessoes-geral'>
            <ul>
                <li onClick={() => {
                    funcaoSet("Em preparo");
                    funcaoExb("Em preparo");
                }}>
                    Em preparo
                </li>

                <li onClick={() => {
                    funcaoSet("Finalizado");
                    funcaoExb("Finalizado");
                }}>
                    Finalizado
                </li>
            </ul>
        </div>
    );
}