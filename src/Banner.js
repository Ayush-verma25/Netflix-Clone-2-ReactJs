import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";

function Banner() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchData();
    }, []);

    console.log(movies);

    function truncate(string, number) {
        return string?.length > number
            ? string.substring(0, number - 1) + "..."
            : string;
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__container">
                <h1 className="banner__title">
                    {movies?.title || movies?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movies?.overview, 150)}
                </h1>
            </div>

            <div className="banner__fadeBotton" />
        </header>
    );
}

export default Banner;
