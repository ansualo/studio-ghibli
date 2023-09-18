import './FilmDetail.css'

export const FilmDetail = ({film}) => {

    return(
        <div className="detailDesign">
            <h1>{film.title}</h1>
        </div>
    )
}