import { Link } from 'react-router-dom'

import './style.css'


function Card({ img, api, text, page }) {
    return (
        <div className='card'>

            <img src={img} className='img' />
            <span>{api}</span>
            <p className="info">
                {text}
            </p>
            <div className="share">

                <Link to={page}>
                    <button>API {api}</button>
                </Link>
            </div>
        </div>
    )
}

export default Card