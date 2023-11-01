import { useContext, useEffect, useState } from "react";
import { getFilms } from "../services/apiCalls";
import { SearchContext } from "../App";
import { type Film, type SearchContextType } from "../types";

export const useFilms = () => {

    const [allFilms, setAllFilms] = useState<Film[]>([]);
    const { searchedString } = useContext<SearchContextType>(SearchContext)

    useEffect(() => {
        getFilms()
            .then((res: Film[]) => setAllFilms(res))
            .catch((error: Error) => console.log(error))
    }, [])


    const searchedFilm = (allFilms.find(film => film.title.toLowerCase() === searchedString.toLowerCase().trim()))

    return { allFilms, searchedFilm }
}