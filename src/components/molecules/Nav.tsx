import { Link } from 'react-router-dom'

import styles from '../../styles/Nav.module.css'

import { SearchBar } from './SearchBar'

export const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <Link to={'/'}>
          <h1 className={styles.title}>
            Movies<span>Browser</span>
          </h1>
        </Link>
        <SearchBar />
      </div>
    </div>
  )
}
