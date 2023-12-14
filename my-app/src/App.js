import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import './app.css';

// 6eec4094

const API_URL = 'http://www.omdbapi.com?apikey=6eec4094';



const App = () => {
    const [ movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies('Spiderman')
    }, [])

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input placeholder="Search Movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <img src="{SearchIcon}" alt="Search" onClick={() => searchMovies(searchTerm)}/>
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {/* <MovieCard movie1={movies[0]}/> */}
                        {movies.map((movie) => {
                          return  <MovieCard movie={movie}/>
                        })}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )}
        </div>
    );
}


export default App;