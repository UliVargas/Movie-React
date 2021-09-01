import {Link} from "react-router-dom";
import {SearchBar} from "./SearchBar";
import  styles from './Nav.module.css'

export function Nav() {
    return (
        <div className={styles.container}>
            <div className={styles.navContainer}>
                <Link to={'/'}><h1 className={styles.title}>Movies<span>Browser</span></h1></Link>
                <SearchBar />
            </div>
        </div>
    )
}