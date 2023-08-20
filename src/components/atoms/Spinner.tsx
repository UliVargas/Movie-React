import { ImSpinner } from 'react-icons/im'

import styles from '../../styles/Spinner.module.css'

export const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <ImSpinner className={styles.spinnig} size={'60'} />
    </div>
  )
}
