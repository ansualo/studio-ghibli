import { useEffect, useState } from "react";
import { getFilmById } from "../services/apiCalls";

export const useDetail = (selectedFilm) => {

    const [detailFilm, setDetailFilm] = useState([]);
    const [detailLoading, setDetailLoading] = useState(false);

    useEffect(() => {
        if (selectedFilm) {
            setDetailLoading(true)
            getFilmById(selectedFilm)
                .then(res => setDetailFilm(res))
                .catch(error => console.log(error))
                .finally(() => setDetailLoading(false))
        }
    }, [selectedFilm]);

    return { detailFilm, detailLoading }
}
