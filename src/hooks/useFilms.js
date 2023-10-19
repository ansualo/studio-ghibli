import { useContext, useEffect, useState } from "react";
import { getFilms } from "../services/apiCalls";
import { SearchContext } from "../App";

export const useFilms = () => {

    const [allFilms, setAllFilms] = useState([]);
    const { searchedString, setSearchedString } = useContext(SearchContext)

    useEffect(() => {
        getFilms()
            .then(res => setAllFilms(res))
            .catch(error => console.log(error))
    }, [])


    const searchedFilm = (allFilms.find(film => film.title.toLowerCase() === searchedString.toLowerCase().trim()))

    return { allFilms, searchedFilm }
}