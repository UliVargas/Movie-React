import styles from './MovieCard.module.css'
import {Link} from "react-router-dom";

export function MovieCard({ movie }) {
        const ImageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        return (
        <li className={styles.movieCard}>
            <Link to={`/movie/${movie.id}`}>
            <img src={ImageUrl} alt={movie.title} className={styles.movieImage} />
            <div className={styles.movieTitle}>{movie.title}</div>
            </Link>
        </li>
        )
};