import { type Film } from '../../types'
import './FilmDetail.css'

interface Props {
    film: Film | null
    loading: boolean
}

export const FilmDetail: React.FC<Props> = ({ film, loading }) => {

    if(loading || !film){
        return <p>Loading...</p>
    }

    return (
        <div className="detailDesign">
            <div>
                <h1>{film.title}</h1>
                <h2>{film.original_title}</h2>
            </div>
            <p className="fs-5">{film.description}</p>
            <div className="squareGroup">
                <div className="squaresInfo">
                    <div className="fs-4">{film.director}</div>
                    <div className="fs-6">DIRECTOR</div>
                </div>
                <div className="squaresInfo">
                    <div className="fs-4">{film.producer}</div>
                    <div className="fs-6">PRODUCER</div>
                </div>
                <div className="squaresInfo">
                    <div className="fs-4">{film.release_date}</div>
                    <div className="fs-6">RELEASE DATE</div>
                </div>
                <div className="squaresInfo">
                    <div className="fs-4">{film.running_time} min</div>
                    <div className="fs-6">RUNNING TIME</div>
                </div>
            </div>
        </div>
    )
}