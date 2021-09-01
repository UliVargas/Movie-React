import styles from '../components/SearchBar.module.css'
import { FaSearch } from 'react-icons/fa'
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {useQuery} from "../hooks/useQuery";

export function SearchBar() {
        const query = useQuery();
        const search = query.get('search')

        const [SearchText, setSearchText] = useState('');
        const History = useHistory();
        const handleSubmit = (e) => {
            e.preventDefault();
            History.push('/?search=' + SearchText)
        }

        useEffect(() => {
            setSearchText(search || '')
        }, [search])

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input value={SearchText}
                       onChange={(e) => setSearchText(e.target.value)}
                       type="text"
                       className={styles.searchInput}
                       placeholder={'Search Movie'}
                />
                <button className={styles.searchButton} type={"submit"}>
                    <FaSearch size={20} />
                </button>
            </div>
        </form>
    )
}