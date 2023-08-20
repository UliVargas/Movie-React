import { useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { useEffect, useState } from 'react'

import styles from '../../styles/SearchBar.module.css'
import { useQuery } from '../../hooks/useQuery'

export const SearchBar = () => {
  const query = useQuery()
  const search = query.get('search')

  const [SearchText, setSearchText] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate('/?search=' + SearchText)
  }

  useEffect(() => {
    setSearchText(search || '')
  }, [search])

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          value={SearchText}
          onChange={e => setSearchText(e.target.value)}
          type="text"
          className={styles.searchInput}
          placeholder={'Search Movie'}
        />
        <button className={styles.searchButton} type={'submit'}>
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  )
}
