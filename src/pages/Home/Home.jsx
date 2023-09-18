import { useState, useEffect } from 'react';
import './Home.css';
import { getFilms } from '../../services/apiCalls';

export const Home = () => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        getFilms()
            .then(res => setFilms(res))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="homeDesign">
            {films.map(film => {
                return (
                    <div key={film.id}>
                        <img src={film.image} alt="Image" className="filmImage"/>
                    </div>
                )
            })}
        </div>
    )
}