import './style.css'

import Card from "../../components/CardHome/Index"

function Home() {
    return (
        <div className='home'>
            <Card img={'src/assets/cambio.png'} api={'Conversão de Moeda'} text={'MOEDA'} page={'/conversao'}/>
            <Card img={'src/assets/clima.png'} api={'Clima'} text={'Api para apresentar o clima diario da sua região'} page={'/clima'}/>
            <Card img={'src/assets/jornal.png'} api={'Jornal'} text={'API, new york times'} page={'/jornal'}/>
        </div>
    )
}

export default Home