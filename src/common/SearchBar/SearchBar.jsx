import { useContext, useEffect, useState } from "react"
import { useFilms } from "../../hooks/useFilms"
import "./SearchBar.css"
import { SearchContext } from "../../App"

export const SearchBar = () => {

    const [search, setSearch] = useState("")
    const [notFound, setNotFound] = useState("")
    const { searchedString, setSearchedString } = useContext(SearchContext)
    const { searchedFilm } = useFilms()

    const handleSubmit = (event) => {
        event.preventDefault()
        if (search.startsWith(" ")) return
        setSearchedString(search)
    }

    useEffect(() => {
        if (searchedString && !searchedFilm) {
            setNotFound("Film not found");
        } else {
            setNotFound("");
        }
    }, [searchedString, searchedFilm])


    return (
        <>
            <form onSubmit={handleSubmit} className="searchMenu">
                <div className="searchGroup">
                    <input className="searchInput" onChange={e => setSearch(e.target.value)} value={search} placeholder='Spirited Away, Ponyo...' />
                    <button className="searchButton" type='submit'>Search</button>
                </div>
                {notFound && <p className="text-danger">{notFound}</p>}
            </form>
        </>
    )
}