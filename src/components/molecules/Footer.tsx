import { FaGithub } from 'react-icons/fa'

import styles from '../../styles/Footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <h4>
        Create By <FaGithub />{' '}
        <a
          href="https://github.com/UliVargas"
          rel="noopener noreferrer"
          target={'_blank'}
        >
          <span>@UliVargas</span>
        </a>
      </h4>
    </div>
  )
}
