import { FaGithub } from 'react-icons/fa'
import styles from './Footer.module.css'
export function Footer() {
    return (
        <div className={styles.footer}>
            <h4>Create By <FaGithub /> <a href='https://github.com/UliVargas' target={'_blank'}><span>@UliVargas</span></a></h4>
        </div>
    )
}