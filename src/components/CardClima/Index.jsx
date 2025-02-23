import './style.css'

function CardClima({ img, previsao, local, change, form, val, temperaturamin, temperatura, temperaturamax }) {
    return (
        <div className="cardClima">
            <form onSubmit={form}>
                <input type='text' onChange={change} placeholder='Digite o nome da Cidade' value={val} />
                <input type='submit'  />
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
