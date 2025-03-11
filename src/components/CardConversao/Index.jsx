function CardConversao({ typeSubmit, filho, type, valueOne, change, localization1, valueTwo, place, submitForm, placeTwo }) {
    return (
        <div className='cardClima cardConversao'>
            <form onSubmit={submitForm}>
                <input type={type} value={valueOne} onChange={change} placeholder={place} />
                <select>
                    {filho}
                </select>
                <span>{localization1}</span>
                <input type={type} value={valueTwo} onChange={change} placeholder={placeTwo} />
                <select>
                    {filho}
                </select>

                <input type={typeSubmit} placeholder='Enviar' id='envSubmit'/>
            </form>

        </div>
    );
}

export default CardConversao;
