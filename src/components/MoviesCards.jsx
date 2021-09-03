import { MovieCard } from './MovieCard'
import styles from './MovieCards.module.css'
import {useEffect, useState} from "react";
import { Get } from '../utils/HTTPSClient'
import { Spinner } from './Spinner';
import { useQuery } from '../hooks/useQuery'

export function MoviesCards() {
    const [Movies, setMovies] = useState([])
    const [Loading, setLoading] = useState(true);

    const query = useQuery();
    const search = query.get('search')

    useEffect(() => {
        setLoading(true)
        const searchUrl = search
        ? '/search/movie/?query=' + search
        : '/discover/movie'

        Get(searchUrl).then((data) => {
            setMovies(data.results);
            setLoading(false)
        })
    }, [search])

    if(Loading) {
        return <Spinner />
    }

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