import { FaSearch } from "react-icons/fa";

import './style.css'

function CardClima({ img, previsao, local, change, form, val, temperaturamin, temperatura, temperaturamax, submitForm }) {
    return (
        <div className="cardClima">
            <form onSubmit={submitForm}>
                <input type='text' onChange={change} placeholder='Digite o nome da Cidade' value={val} className='inputText' />
                <FaSearch onClick={form} className='btnInput' />
            </form>

            <img src={img} alt="" />
            <h3>{local}</h3>
            <h4>{previsao}</h4>
            <div className='temperatura'>
                <span>
                    <span>
                        Atual
                    </span>
                    {temperatura}ºC
                </span>
                <span>
                    <span>
                        Min
                    </span>
                    {temperaturamin}ºC
                </span>
                <span>
                    <span>
                        Max
                    </span>
                    {temperaturamax}ºC
                </span>
            </div>


        </div >
    )
}

export default CardClima;
