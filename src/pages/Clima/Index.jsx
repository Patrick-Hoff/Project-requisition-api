import './style.css';
import { useState, useEffect } from "react";
import Card from "../../components/CardClima/Index";
import Loader from "../../components/Loader/Index";

function Clima() {
    const [erro, setErro] = useState(false);
    const [dadosClima, setDadosClima] = useState(null);
    const [password] = useState(import.meta.env.VITE_ACCESS_KEY_CLIMA);
    const [city, getCity] = useState('');
    const [useMin, getMin] = useState();
    const [useMax, getMax] = useState();
    const [atual, getAtual] = useState();
    const [useCity, getUseCity] = useState('osasco');

    useEffect(() => {
        // Verifica se a chave da API foi carregada
        if (!password) {
            console.error('Chave da API não encontrada!');
            setErro(true);
            return;
        }

        // Fazendo a requisição à API
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${useCity}&appid=${password}&lang=pt_br`)
            .then(resposta => resposta.json())
            .then(dados => {
                if (dados.cod === "404") {
                    // Se a cidade não for encontrada
                    setErro(true);
                    setDadosClima(null);
                } else if (!dados.list || dados.list.length === 0) {
                    // Se não houver previsão de tempo válida
                    setErro(true);
                    setDadosClima(null);
                } else {
                    // Armazena os dados no estado
                    setDadosClima(dados);
                    setErro(false);
                    getAtual(dados.list[0].main.temp);
                    getMin(dados.list[0].main.temp_min);
                    getMax(dados.list[0].main.temp_max);
                }
            })
            .catch((error) => {
                console.error('Erro ao buscar os dados do clima:', error);
                setErro(true);
            });
    }, [useCity, password]);

    function form(e) {
        e.preventDefault();
        if (city.trim() === '') {
            setErro(true);
            return; // Não envia a requisição se o campo estiver vazio
        } else {
            setErro(false);
        }
        getUseCity(city);
    }

    return (
        <div className="containerClima">
            {erro ? (
                <Card
                    previsao='Local não encontrado'
                    form={form}
                    change={(e) => getCity(e.target.value)}
                    submitForm={form}
                />
            ) : dadosClima ? (
                <Card
                    img={`https://openweathermap.org/img/wn/${dadosClima.list[0].weather[0].icon}@2x.png`} // Pega o ícone
                    previsao={dadosClima.list[0].weather[0].description} // Previsão do tempo
                    local={dadosClima.city.name} // Nome da cidade
                    form={form}
                    change={(e) => getCity(e.target.value)}
                    // Converte as temperaturas de Kelvin para Celsius
                    temperatura={Math.round(atual - 273)} // Temperatura atual
                    temperaturamin={Math.round(useMin - 273)} // Temperatura mínima
                    temperaturamax={Math.round(useMax - 273)} // Temperatura máxima
                    submitForm={form}
                />
            ) : (
                <Loader /> // Exibe um loader enquanto os dados são carregados
            )}
        </div>
    );
}

export default Clima;
