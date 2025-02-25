import './style.css';


import { useState, useEffect } from "react";
import Card from "../../components/CardClima/Index";
import Loader from "../../components/Loader/Index"


function Clima() {
    const [erro, setErro] = useState(false)
    const [dadosClima, setDadosClima] = useState(null);
    const [password] = useState('b1b15e88fa797225412429c1c50c122a1');
    const [city, getCity] = useState('')
    const [useMin, getMin] = useState()
    const [useMax, getMax] = useState()
    const [atual, getAtual] = useState()
    const [useCity, getUseCity] = useState('osasco')

    useEffect(() => {

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${useCity}&appid=${password}&lang=pt_br`)
            .then(dados => dados.json())
            .then(dados => {
                if (dados.cod === "404") {
                    setErro(true)
                    setDadosClima(null)
                } else {
                    setDadosClima(dados); // Armazenando os dados no estado
                    setErro(false)
                    getAtual(dados.list[0].main.temp)
                    getMin(dados.list[0].main.temp_min)
                    getMax(dados.list[0].main.temp_max)
                }
            })
            .catch((error) => {
                error
            });
    }, [useCity, password]);

    function form(e) {
        e.preventDefault();
        getUseCity(city);
    }

    function noReflesh(e) {
        e.preventDefault();
        getUseCity(city);
    }

    return (
        <div className="containerClima">
            {erro ? (
                <Card 
                    previsao='Local não encontrado'
                    form={form}
                    change={(e) => getCity(e.target.value)}
                    submitForm={noReflesh}
                    />
            ) : dadosClima ? (
                <Card
                    img={`https://openweathermap.org/img/wn/${dadosClima.list[0].weather[0].icon}@2x.png`} // Exemplo de como pegar o ícone
                    previsao={dadosClima.list[0].weather[0].description} // Exemplo de previsão
                    local={dadosClima.city.name} // Nome da cidade
                    form={form}
                    change={(e) => getCity(e.target.value)}
                    temperatura={Math.trunc(atual)- 273}
                    temperaturamin={Math.trunc(useMin) - 273}
                    temperaturamax={Math.trunc(useMax) - 273}
                    submitForm={noReflesh}
                />
            ) : (
                <Loader /> // Exibindo uma mensagem enquanto os dados não são carregados
            )}
        </div>
    );
}

export default Clima;