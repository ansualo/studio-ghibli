import { useState, useEffect } from 'react';
import './Home.css';
import { getFilmById, getFilms } from '../../services/apiCalls';
import { FilmDetail } from '../FilmDetail/FilmDetail';
import { CustomModal } from '../../common/Modal/Modal';

export const Home = () => {

    const [allFilms, setAllFilms] = useState([]);
    const [oneFilm, setOneFilm] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        getFilms()
            .then(res => setAllFilms(res))
            .catch(error => console.log(error))
    }, [])

    const filmHandler = (id) => {
        getFilmById(id)
            .then(res => setOneFilm(res))
            .catch(error => console.log(error))
    }

    return (
        <div className="homeDesign">

            <CustomModal show={modalShow} onClick={() => setModalShow(false)}>
                <FilmDetail film={oneFilm} />
            </CustomModal>
            {allFilms.map(film => {
                return (
                    <div key={film.id} onClick={() => { filmHandler(film.id); setModalShow(true) }}>
                        <img src={film.image} alt="Image" className="filmImage" />
                    </div>
                )
            })}
        </div>
    )
}