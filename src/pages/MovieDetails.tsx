import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Get } from '../utils/HTTPSClient'
import styles from '../styles/MovieDetails.module.css'
import { Movie } from '../interfaces/movie.interface'
import { Spinner } from '../components/atoms/Spinner'

export function MovieDetails() {
  const { movieId } = useParams() as { movieId: string }
  const [movie, setMovie] = useState<Movie>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    Get('/movie/' + movieId).then(data => {
      setMovie(data)
      setLoading(false)
    })
  }, [movieId])
  if (loading) {
    return <Spinner />
  }
  if (!movie) {
    return null
  }
  const ImageUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path

  return (
    <div className={styles.movieDetails}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={ImageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieTitle}`}>
        <p className={styles.firstTitle}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres: </strong>
          {movie.genres.map(genre => genre.name).join(', ')}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  )
}
