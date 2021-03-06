import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import {LandingPage} from "./pages/LandingPage";
import {Nav} from "./components/Nav";

export function App() {
    return (
        <Router>
            <header>
                <Nav />
            </header>
            <main>
                 <Switch>
                     <Route exact path="/movie/:movieId">
                         <MovieDetails />
                     </Route>
                     <Route path="/">
                         <LandingPage />
                     </Route>
                 </Switch>
            </main>
        </Router>
    )
}