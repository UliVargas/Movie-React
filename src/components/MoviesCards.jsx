import { MovieCard } from './MovieCard'
import styles from './MovieCards.module.css'
import {useEffect, useState} from "react";
import { Get } from '../utils/HTTPSClient'

export function MoviesCards() {
    const [Movies, setMovies] = useState([])

    useEffect(() => {
        Get('/discover/movie').then((data) => {
            setMovies(data.results);
        })
    }, [])


    return (
        <ul className={styles.movieCards}>
            {Movies.map(movie => {
                return (
                    <MovieCard key={movie.id} movie={movie}/>
                );
            })}
        </ul>
    )
}