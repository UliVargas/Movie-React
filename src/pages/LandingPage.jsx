import { MoviesCards } from '../components/MoviesCards.jsx'
import { SearchBar } from '../components/SearchBar.jsx'
export function LandingPage() {
    return (
        <div>
        <SearchBar />
        <MoviesCards />
        </div>
    )
}