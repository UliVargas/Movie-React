import styles from './MovieDetails.module.css'
import { Get } from '../utils/HTTPSClient'
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { Spinner } from '../components/Spinner';
import { useQuery} from '../hooks/useQuery'


export function MovieDetails() {
    const { movieId } = useParams();
    const [Movie, setMovie] = useState([]);
    const [Loading, setLoading] = useState(true);



    useEffect(() => {
            setLoading(true)
        Get('/movie/' + movieId).then((data) => {
            setLoading(false);
            setMovie(data)
        })
        }, [movieId]);
    if(Loading) {
        return <Spinner />
    }
    if(!Movie) {
        return null;
    }
    console.log(Movie.genres)
    const ImageUrl = 'https://image.tmdb.org/t/p/w500' + Movie.poster_path;
    return (
        <div className={styles.movieDetails}>
            <img  className={`${styles.col} ${styles.movieImage}`} src={ImageUrl} alt={Movie.title}/>
            <div className={`${styles.col} ${styles.movieTitle}`}>
                <p className={styles.firstTitle}><strong>Title:</strong> {Movie.title}</p>
                <p><strong>Genres:</strong>{' '}</p>
                <p><strong>Description:</strong> {Movie.overview}</p>
            </div>
        </div>
    )
}