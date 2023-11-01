import { useEffect, useState } from "react";
import { getFilmById } from "../services/apiCalls";
import { Film } from "../types";

export const useDetail = (selectedFilm: string | null) => {

    const [detailFilm, setDetailFilm] = useState<Film | null>(null);
    const [detailLoading, setDetailLoading] = useState<boolean>(false);

    useEffect(() => {
        if (selectedFilm) {
            setDetailLoading(true)
            getFilmById(selectedFilm)
                .then((res: Film | null) => setDetailFilm(res))
                .catch((error: Error) => console.log(error))
                .finally(() => setDetailLoading(false))
        }
    }, [selectedFilm]);

    return { detailFilm, detailLoading }
}
