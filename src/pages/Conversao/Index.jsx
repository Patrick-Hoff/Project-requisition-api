import Card from '../../components/CardConversao/Index'
import './style.css'
import { useState, useEffect } from 'react'

function Conversao() {
    const [api, getApi] = useState({});
    const [password] = useState(import.meta.env.VITE_ACESS_KEY_CONVERSAO);

    useEffect(() => {
        fetch(`https://data.fixer.io/api/latest?access_key=${password}`)
            .then(response => response.json())
            .then(data => {
                getApi(data);  // Atualiza o estado 'api' com a resposta da API
                console.log(data);
            })
            .catch(error => console.error('Erro ao buscar dados:', error));
    }, [password]);

    // Certifique-se de que 'api.rates' esteja disponível antes de tentar mapear as chaves
    const countryOptions = api.rates ? Object.keys(api.rates).map((value, index) => (
        <option key={index} value={value}>{value}</option>
    )) : [];

    return (
        <div className='container containerConversao'>
            <Card 
                filho={countryOptions}
                typeSubmit="submit"
            />
        </div>
    );
}

export default Conversao;
