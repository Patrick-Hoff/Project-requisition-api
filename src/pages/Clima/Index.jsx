import { useState, useEffect } from "react";
import Card from "../../components/CardClima/Index";
import './style.css';

function Clima() {
    cosnt [erro, setErro] = useState(false)
    const [dadosClima, setDadosClima] = useState(null);
    const [password] = useState('b1b15e88fa797225412429c1c50c122a1');
    const [city, getCity] = useState('')
    const [useCity, getUseCity] = useState('osasco')

    useEffect(() => {

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${useCity}&appid=${password}`)
            .then(dados => dados.json())
            .then(dados => {
                if (dados.cod === "404") {
                    setErro(true)
                    setDadosClima(null)
                } else {
                setDadosClima(dados); // Armazenando os dados no estado
                setErro(false)
                }
            })
            .catch((error) => {
                alert('Local lão localizado')
            });
    }, [useCity, password]);

    function form(e) {
        e.preventDefault();
        getUseCity(city);
        console.log(city)
    }

    return (
        <div className="">
            {dadosClima ? (
                <Card
                    img={`https://openweathermap.org/img/wn/${dadosClima.list[0].weather[0].icon}@2x.png`} // Exemplo de como pegar o ícone
                    previsao={dadosClima.list[0].weather[0].description} // Exemplo de previsão
                    local={dadosClima.city.name} // Nome da cidade
                    form={form}
                    change={(e) => getCity(e.target.value)}
                />
            ) : (
                <p>Carregando dados...</p> // Exibindo uma mensagem enquanto os dados não são carregados
            )}
        </div>
    );
}

export default Clima;