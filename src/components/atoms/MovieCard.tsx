import { Link } from 'react-router-dom'
import { FC } from 'react'

import styles from '../../styles/MovieCard.module.css'
import { Movie } from '../../interfaces/movie.interface'

interface Props {
  movie: Movie
}

export const MovieCard: FC<Props> = ({ movie }) => {
  const ImageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <li className={styles.movieCard}>
      <Link to={`/movie/${movie.id}`}>
        <img src={ImageUrl} alt={movie.title} className={styles.movieImage} />
        <div className={styles.movieTitle}>{movie.title}</div>
      </Link>
    </li>
  )
}
