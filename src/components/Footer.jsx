import { FaGithub } from 'react-icons/fa'
import styles from './Footer.module.css'
import {Link} from "react-router-dom";
export function Footer() {
    return (
        <div className={styles.footer}>
            <h4>Create By <FaGithub /> <a href='https://github.com/UliVargas' target={'_blank'}><span>@UliVargas</span></a></h4>
        </div>
    )
}