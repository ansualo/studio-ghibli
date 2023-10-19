import './Films.css'
import { useState } from "react";
import { CustomModal } from "../../common/Modal/Modal";
import { useFilms } from "../../hooks/useFilms";
import { useDetail } from '../../hooks/useDetail';
import { FilmDetail } from "../FilmDetail/FilmDetail";

export const Films = () => {

    const { allFilms, searchedFilm } = useFilms()
    const [selectedFilm, setSelectedFilm] = useState()
    const { detailFilm, detailLoading } = useDetail(selectedFilm)
    const [modalShow, setModalShow] = useState(false);

    if (!allFilms) {
        return <p>Loading...</p>
    }


    return (
        <div className="homeDesign">
            {searchedFilm
                ? (
                    <div onClick={() => { setSelectedFilm(searchedFilm.id); setModalShow(true) }}>
                        <img src={searchedFilm.image} alt="Poster of the film" className="filmImage" />
                    </div>
                )
                : (
                    allFilms.map(film => {
                        return (
                            <div key={film.id} onClick={() => { setSelectedFilm(film.id); setModalShow(true) }}>
                                <img src={film.image} alt="Poster of the film" className="filmImage" />
                            </div>
                        )
                    })
                )

            }
            <CustomModal show={modalShow} onClick={() => setModalShow(false)}>
                <FilmDetail film={detailFilm} loading={detailLoading} />
            </CustomModal>
        </div>
    )
}



