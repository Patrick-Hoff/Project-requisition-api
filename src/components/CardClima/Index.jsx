import './style.css'

function CardClima({ img, previsao, local, change, form, val }) {
    return (
        <div className="cardClima">
            <form onSubmit={form}>
                <input type='text' onChange={change} placeholder='Digite o nome da Cidade' value={val} />
                <input type='submit'  />
            </form>

            <img src={img} alt="" />

            <h3>{local}</h3>
            <h4>{previsao}</h4>

        </div >
    )
}

export default CardClima;
