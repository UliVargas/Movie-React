import { useEffect, useState } from 'react'

import { Spinner } from '../atoms/Spinner'
import { MovieCard } from '../atoms/MovieCard'
import { Get } from '../../utils/HTTPSClient'
import styles from '../../styles/MovieCards.module.css'
import { Movie } from '../../interfaces/movie.interface'
import { useQuery } from '../../hooks/useQuery'

export const MoviesCards = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)

  const query = useQuery()
  const search = query.get('search')

  useEffect(() => {
    setLoading(true)
    const searchUrl = search
      ? '/search/movie?query=' + search
      : '/discover/movie'

    Get(searchUrl).then(data => {
      setMovies(data.results)
      setLoading(false)
    })
  }, [search])

  if (loading) {
    return <Spinner />
  }

  return (
    <ul className={styles.movieCards}>
      {movies.map(movie => {
        return <MovieCard key={movie.id} movie={movie} />
      })}
    </ul>
  )
}
